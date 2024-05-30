"use client"

import { faCopy } from "@fortawesome/free-regular-svg-icons"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"
import styled from "styled-components"

import colors from "@/config/colors"
import { nav } from "@/config/meta"
import formatPhone, { cleanPhone } from "@/lib/phone"
import { Button, Icon, Hamburger } from "../atoms"

import logo from "../../../public/images/logo.jpg"

export interface HeaderProps {
  phone: string
  email: string
  isOpen?: boolean
  onHamburgerClick?: () => void
}

const HeaderInfo = styled.div`
  a {
    color: ${colors.white};
    text-decoration: none;
    display: block;

    &:hover {
      text-decoration: underline;
    }
  }
`

const IconContainer = styled.div`
  svg,
  i {
    height: 50px;
    width: 50px;
    color: ${colors.green500};
  }
`

const NavLink = styled(Link)`
  &::after {
    position: absolute;
    transition: all 0.3s ease 0s;
    bottom: 0px;
    width: 0px;
    height: 3px;
    display: block;
    left: 50%;
    transform: translateX(-50%);
    content: "";
    background: ${colors.white};
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`

const Header: FC<HeaderProps> = (props) => {
  const { email, phone, isOpen, onHamburgerClick } = props

  return (
    <header className="w-full bg-white py-6 lg:py-0">
      <Hamburger on={isOpen} onClick={onHamburgerClick} />
      <div className="grid grid-cols-2 justify-center items-center">
        <div className="bg-white px-14">
          <Link href="/">
            <Image
              src={logo}
              width={251}
              height={69}
              alt="Diana Stewart Insurance Agent"
              className="transition-all hover:scale-110 select-none"
            />
          </Link>
        </div>
        <div className="bg-black text-white p-14 hidden lg:block">
          <div className="grid grid-cols-[auto_1fr_auto] items-center">
            <IconContainer>
              <Icon icon={faCopy} />
            </IconContainer>
            <HeaderInfo className="ml-4 text-lg">
              <a href={`mailto:${email}`}>{email}</a>
              <a href={`tel:${cleanPhone(phone)}`}>{formatPhone(phone)}</a>
            </HeaderInfo>
            <div className="text-right">
              <Link href="/contact">
                <Button>Get A Free Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-green-500 text-white hidden lg:block">
        <div className="container mx-auto px-4 md:px-10">
          <div className="flex justify-between items-center">
            {nav.map((item) => (
              <NavLink
                href={item.url}
                key={item.url}
                className="px-4 py-4 font-bold text-center relative"
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
