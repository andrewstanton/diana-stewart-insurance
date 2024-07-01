"use client"

import { FC, ReactNode } from "react"

import useGravityForm from "../../../hooks/useGravityForm"
import { HealthInsuranceSection } from "../molecules"
import { GravityForm, MainLayout } from "../organisms"

// @types
import { IInsuranceCompany } from "../molecules/HomeInsuranceCompanies"
import { FormProps } from "./ContactTemplate"
import { DefaultTemplateProps } from "./HomeTemplate"

export interface HealthInsuranceTemplateProps
  extends FormProps,
    DefaultTemplateProps {
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
    email,
    phone,
    facebook,
  } = props

  const [state, handleSubmit] = useGravityForm({
    id: "1",
  })

  return (
    <MainLayout phone={phone} email={email} facebook={facebook}>
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
