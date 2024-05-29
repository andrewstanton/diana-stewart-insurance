import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"
import getTestimonialsQuery from "@/queries/getTestimonialsQuery"

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

  const getClientTestimonies = (data: any) =>
    data.map((testimony: any) => ({
      id: testimony.id,
      name: testimony.title,
      testimony: testimony.content,
      img: testimony.image,
    }))

  return (
    <TestimonialsTemplate
      title={title}
      content={content}
      testimonials={getClientTestimonies(testimonials)}
    />
  )
}

export default TestimonialsPage
