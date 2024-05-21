import { gql } from "@apollo/client"

import apollo from "../config/apollo"

const getContactQuery = async () => {
  const { data } = await apollo.getClient().query({
    query: gql`
      query getContactQuery {
        page(id: "cG9zdDoyMA==") {
          id
          title
          content
          seo {
            title
            metaDesc
          }
        }
      }
    `,
    fetchPolicy: "cache-first",
  })

  const { page } = data
  const { title, content, seo } = page

  const { title: seoTitle, metaDesc: seoDescription } = seo

  return {
    title,
    content,
    seoTitle,
    seoDescription,
  }
}

export default getContactQuery
