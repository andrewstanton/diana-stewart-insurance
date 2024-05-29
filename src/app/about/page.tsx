import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"
import getAboutQuery from "@/queries/getAboutQuery"

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
  const { title, content, featuredImage } = data

  console.log({ data })

  return <AboutTemplate title={title} content={content} img={featuredImage} />
}

export default AboutPage
