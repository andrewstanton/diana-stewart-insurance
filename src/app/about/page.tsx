import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDoxMw==")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const AboutPage: NextPage = () => <div>About Page</div>

export default AboutPage
