import { gql } from "@apollo/client"

import apollo from "../config/apollo"

const getTestimonialsQuery = async () => {
  const { data } = await apollo.getClient().query({
    query: gql`
      query getTestimonialsQuery {
        page(id: "cG9zdDoxMTY=") {
          id
          title
          content
          seo {
            title
            metaDesc
          }
        }
        customerReferrals {
          edges {
            node {
              id
              title
              content
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    `,
    fetchPolicy: "network-only",
  })

  const { page, customerReferrals } = data
  const { title, content, seo } = page

  const { title: seoTitle, metaDesc: seoDescription } = seo

  return {
    title,
    content,
    seoTitle,
    seoDescription,
    testimonials: customerReferrals.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      content: edge.node.content,
      featuredImage: edge.node.featuredImage
        ? edge.node.featuredImage.node.sourceUrl
        : null,
    })),
  }
}

export default getTestimonialsQuery
