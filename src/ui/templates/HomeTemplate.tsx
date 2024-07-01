import { FC, ReactNode } from "react"

import {
  Banner,
  HomeClients,
  HomeInsuranceCompanies,
  HomeSection,
} from "../molecules"
import { MainLayout } from "../organisms"

// @types
import { IClientTestimony } from "../atoms/Testimony"
import { IInsuranceCompany } from "../molecules/HomeInsuranceCompanies"

export interface DefaultTemplateProps {
  phone: string
  email: string
  facebook: string | null
}

export interface HomeTemplateProps extends DefaultTemplateProps {
  title: string
  content: ReactNode
  bannerImg: string
  insurances: IInsuranceCompany[]
  testimonials: IClientTestimony[]
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  const {
    title,
    content,
    bannerImg,
    insurances,
    testimonials,
    phone,
    email,
    facebook,
  } = props

  return (
    <MainLayout phone={phone} email={email} facebook={facebook}>
      <Banner img={bannerImg} />
      <HomeSection title={title}>{content}</HomeSection>
      <HomeInsuranceCompanies insurances={insurances} />
      <HomeClients title="What My Clients Say." testimonies={testimonials} />
    </MainLayout>
  )
}

export default HomeTemplate
