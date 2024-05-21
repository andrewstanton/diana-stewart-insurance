import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDoyMA==")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const ContactPage: NextPage = () => <div>Contact Page</div>

export default ContactPage
