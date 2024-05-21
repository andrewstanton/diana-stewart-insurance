import { gql } from "@apollo/client"

import apollo from "../config/apollo"

const getAboutQuery = async () => {
  const { data } = await apollo.getClient().query({
    query: gql`
      query getAboutQuery {
        page(id: "cG9zdDoxMw==") {
          id
          title
          content
          seo {
            title
            metaDesc
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    `,
    fetchPolicy: "cache-first",
  })

  const { page } = data
  const { title, content, seo, featuredImage } = page

  const { title: seoTitle, metaDesc: seoDescription } = seo

  return {
    title,
    content,
    featuredImage: featuredImage ? featuredImage.node.sourceUrl : null,
    seoTitle,
    seoDescription,
  }
}

export default getAboutQuery
