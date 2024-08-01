import { NextPage } from "next"

import { getFormDefaultValues } from "@/lib/form"
import getContactQuery from "@/queries/getContactQuery"
import getFormQuery from "@/queries/getFormQuery"
import getSEOQuery from "@/queries/getSEOQuery"

import getConfigQuery from "@/queries/getConfigQuery"
import { ContactTemplate } from "@/ui/templates"
import { getDefaultProps } from "@/lib/pageServices"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDoyMA==")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const ContactPage: NextPage = async () => {
  const data = await getContactQuery()
  const formData = await getFormQuery("1")
  const config = await getConfigQuery()

  const { title, content } = data
  const { fields } = formData

  return (
    <ContactTemplate
      title={title}
      content={content}
      formTitle="Get In Touch With Diana"
      formContent="Feel free to get in touch to fin out more information by filling out the fields below."
      fields={fields}
      defaultValues={getFormDefaultValues(formData)}
      {...getDefaultProps(config)}
    />
  )
}

export default ContactPage
