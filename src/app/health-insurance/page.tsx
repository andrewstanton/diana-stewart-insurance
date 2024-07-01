import { NextPage } from "next"

import { getFormDefaultValues } from "@/lib/form"
import getFormQuery from "@/queries/getFormQuert"
import getInsuranceQuery from "@/queries/getInsuranceQuery"
import getSEOQuery from "@/queries/getSEOQuery"

import getConfigQuery from "@/queries/getConfigQuery"
import { HealthInsuranceTemplate } from "@/ui/templates"
import { getDefaultProps } from "../page"

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
  const config = await getConfigQuery()

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
      {...getDefaultProps(config)}
    />
  )
}

export default HealthInsurancePage
