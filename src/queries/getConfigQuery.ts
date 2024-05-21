import { gql } from "@apollo/client"

import apollo from "../config/apollo"

const getConfigQuery = async () => {
  const { data } = await apollo.getClient().query({
    query: gql`
      query getConfigQuery {
        allConfig {
          edges {
            node {
              dianaStewartConfig {
                companyName
                companyEmail
                companyPhone
              }
            }
          }
        }
      }
    `,
    fetchPolicy: "cache-first",
  })

  const { allConfig } = data
  const content = allConfig.edges[0].node.dianaStewartConfig

  const { companyName, companyEmail, companyPhone } = content

  return {
    companyName,
    companyEmail,
    companyPhone,
  }
}

export default getConfigQuery
