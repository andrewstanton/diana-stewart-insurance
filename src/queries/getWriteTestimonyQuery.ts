import { gql } from "@apollo/client"

import apollo from "../config/apollo"

const getWriteTestimonyQuery = async () => {
  const { data } = await apollo.getClient().query({
    query: gql`
      query getWriteTestimonyQuery {
        page(id: "cG9zdDoxNjk=") {
          id
          title
          content
        }
      }
    `,
    fetchPolicy: "cache-first",
  })

  const { page } = data
  const { title, content } = page

  return {
    title,
    content,
  }
}

export default getWriteTestimonyQuery
