import React, { FC, ReactNode } from "react"

import { MainLayout } from "../organisms"
import {
  HomeSection,
  Banner,
  HomeInsuranceCompanies,
  HomeClients,
} from "../molecules"

// @types
import { IInsuranceCompany } from "../molecules/HomeInsuranceCompanies"
import { IClientTestimony } from "../atoms/Testimony"

export interface HomeTemplateProps {
  title: string
  content: ReactNode
  bannerImg: string
  insurances: IInsuranceCompany[]
  testimonials: IClientTestimony[]
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  const { title, content, bannerImg, insurances, testimonials } = props

  return (
    <MainLayout>
      <Banner img={bannerImg} />
      <HomeSection title={title}>{content}</HomeSection>
      <HomeInsuranceCompanies insurances={insurances} />
      <HomeClients title="What My Clients Say." testimonies={testimonials} />
    </MainLayout>
  )
}

export default HomeTemplate
