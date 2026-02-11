import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata = {
  title: "Small Business Website",
  description: "Professional services tailored to your needs.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
