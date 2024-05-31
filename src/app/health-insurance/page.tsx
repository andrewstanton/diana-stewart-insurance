import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"
import getInsuranceQuery from "@/queries/getInsuranceQuery"
import getFormQuery from "@/queries/getFormQuert"
import { getFormDefaultValues } from "@/lib/form"

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
  const formData = await getFormQuery("1")

  const { title, content, insurances } = data
  const { fields } = formData

  return (
    <HealthInsuranceTemplate
      title={title}
      content={content}
      formTitle="Get In Touch With Diana"
      formDescription="<p>Feel free to get in touch to fin out more information by filling out the fields below.</p>"
      insurances={insurances}
      fields={fields}
      defaultValues={getFormDefaultValues(formData)}
    />
  )
}

export default HealthInsurancePage
