import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"
import getAboutQuery from "@/queries/getAboutQuery"
import getFormQuery from "@/queries/getFormQuery"
import { getFormDefaultValues } from "@/lib/form"

import { AboutTemplate } from "@/ui/templates"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDoxMw==")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const AboutPage: NextPage = async () => {
  const data = await getAboutQuery()
  const formData = await getFormQuery("1")

  const { title, content, featuredImage } = data
  const { fields } = formData

  return (
    <AboutTemplate
      title={title}
      content={content}
      img={featuredImage}
      formTitle="Get In Touch With Diana"
      formDescription="<p>Feel free to get in touch to fin out more information by filling out the fields below.</p>"
      fields={fields}
      defaultValues={getFormDefaultValues(formData)}
    />
  )
}

export default AboutPage
