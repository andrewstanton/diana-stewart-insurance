import { ReactNode } from "react"

import { nav } from "@/config/meta"
import { Footer } from "../molecules"
import MainHeader from "./MainHeader"

export interface MainLayoutProps {
  children?: ReactNode
  phone: string
  email: string
  facebook: string | null
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { children, phone, email, facebook } = props

  return (
    <div>
      <MainHeader items={nav} phone={phone} email={email} />
      <main>{children}</main>
      <Footer phone={phone} email={email} facebook={facebook} />
    </div>
  )
}

export default MainLayout
