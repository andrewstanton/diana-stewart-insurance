import { ReactNode } from "react"
import "./globals.css"

import StyledComponentsRegistry from "@/lib/registry"

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <div className="bg-white">{children}</div>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
