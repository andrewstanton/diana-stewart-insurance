import React, { ReactNode, FC } from "react"

import { Section, Content } from "../atoms"
// import { GravityForm } from "../organisms"
import { H2 } from "../atoms/Header"

export interface ContactSectionProps {
  title: string
  content: ReactNode
  formTitle: string
  formDescription: string
}

const ContactSection: FC<ContactSectionProps> = (props) => {
  const { title, content, formTitle, formDescription } = props
  console.log(formTitle, formDescription)

  const anchorStyles = "text-green-500 font-bold hover:underline"
  return (
    <Section>
      <div className="grid lg:grid-cols-2">
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
        {/* <ContactForm title={formTitle} description={formDescription} /> */}
        {/* <GravityForm
          fields={formFields}
          defaultValues={defaultValues}
          onSubmit={onSubmit}
          btnText="Send Message"
          loadingText="Sending..."
          loading={loading}
          error={error}
        /> */}
      </div>
    </Section>
  )
}

export default ContactSection
