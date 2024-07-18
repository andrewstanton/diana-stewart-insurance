"use client"

import { FC, ReactNode } from "react"

import formatPhone, { cleanPhone } from "@/lib/phone"
import { Content, Section } from "../atoms"
import { H2 } from "../atoms/Header"

export interface ContactSectionProps {
  title: string
  content: ReactNode
  phone: string
}

const ContactSection: FC<ContactSectionProps> = (props) => {
  const { title, content, phone } = props

  const anchorStyles = "text-green-500 font-bold hover:underline"
  return (
    <Section>
      <div>
        <div className="text-center">
          <H2>{title}</H2>
        </div>
        <Content>{content}</Content>
        <p>
          <strong>Email: </strong>
          <a
            className={anchorStyles}
            href="mailto:info@dianastewartinsurance.com"
          >
            info@dianastewartinsurance.com
          </a>
        </p>
        <p>
          <strong>Phone: </strong>
          <a className={anchorStyles} href={`tel:${cleanPhone(phone)}`}>
            {formatPhone(phone)}
          </a>
        </p>
      </div>
    </Section>
  )
}

export default ContactSection
