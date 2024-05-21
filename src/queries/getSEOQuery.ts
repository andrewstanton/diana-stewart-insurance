import { gql } from "@apollo/client"

import apollo from "../config/apollo"

const getSEOQuery = async (id: string) => {
  const { data } = await apollo.getClient().query({
    query: gql`
      query getSEOQuery($id: ID!) {
        page(id: $id) {
          seo {
            title
            metaDesc
          }
        }
      }
    `,
    variables: {
      id,
    },
    fetchPolicy: "cache-first",
  })

  const { page } = data
  const { seo } = page

  const { title: seoTitle, metaDesc: seoDescription } = seo

  return {
    seoTitle,
    seoDescription,
  }
}

export default getSEOQuery
