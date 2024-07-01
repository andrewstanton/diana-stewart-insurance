import { FC, ReactNode } from "react"

import { TestimonialsSection } from "../molecules"
import { MainLayout } from "../organisms"

// @types
import { IClientTestimony } from "../atoms/Testimony"
import { DefaultTemplateProps } from "./HomeTemplate"

export interface TestimonialsTemplateProps extends DefaultTemplateProps {
  title: string
  content: ReactNode
  testimonials: IClientTestimony[]
}

const TestimonialsTemplate: FC<TestimonialsTemplateProps> = (props) => {
  const { title, content, testimonials, phone, email, facebook } = props

  return (
    <MainLayout phone={phone} email={email} facebook={facebook}>
      <TestimonialsSection title={title} testimonies={testimonials}>
        {content}
      </TestimonialsSection>
    </MainLayout>
  )
}

export default TestimonialsTemplate
