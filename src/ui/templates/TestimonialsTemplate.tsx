import React, { FC, ReactNode } from "react"

import { MainLayout } from "../organisms"
import { TestimonialsSection } from "../molecules"

// @types
import { IClientTestimony } from "../atoms/Testimony"

export interface TestimonialsTemplateProps {
  title: string
  content: ReactNode
  testimonials: IClientTestimony[]
}

const TestimonialsTemplate: FC<TestimonialsTemplateProps> = (props) => {
  const { title, content, testimonials } = props

  return (
    <MainLayout>
      <TestimonialsSection title={title} testimonies={testimonials}>
        {content}
      </TestimonialsSection>
    </MainLayout>
  )
}

export default TestimonialsTemplate
