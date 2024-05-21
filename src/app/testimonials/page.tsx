import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDoxMTY=")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const TestimonialsPage: NextPage = () => <div>Testimonials Page</div>

export default TestimonialsPage
