import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDoxNQ==")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const HealthInsurancePage: NextPage = () => <div>Health Insurance Page</div>

export default HealthInsurancePage
