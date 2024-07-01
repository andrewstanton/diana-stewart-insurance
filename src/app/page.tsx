import { NextPage } from "next"

import getClientTestimonies from "@/lib/common"
import getConfigQuery, { IConfigData } from "@/queries/getConfigQuery"
import getHomeQuery from "@/queries/getHomeQuery"
import getSEOQuery from "@/queries/getSEOQuery"

import { HomeTemplate } from "@/ui/templates"
import { DefaultTemplateProps } from "@/ui/templates/HomeTemplate"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDo3")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

export const getDefaultProps = (data: IConfigData): DefaultTemplateProps => ({
  phone: data.companyPhone ?? "",
  email: data.companyEmail ?? "",
  facebook: data.facebook,
})

const HomePage: NextPage = async () => {
  const data = await getHomeQuery()
  const config = await getConfigQuery()

  const { title, content, featuredImage, insurances, testimonials } = data

  return (
    <HomeTemplate
      title={title}
      content={content}
      bannerImg={featuredImage}
      insurances={insurances}
      testimonials={getClientTestimonies(testimonials)}
      {...getDefaultProps(config)}
    />
  )
}

export default HomePage
