"use client"

import { FC, ReactNode } from "react"

import useGravityForm from "../../../hooks/useGravityForm"
import { Section } from "../atoms"
import { ContactSection } from "../molecules"
import { GravityForm, MainLayout } from "../organisms"

// @types
import { IFormField } from "../../../interfaces/gravity"
import { DefaultTemplateProps } from "./HomeTemplate"

export interface FormProps {
  fields: IFormField[]
  defaultValues: unknown
}

export interface ContactTemplateProps extends FormProps, DefaultTemplateProps {
  title: string
  content: ReactNode
  formTitle: string
  formContent: string
}

const ContactTemplate: FC<ContactTemplateProps> = (props) => {
  const {
    title,
    content,
    fields,
    defaultValues,
    formTitle,
    formContent,
    email,
    phone,
    facebook,
  } = props

  const [state, handleSubmit] = useGravityForm({
    id: "1",
  })

  return (
    <MainLayout phone={phone} email={email} facebook={facebook}>
      <Section>
        <div className="grid lg:grid-cols-2 gap-14">
          <ContactSection title={title} content={content} />
          <GravityForm
            title={formTitle}
            content={formContent}
            fields={fields}
            defaultValues={defaultValues}
            onSubmit={handleSubmit}
            btnText="Send Message"
            loadingText="Sending..."
            loading={state.loading}
            error={state.error}
            success={state.success}
          />
        </div>
      </Section>
    </MainLayout>
  )
}

export default ContactTemplate
