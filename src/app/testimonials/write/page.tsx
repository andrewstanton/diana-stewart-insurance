import { NextPage } from "next"

import getSEOQuery from "@/queries/getSEOQuery"
import getWriteTestimonyQuery from "@/queries/getWriteTestimonyQuery"

import { WriteTestimonyTemplate } from "@/ui/templates"

import getConfigQuery from "@/queries/getConfigQuery"
import getFormQuery from "@/queries/getFormQuery"

import { getFormDefaultValues } from "@/lib/form"
import { getDefaultProps } from "@/lib/pageServices"

export async function generateMetadata() {
  const data = await getSEOQuery("cG9zdDoxNjk=")
  return {
    title: data.seoTitle,
    description: data.seoDescription,
  }
}

const TestimonialsPage: NextPage = async () => {
  const data = await getWriteTestimonyQuery()
  const config = await getConfigQuery()
  const form = await getFormQuery("2")

  const { title, content } = data
  const { fields } = form

  return (
    <WriteTestimonyTemplate
      title={title}
      content={content}
      fields={fields}
      defaultValues={getFormDefaultValues(form)}
      {...getDefaultProps(config)}
    />
  )
}

export default TestimonialsPage
