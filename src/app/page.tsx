import { NextPage } from "next"

import getHomeQuery from "@/queries/getHomeQuery"
import getSEOQuery from "@/queries/getSEOQuery"
import { HomeTemplate } from "@/ui/templates"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDo3")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const HomePage: NextPage = async () => {
  const data = await getHomeQuery()
  const { title, content } = data

  return <HomeTemplate title={title} content={content} />
}

export default HomePage
