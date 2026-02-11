import { spawn } from "node:child_process"
import { once } from "node:events"
import net from "node:net"

const STARTUP_TIMEOUT_MS = 20_000
const SHUTDOWN_TIMEOUT_MS = 5_000

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function getFreePort() {
  const server = net.createServer()
  server.listen(0, "127.0.0.1")
  await once(server, "listening")
  const address = server.address()

  if (!address || typeof address === "string") {
    server.close()
    throw new Error("Failed to get a free TCP port.")
  }

  const port = address.port
  server.close()
  await once(server, "close")
  return port
}

async function waitForServer(baseUrl, timeoutMs) {
  const start = Date.now()

  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(`${baseUrl}/`)
      if (res.ok) return
    } catch {
      // Keep polling until timeout.
    }
    await sleep(250)
  }

  throw new Error(`Server did not become ready within ${timeoutMs}ms.`)
}

function createError(name, status, body) {
  return new Error(`${name} failed: expected status ${status}, got ${body.status}. Body: ${body.text}`)
}

async function runChecks(baseUrl) {
  const home = await fetch(`${baseUrl}/`)
  if (home.status !== 200) {
    const text = await home.text()
    throw new Error(`GET / failed: expected 200, got ${home.status}. Body: ${text.slice(0, 300)}`)
  }

  const valid = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Hello from smoke test message",
    }),
  })
  const validText = await valid.text()
  if (valid.status !== 200) {
    throw createError("POST /api/contact (valid payload)", 200, { status: valid.status, text: validText })
  }

  const invalid = await fetch(`${baseUrl}/api/contact`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      name: "J",
      email: "bad",
      message: "short",
    }),
  })
  const invalidText = await invalid.text()
  if (invalid.status !== 400) {
    throw createError("POST /api/contact (invalid payload)", 400, {
      status: invalid.status,
      text: invalidText,
    })
  }
}

async function stopServer(proc) {
  if (proc.exitCode !== null) return

  proc.kill("SIGTERM")
  const closed = once(proc, "exit")
  const timeout = sleep(SHUTDOWN_TIMEOUT_MS)
  await Promise.race([closed, timeout])

  if (proc.exitCode === null) {
    proc.kill("SIGKILL")
    await once(proc, "exit")
  }
}

async function main() {
  const port = await getFreePort()
  const baseUrl = `http://127.0.0.1:${port}`
  const nextCli = "node_modules/next/dist/bin/next"
  const proc = spawn(process.execPath, [nextCli, "start", "--port", String(port), "--hostname", "127.0.0.1"], {
    stdio: ["ignore", "pipe", "pipe"],
    env: process.env,
  })

  let logs = ""
  proc.stdout.on("data", (chunk) => {
    logs += chunk.toString()
    if (logs.length > 4000) logs = logs.slice(-4000)
  })
  proc.stderr.on("data", (chunk) => {
    logs += chunk.toString()
    if (logs.length > 4000) logs = logs.slice(-4000)
  })

  try {
    await waitForServer(baseUrl, STARTUP_TIMEOUT_MS)
    await runChecks(baseUrl)
    console.log("Smoke tests passed.")
  } catch (error) {
    throw new Error(`${error instanceof Error ? error.message : String(error)}\n\nRecent server logs:\n${logs}`)
  } finally {
    await stopServer(proc)
  }
}

await main()
