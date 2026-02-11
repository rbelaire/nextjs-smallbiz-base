import Link from "next/link"
import Container from "../ui/Container"
import { site } from "@/content/site"

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold">
            {site.name}
          </Link>

          <nav className="hidden gap-8 md:flex">
            <Link href="#services" className="text-sm hover:opacity-70">
              Services
            </Link>
            <Link href="#contact" className="text-sm hover:opacity-70">
              Contact
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  )
}
