import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDo3")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const HomePage: NextPage = () => <div>Home Page</div>

export default HomePage
