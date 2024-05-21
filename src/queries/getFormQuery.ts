import { gql } from "@apollo/client"

import apollo from "../config/apollo"

const getFormQuery = async (id: string) => {
  const { data } = await apollo.getClient().query({
    query: gql`
      query getFormQuery($id: ID!) {
        gfForm(id: $id) {
          databaseId
          title
          formFields {
            edges {
              node {
                id
                type
                ... on NameField {
                  label
                  isRequired
                  inputs {
                    id
                    label
                  }
                }
                ... on TextField {
                  label
                  isRequired
                  placeholder
                }
                ... on TextAreaField {
                  label
                  isRequired
                  placeholder
                }
                ... on RadioField {
                  label
                  isRequired
                  choices {
                    text
                    value
                  }
                }
                ... on CheckboxField {
                  label
                  isRequired
                  inputs {
                    id
                    label
                  }
                  choices {
                    text
                    value
                  }
                }
                ... on NameField {
                  label
                  isRequired
                }
                ... on EmailField {
                  label
                  isRequired
                  placeholder
                }
                ... on PhoneField {
                  label
                  isRequired
                  placeholder
                }
                ... on AddressField {
                  isRequired
                  inputs {
                    id
                    label
                  }
                }
                ... on NumberField {
                  label
                  isRequired
                  placeholder
                }
                ... on SectionField {
                  label
                  description
                }
                ... on DateField {
                  label
                  placeholder
                  isRequired
                }
                ... on HtmlField {
                  content
                }
                ... on SelectField {
                  label
                  placeholder
                  isRequired
                  choices {
                    text
                    value
                  }
                }
              }
            }
          }
        }
      }
    `,
    variables: {
      id,
    },
    fetchPolicy: "network-only",
  })

  const { gfForm } = data
  const { databaseId, title, formFields } = gfForm
  const fields =
    formFields && formFields.edges
      ? formFields.edges.map((field: any) => ({
          id: field.node.id,
          type: field.node.type,
          label: field.node?.label ?? null,
          isRequired: field.node?.isRequired ?? false,
          content: field.node?.content ?? null,
          placeholder: field.node?.placeholder ?? null,
          choices: field.node.choices
            ? field.node?.choices.map((choice: any) => ({
                text: choice.text,
                value: choice.value,
              }))
            : [],
          description: field.node?.description ?? null,
          inputs: field.node.inputs
            ? field.node?.inputs.map((input: any) => ({
                id: input.id,
                placeholder: input.placeholder ?? null,
                label: input.label,
                isHidden: input.isHidden ?? false,
              }))
            : [],
        }))
      : []

  return {
    id: databaseId,
    title,
    fields,
  }
}

export default getFormQuery
