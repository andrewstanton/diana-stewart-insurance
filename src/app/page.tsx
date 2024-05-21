import { NextPage } from "next"

import getHomeQuery from "@/queries/getHomeQuery"
import getSEOQuery from "@/queries/getSEOQuery"
import HomeSection from "@/ui/molecules/HomeSection"

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

  return (
    <div>
      <HomeSection title={title}>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </HomeSection>
    </div>
  )
}

export default HomePage
