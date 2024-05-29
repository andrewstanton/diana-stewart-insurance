import React, { FC, ReactNode } from "react"

import { MainLayout } from "../organisms"
import { HomeSection, Banner, HomeInsuranceCompanies } from "../molecules"

// @types
import { IInsuranceCompany } from "../molecules/HomeInsuranceCompanies"

export interface HomeTemplateProps {
  title: string
  content: ReactNode
  bannerImg: string
  insurances: IInsuranceCompany[]
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  const { title, content, bannerImg, insurances } = props

  return (
    <MainLayout>
      <Banner
        img={bannerImg}
        heading="Choosing A Medicare Plan Feels Like You're At"
        subHeading="Niagra Falls"
        text="I Can Keep You From Drowning!"
      />
      <HomeSection title={title}>{content}</HomeSection>
      <HomeInsuranceCompanies insurances={insurances} />
    </MainLayout>
  )
}

export default HomeTemplate
