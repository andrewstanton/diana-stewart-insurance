import { gql } from "@apollo/client"

import apollo from "../config/apollo"

export interface IConfigData {
  companyName: string | null
  companyEmail: string | null
  companyPhone: string | null
  facebook: string | null
}

const getConfigQuery = async (): Promise<IConfigData> => {
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
                facebook
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

  const { companyName, companyEmail, companyPhone, facebook } = content

  return {
    companyName,
    companyEmail,
    companyPhone,
    facebook,
  }
}

export default getConfigQuery
