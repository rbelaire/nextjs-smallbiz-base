import Link from "next/link"

export default function Button({
  children,
  href = "#",
}: {
  children: React.ReactNode
  href?: string
}) {
  return (
    <Link
      href={href}
      className="inline-block rounded-md bg-black px-6 py-3 text-sm font-semibold text-white transition hover:opacity-80"
    >
      {children}
    </Link>
  )
}
