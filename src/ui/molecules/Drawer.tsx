import { forwardRef } from "react"
import Link from "next/link"
import slugify from "slugify"
import cns from "classnames"

// @types
import { INavItem } from "@/config/meta"

import "./Drawer.css"

export interface DrawerProps {
  links: INavItem[]
  isOpen: boolean
  onClose: () => void
}

const Drawer = forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
  const { links, isOpen, onClose } = props

  return (
    <>
      <div
        className={cns("fixed top-0 left-0 h-full w-full hidden bg-gray-500", {
          "show-block": isOpen,
        })}
        style={{ zIndex: "11" }}
      />
      <div
        className={cns("fixed top-0 left-0 h-full w-full hidden", {
          "show-block": isOpen,
        })}
        style={{ zIndex: "12" }}
        ref={ref}
      >
        <div className="h-full w-full">
          <div className="absolute right-10 top-10">
            <button
              onClick={() => onClose()}
              className="close-button outline-none border-0 bg-transparent cursor-pointer"
              aria-label="Mobile Nav Togle Button"
              type="button"
            />
          </div>
          <nav className="px-24 py-4">
            {links.map((item) => (
              <div key={slugify(item.url as string)}>
                <Link
                  href={item.url}
                  className="text-white text-xl block w-full no-underline py-4 border-dotted border-0 border-b"
                >
                  {item.label}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
})

Drawer.displayName = "Mobile Nav Toggle Button"

export default Drawer
