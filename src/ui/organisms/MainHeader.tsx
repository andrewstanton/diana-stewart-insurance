"use client"

import { useState, useRef } from "react"

import { INavItem } from "@/config/meta"
import { Drawer, Header } from "../molecules"

// @types

export interface MainHeaderProps {
  items: INavItem[]
}

const MainHeader: React.FC<MainHeaderProps> = (props: MainHeaderProps) => {
  const { items } = props
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
        phone="419-290-0145"
        email="demo@gmail.com"
        isOpen={isOpen}
        onHamburgerClick={toggleOpen}
      />
    </div>
  )
}

export default MainHeader
