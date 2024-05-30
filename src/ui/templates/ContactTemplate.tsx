import React, { FC, ReactNode } from "react"

import { MainLayout } from "../organisms"
import { ContactSection } from "../molecules"

export interface ContactTemplateProps {
  title: string
  content: ReactNode
  formTitle: string
  formDescription: string
}

const ContactTemplate: FC<ContactTemplateProps> = (props) => {
  const { title, content, formTitle, formDescription } = props

  return (
    <MainLayout>
      <ContactSection
        title={title}
        content={content}
        formTitle={formTitle}
        formDescription={formDescription}
      />
    </MainLayout>
  )
}

export default ContactTemplate
