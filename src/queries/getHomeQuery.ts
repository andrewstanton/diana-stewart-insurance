import { gql } from "@apollo/client"

import apollo from "../config/apollo"

export type IMedia = string | null

export interface IInsurancePreview {
  id: string
  title: string
  image: IMedia
}

export interface ITestimonial {
  id: string
  title: string
  content: string | null
  image: IMedia
}

export interface IHomeData {
  slug: string
  title: string
  link: string
  content: string
  hasButton: boolean
  featuredImage: IMedia
  insurances: IInsurancePreview[]
  testimonials: ITestimonial[]
}

const getHomeQuery = async () => {
  const { data } = await apollo.getClient().query({
    query: gql`
      query getHomeQuery {
        page(id: "cG9zdDo3") {
          id
          slug
          title
          link
          content
          homepageFields {
            hasButton
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
        insuranceSections {
          edges {
            node {
              id
              title
              featuredImage {
                node {
                  sourceUrl
                }
              }
            }
          }
        }
        customerReferrals(first: 3) {
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
    fetchPolicy: "cache-first",
  })

  const { page, insuranceSections, customerReferrals } = data
  const { slug, title, link, content, homepageFields, featuredImage } = page
  const { hasButton } = homepageFields

  return {
    slug,
    title,
    link,
    content,
    hasButton,
    featuredImage: featuredImage ? featuredImage.node.sourceUrl : null,
    insurances: insuranceSections.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      image: edge.node.featuredImage
        ? edge.node.featuredImage.node.sourceUrl
        : null,
    })),
    testimonials: customerReferrals.edges.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      content: edge.node.content,
      image: edge.node.featuredImage
        ? edge.node.featuredImage.node.sourceUrl
        : null,
    })),
  }
}

export default getHomeQuery
