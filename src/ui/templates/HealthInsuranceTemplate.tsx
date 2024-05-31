"use client"

import React, { FC, ReactNode } from "react"

import { MainLayout, GravityForm } from "../organisms"
import { HealthInsuranceSection } from "../molecules"
import useGravityForm from "../../../hooks/useGravityForm"

// @types
import { IInsuranceCompany } from "../molecules/HomeInsuranceCompanies"
import { FormProps } from "./ContactTemplate"

export interface HealthInsuranceTemplateProps extends FormProps {
  title: string
  content: ReactNode
  formTitle: string
  formDescription: string
  insurances: IInsuranceCompany[]
}

const HealthInsuranceTemplate: FC<HealthInsuranceTemplateProps> = (props) => {
  const {
    title,
    content,
    formTitle,
    formDescription,
    insurances,
    fields,
    defaultValues,
  } = props

  const [state, handleSubmit] = useGravityForm({
    id: "1",
  })

  return (
    <MainLayout>
      <HealthInsuranceSection title={title} insurances={insurances}>
        {content}
      </HealthInsuranceSection>
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

export default HealthInsuranceTemplate
