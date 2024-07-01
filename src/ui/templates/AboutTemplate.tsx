"use client"

import { FC, ReactNode } from "react"

import useGravityForm from "../../../hooks/useGravityForm"
import { AboutSection } from "../molecules"
import { GravityForm, MainLayout } from "../organisms"

import { FormProps } from "./ContactTemplate"
import { DefaultTemplateProps } from "./HomeTemplate"

export interface AboutTemplateProps extends FormProps, DefaultTemplateProps {
  title: string
  content: ReactNode
  img: string
  formTitle: string
  formDescription: string
}

const AboutTemplate: FC<AboutTemplateProps> = (props) => {
  const {
    title,
    content,
    img,
    formTitle,
    formDescription,
    fields,
    defaultValues,
    email,
    phone,
    facebook,
  } = props

  const [state, handleSubmit] = useGravityForm({
    id: "1",
  })

  return (
    <MainLayout phone={phone} email={email} facebook={facebook}>
      <AboutSection title={title} img={img}>
        {content}
      </AboutSection>
      <GravityForm
        title={formTitle}
        content={formDescription}
        fields={fields}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        btnText="Send Message"
        loadingText="Sending..."
        loading={state.loading}
        error={state.error}
        success={state.success}
      />
    </MainLayout>
  )
}

export default AboutTemplate
