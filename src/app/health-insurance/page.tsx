import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"
import getInsuranceQuery from "@/queries/getInsuranceQuery"

import { HealthInsuranceTemplate } from "@/ui/templates"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDoxNQ==")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const HealthInsurancePage: NextPage = async () => {
  const data = await getInsuranceQuery()
  const { title, content, insurances } = data

  return (
    <HealthInsuranceTemplate
      title={title}
      content={content}
      formTitle="Get In Touch With Diana"
      formDescription="<p>Feel free to get in touch to fin out more information by filling out the fields below.</p>"
      insurances={insurances}
    />
  )
}

export default HealthInsurancePage
