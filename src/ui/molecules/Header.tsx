import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import Button from "../atoms/Button"

import logo from "../../../public/images/logo.jpg"

export interface INavItem {
  label: string
  url: string
}

const nav: INavItem[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Health Insurance",
    url: "/health-insurance",
  },
  {
    label: "Testimonials",
    url: "/testimonials",
  },
  {
    label: "Contact",
    url: "/contact",
  },
]

const Header: FC = () => (
  <header className="w-full bg-white">
    <div className="grid grid-cols-2 justify-center items-center">
      <div className="bg-white">
        <Image
          src={logo}
          width={251}
          height={69}
          alt="Diana Stewart Insurance Agent"
        />
      </div>
      <div className="bg-black text-white p-16">
        <Link href="/contact">
          <Button>Get A Free Quote</Button>
        </Link>
      </div>
    </div>
    <nav className="bg-green-500 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {nav.map((item) => (
            <Link
              href={item.url}
              key={item.url}
              className="px-4 py-4 font-bold text-center"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  </header>
)

export default Header
