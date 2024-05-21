import { ReactNode } from "react"
import "./globals.css"

import StyledComponentsRegistry from "@/lib/registry"
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
        <StyledComponentsRegistry>
          <Header phone="419-290-0145" email="demo@gmail.com" />
          <main className="bg-white">{children}</main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
