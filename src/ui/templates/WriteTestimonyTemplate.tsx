import { FC, ReactNode } from "react"

import { WriteSection } from "../molecules"
import { MainLayout } from "../organisms"

// @types
import { IFormField } from "../../../interfaces/gravity"
import { DefaultTemplateProps } from "./HomeTemplate"

export interface WriteTestimonyTemplateProps extends DefaultTemplateProps {
  title: string
  fields: IFormField[]
  content: ReactNode
  defaultValues: unknown
}

const WriteTestimonyTemplate: FC<WriteTestimonyTemplateProps> = (props) => {
  const { title, content, phone, email, facebook, fields, defaultValues } =
    props

  return (
    <MainLayout phone={phone} email={email} facebook={facebook}>
      <WriteSection title={title} fields={fields} defaultValues={defaultValues}>
        {content}
      </WriteSection>
    </MainLayout>
  )
}

export default WriteTestimonyTemplate
