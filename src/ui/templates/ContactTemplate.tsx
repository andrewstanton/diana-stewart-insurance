"use client"

import React, { FC, ReactNode } from "react"

import { MainLayout, GravityForm } from "../organisms"
import { ContactSection } from "../molecules"
import { Section } from "../atoms"
import useGravityForm from "../../../hooks/useGravityForm"

// @types
import { IFormField } from "../../../interfaces/gravity"

export interface FormProps {
  fields: IFormField[]
  defaultValues: unknown
}

export interface ContactTemplateProps extends FormProps {
  title: string
  content: ReactNode
  formTitle: string
  formContent: string
}

const ContactTemplate: FC<ContactTemplateProps> = (props) => {
  const { title, content, fields, defaultValues, formTitle, formContent } =
    props

  const [state, handleSubmit] = useGravityForm({
    id: "1",
  })

  return (
    <MainLayout>
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
