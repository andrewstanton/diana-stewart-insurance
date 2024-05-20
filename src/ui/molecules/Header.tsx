import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import Button from "../atoms/Button"

import logo from "../../../public/images/logo.jpg"

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
  </header>
)

export default Header
