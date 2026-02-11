import { NextResponse } from "next/server"

type ContactInput = {
  name: string
  email: string
  message: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validateInput(input: ContactInput) {
  const name = input.name?.trim() ?? ""
  const email = input.email?.trim() ?? ""
  const message = input.message?.trim() ?? ""

  if (name.length < 2 || name.length > 100) {
    return { ok: false, error: "Name must be between 2 and 100 characters." }
  }

  if (!isValidEmail(email) || email.length > 254) {
    return { ok: false, error: "Please provide a valid email address." }
  }

  if (message.length < 10 || message.length > 2000) {
    return { ok: false, error: "Message must be between 10 and 2000 characters." }
  }

  return {
    ok: true,
    data: {
      name,
      email,
      message,
    },
  }
}

async function parseContactRequest(req: Request): Promise<ContactInput | null> {
  const contentType = req.headers.get("content-type")?.toLowerCase() ?? ""

  if (contentType.includes("application/json")) {
    const body = await req.json()
    return {
      name: String(body?.name ?? ""),
      email: String(body?.email ?? ""),
      message: String(body?.message ?? ""),
    }
  }

  const formData = await req.formData()
  return {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
  }
}

export async function POST(req: Request) {
  try {
    const parsed = await parseContactRequest(req)

    if (!parsed) {
      return NextResponse.json(
        { success: false, error: "Invalid request body." },
        { status: 400 },
      )
    }

    const validation = validateInput(parsed)

    if (!validation.ok) {
      return NextResponse.json(
        { success: false, error: validation.error },
        { status: 400 },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Contact request received.",
      },
      { status: 200 },
    )
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON or malformed request." },
      { status: 400 },
    )
  }
}
