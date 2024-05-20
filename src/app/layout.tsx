import { ReactNode } from "react"
import "./globals.css"

import Footer from "../ui/molecules/Footer"
import Header from "../ui/molecules/Header"

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="bg-white">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
