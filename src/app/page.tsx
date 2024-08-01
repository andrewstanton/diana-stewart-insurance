import { NextPage } from "next"

import getClientTestimonies from "@/lib/common"
import getConfigQuery from "@/queries/getConfigQuery"
import getHomeQuery from "@/queries/getHomeQuery"
import getSEOQuery from "@/queries/getSEOQuery"

import { HomeTemplate } from "@/ui/templates"
import { getDefaultProps } from "@/lib/pageServices"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDo3")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

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
