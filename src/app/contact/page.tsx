import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"
import getContactQuery from "@/queries/getContactQuery"

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
  const { title, content } = data
  return (
    <ContactTemplate
      title={title}
      content={content}
      formTitle="Get In Touch With Diana"
      formDescription="<p>Feel free to get in touch to fin out more information by filling out the fields below.</p>"
    />
  )
}

export default ContactPage
