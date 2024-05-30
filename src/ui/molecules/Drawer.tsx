import { forwardRef } from "react"
import Link from "next/link"
import slugify from "slugify"
import cns from "classnames"

import { faX } from "@fortawesome/free-solid-svg-icons"

import { INavItem } from "@/config/meta"
import { Icon } from "../atoms"

// @types

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
        className={cns(
          "fixed top-0 left-0 h-full w-full bg-white opacity-90 hidden lg:!hidden",
          {
            "!block": isOpen,
          }
        )}
        style={{ zIndex: "11" }}
      />
      <div
        className={cns("fixed top-0 left-0 h-full w-full hidden lg:!hidden", {
          "!block": isOpen,
        })}
        style={{ zIndex: "12" }}
        ref={ref}
      >
        <div className="h-full w-full">
          <div className="absolute right-10 top-10">
            <button
              onClick={() => onClose()}
              className=" outline-none border-0 text-green-500 cursor-pointer text-3xl"
              aria-label="Mobile Nav Togle Button"
              type="button"
            >
              <Icon icon={faX} />
            </button>
          </div>
          <nav className="h-full flex flex-col items-center justify-center px-24 py-4">
            {links.map((item) => (
              <div key={slugify(item.url as string)}>
                <Link
                  href={item.url}
                  className="text-green-500 text-xl font-black block w-full no-underline py-4"
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
