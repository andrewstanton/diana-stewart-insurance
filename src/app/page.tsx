import { NextPage } from "next"

export async function generateMetadata() {
  // const data = await getSEOQuery("cG9zdDo3");
  const data = {
    seoTitle: "",
    seoDescription: "",
  }
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const HomePage: NextPage = () => <div>Home Page</div>

export default HomePage
