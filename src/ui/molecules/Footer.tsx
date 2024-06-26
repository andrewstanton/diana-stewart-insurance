import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

import { nav } from "@/config/meta"
import formatPhone, { cleanPhone } from "@/lib/phone"
import footerLogo from "../../../public/images/footer-logo.jpg"
import { Icon } from "../atoms"

export interface FooterProps {
  phone: string
  email: string
  facebook: string | null
}

const Footer: FC<FooterProps> = (props) => {
  const { phone, email, facebook } = props

  return (
    <footer className="w-full text-white">
      <div className="bg-gray-700 py-10 text-center md:text-left">
        <div className="container px-4 md:px-10 mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-0 justify-center items-start">
            <div>
              <Image
                src={footerLogo}
                width={248}
                height={72}
                alt="Diana Stewart Insurance Agent"
              />
            </div>
            <div>
              <div className="mb-4">
                <h4 className="m-0">LINKS</h4>
                <div className="bg-green-500 h-1 w-8 mt-2 hidden md:block" />
              </div>
              <ul>
                {nav.map((link) => (
                  <li className="mb-2" key={`footer-${link.label}`}>
                    <Link className="hover:underline" href={link.url}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4">
                <h4 className="m-0">CONTACT INFO</h4>
                <div className="bg-green-500 h-1 w-8 mt-2 hidden md:block" />
              </div>
              <div className="mb-2 hover:underline">
                <a href={`mailto:${email}`}>{email}</a>
              </div>
              <div className="hover:underline">
                <a href={`tel:${cleanPhone(phone)}`}>{formatPhone(phone)}</a>
              </div>
              <div className="mb-4">
                <h4 className="m-0 mt-8">SOCIAL MEDIA</h4>
                <div className="bg-green-500 h-1 w-8 mt-2 hidden md:block" />
              </div>
              <div>
                {facebook && (
                  <a
                    href={facebook}
                    target="_blank"
                    title="Diana Stewart Insurance Agent Facebook"
                    rel="noopener noreferrer"
                    className="text-4xl text-gray-400 hover:text-white"
                    aria-label="Diana Stewart Insurance Agent on Facebook"
                  >
                    <Icon icon={faFacebookSquare} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black py-6 pb-10 text-white">
        <div className="container px-4 md:px-10 mx-auto text-sm">
          &copy; {new Date().getFullYear()} Web Panda Designs, LLC
        </div>
      </div>
    </footer>
  )
}

export default Footer
