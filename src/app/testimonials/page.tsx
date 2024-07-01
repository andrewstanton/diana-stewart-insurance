import { NextPage } from "next"

import getClientTestimonies from "@/lib/common"
import getSEOQuery from "@/queries/getSEOQuery"
import getTestimonialsQuery from "@/queries/getTestimonialsQuery"

import getConfigQuery from "@/queries/getConfigQuery"
import { TestimonialsTemplate } from "@/ui/templates"
import { getDefaultProps } from "../page"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDoxMTY=")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const TestimonialsPage: NextPage = async () => {
  const data = await getTestimonialsQuery()
  const config = await getConfigQuery()
  const { title, content, testimonials } = data

  return (
    <TestimonialsTemplate
      title={title}
      content={content}
      testimonials={getClientTestimonies(testimonials)}
      {...getDefaultProps(config)}
    />
  )
}

export default TestimonialsPage
