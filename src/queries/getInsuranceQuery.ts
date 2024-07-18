import { gql } from "@apollo/client"

import apollo from "../config/apollo"

const getInsuranceQuery = async () => {
  const { data } = await apollo.getClient().query({
    query: gql`
      query getInsuranceQuery {
        page(id: "cG9zdDoxNQ==") {
          id
          title
          content
          seo {
            title
            metaDesc
          }
        }
        insuranceSections(
          where: { orderby: { field: MENU_ORDER, order: ASC } }
        ) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `,
    fetchPolicy: "cache-first",
  })

  const { page, insuranceSections } = data
  const { title, content, seo } = page

  const { title: seoTitle, metaDesc: seoDescription } = seo

  return {
    title,
    content,
    seoTitle,
    seoDescription,
    insurances: insuranceSections.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
    })),
  }
}

export default getInsuranceQuery
