import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"
import getContactQuery from "@/queries/getContactQuery"
import getFormQuery from "@/queries/getFormQuery"
import { getFormDefaultValues } from "@/lib/form"

import { ContactTemplate } from "@/ui/templates"

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

  const { title, content } = data
  const { fields } = formData

  return (
    <ContactTemplate
      title={title}
      content={content}
      formTitle="Get In Touch With Diana"
      formContent="<p>Feel free to get in touch to fin out more information by filling out the fields below.</p>"
      fields={fields}
      defaultValues={getFormDefaultValues(formData)}
    />
  )
}

export default ContactPage
