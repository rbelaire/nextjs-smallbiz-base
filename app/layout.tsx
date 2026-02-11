import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { site } from "@/content/site"
import { buildSeoMetadata } from "@/lib/seo"

export const metadata = buildSeoMetadata({
  title: site.name,
  description: site.description,
  imageUrl: site.ogImage,
  canonicalUrl: site.url,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
