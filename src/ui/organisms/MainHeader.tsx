"use client"

import { useRef, useState } from "react"

import { INavItem } from "@/config/meta"
import { Drawer, Header } from "../molecules"

// @types

export interface MainHeaderProps {
  items: INavItem[]
  phone: string
  email: string
}

const MainHeader: React.FC<MainHeaderProps> = (props: MainHeaderProps) => {
  const { items, phone, email } = props
  const [isOpen, setOpenState] = useState(false)
  const drawerRef = useRef(null)

  const toggleOpen = () => {
    setOpenState((o) => !o)
  }

  return (
    <div className="relative z-10">
      <Drawer
        ref={drawerRef}
        isOpen={isOpen}
        links={items}
        onClose={() => setOpenState(false)}
      />
      <Header
        phone={phone}
        email={email}
        isOpen={isOpen}
        onHamburgerClick={toggleOpen}
      />
    </div>
  )
}

export default MainHeader
