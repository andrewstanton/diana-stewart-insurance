"use client"

import React, { ReactNode, FC } from "react"

import { Section, Content } from "../atoms"
// import { GravityForm } from "../organisms"
import { H2 } from "../atoms/Header"

// @types
// import { IFormField } from "../../../interfaces/gravity"

export interface ContactSectionProps {
  title: string
  content: ReactNode
}

const ContactSection: FC<ContactSectionProps> = (props) => {
  const { title, content } = props

  const anchorStyles = "text-green-500 font-bold hover:underline"
  return (
    <Section>
      {/* <div className="grid lg:grid-cols-2 gap-14"> */}
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
          <a className={anchorStyles} href="tel:4198704185">
            (419) 870-4185
          </a>
        </p>
      </div>
      {/* <GravityForm
          fields={fields}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          btnText="Send Message"
          loadingText="Sending..."
          loading={loading}
          error={error}
        /> */}
      {/* </div> */}
    </Section>
  )
}

export default ContactSection
