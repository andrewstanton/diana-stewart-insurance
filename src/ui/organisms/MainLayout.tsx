import { ReactNode } from "react"
import Head from "next/head"

import { Header, Footer } from "../molecules"

export interface MainLayoutProps {
  title?: string | null
  description?: string | null
  children?: ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const { title, description, children } = props

  return (
    <div>
      <Head>
        <title>{title ?? "Diana Stewart Insurance Agent"}</title>
        <meta
          name="description"
          content={description ?? "Diana Stewart Insurance Agent"}
        />
      </Head>
      <Header phone="419-290-0145" email="demo@gmail.com" />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
