import { ReactNode } from "react"

import { nav } from "@/config/meta"
import { Footer } from "../molecules"
import MainHeader from "./MainHeader"

export interface MainLayoutProps {
  children?: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { children } = props

  return (
    <div>
      <MainHeader items={nav} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
