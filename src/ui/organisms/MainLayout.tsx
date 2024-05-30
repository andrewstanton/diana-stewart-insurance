import { ReactNode } from "react"

import { Header, Footer } from "../molecules"

export interface MainLayoutProps {
  children?: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { children } = props

  return (
    <div>
      <Header phone="419-290-0145" email="demo@gmail.com" />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
