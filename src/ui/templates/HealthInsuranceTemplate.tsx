import React, { FC, ReactNode } from "react"

import { MainLayout } from "../organisms"
import { HealthInsuranceSection } from "../molecules"

// @types
import { IInsuranceCompany } from "../molecules/HomeInsuranceCompanies"

export interface HealthInsuranceTemplateProps {
  title: string
  content: ReactNode
  formTitle: string
  formDescription: string
  insurances: IInsuranceCompany[]
}

const HealthInsuranceTemplate: FC<HealthInsuranceTemplateProps> = (props) => {
  const { title, content, formTitle, formDescription, insurances } = props

  return (
    <MainLayout>
      <HealthInsuranceSection
        title={title}
        formTitle={formTitle}
        formDescription={formDescription}
        insurances={insurances}
      >
        {content}
      </HealthInsuranceSection>
    </MainLayout>
  )
}

export default HealthInsuranceTemplate
