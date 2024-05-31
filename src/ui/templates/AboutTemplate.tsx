"use client"

import React, { FC, ReactNode } from "react"

import { MainLayout, GravityForm } from "../organisms"
import { AboutSection } from "../molecules"
import useGravityForm from "../../../hooks/useGravityForm"

import { FormProps } from "./ContactTemplate"

export interface AboutTemplateProps extends FormProps {
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
  } = props

  const [state, handleSubmit] = useGravityForm({
    id: "1",
  })

  return (
    <MainLayout>
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
