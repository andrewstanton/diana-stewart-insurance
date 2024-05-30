import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"
import getTestimonialsQuery from "@/queries/getTestimonialsQuery"
import getClientTestimonies from "@/lib/common"

import { TestimonialsTemplate } from "@/ui/templates"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDoxMTY=")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const TestimonialsPage: NextPage = async () => {
  const data = await getTestimonialsQuery()
  const { title, content, testimonials } = data

  return (
    <TestimonialsTemplate
      title={title}
      content={content}
      testimonials={getClientTestimonies(testimonials)}
    />
  )
}

export default TestimonialsPage
