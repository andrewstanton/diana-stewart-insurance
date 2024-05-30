import React, { FC, ReactNode } from "react"

import { MainLayout } from "../organisms"
import { AboutSection } from "../molecules"

export interface AboutTemplateProps {
  title: string
  content: ReactNode
  img: string
  formTitle: string
  formDescription: string
}

const AboutTemplate: FC<AboutTemplateProps> = (props) => {
  const { title, content, img, formTitle, formDescription } = props

  return (
    <MainLayout>
      <AboutSection
        title={title}
        img={img}
        formTitle={formTitle}
        formDescription={formDescription}
      >
        {content}
      </AboutSection>
    </MainLayout>
  )
}

export default AboutTemplate
