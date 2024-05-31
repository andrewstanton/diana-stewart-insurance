"use client"

import React, { FC, ReactNode } from "react"

import { MainLayout, GravityForm } from "../organisms"
import { ContactSection } from "../molecules"
import { useGravityForm } from "../../../hooks"

// @types
import { IFormField } from "../../../interfaces/gravity"

export interface FormProps {
  fields: IFormField[]
  defaultValues: unknown
}

export interface ContactTemplateProps extends FormProps {
  title: string
  content: ReactNode
}

const ContactTemplate: FC<ContactTemplateProps> = (props) => {
  const { title, content, fields, defaultValues } = props

  const [state, handleSubmit] = useGravityForm({
    id: "1",
  })

  return (
    <MainLayout>
      <div className="grid lg:grid-cols-2 gap-14">
        <ContactSection
          title={title}
          content={content}
          // fields={fields}
          // defaultValues={defaultValues}
          // onSubmit={handleSubmit}
          // loading={state.loading}
          // error={state.error}
        />
        <GravityForm
          fields={fields}
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          btnText="Send Message"
          loadingText="Sending..."
          loading={state.loading}
          error={state.error}
        />
      </div>
    </MainLayout>
  )
}

export default ContactTemplate
