import React, { ReactNode, FC } from "react"

import { Section, Content } from "../atoms"
import { H2 } from "../atoms/Header"

// @types
import { IInsuranceCompany } from "./HomeInsuranceCompanies"

export interface HealthInsuranceSectionProps {
  title: string
  children: ReactNode
  insurances: IInsuranceCompany[]
}

const HealthInsuranceSection: FC<HealthInsuranceSectionProps> = (props) => {
  const { title, children, insurances } = props
  return (
    <Section>
      <div className="grid">
        <div className="text-center">
          <H2>{title}</H2>
        </div>
        <Content>{children}</Content>
        <ul className="grid grid-cols-2 gap-4 list-disc font-bold pl-10">
          {insurances.map((insurance) => (
            <li key={insurance.id}>{insurance.title}</li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default HealthInsuranceSection
