import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"
import HomeSection from "@/ui/molecules/HomeSection"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDo3")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const HomePage: NextPage = () => (
  <div>
    <HomeSection title="Helping Toledo and Northwest Ohio Choose A Medicare Plan" />
  </div>
)

export default HomePage
