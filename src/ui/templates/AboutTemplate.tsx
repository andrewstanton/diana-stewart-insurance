import React, { FC, ReactNode } from "react"

import { MainLayout } from "../organisms"
import { AboutSection } from "../molecules"

export interface AboutTemplateProps {
  title: string
  content: ReactNode
  img: string
}

const AboutTemplate: FC<AboutTemplateProps> = (props) => {
  const { title, content, img } = props

  return (
    <MainLayout>
      <AboutSection title={title} img={img}>
        {content}
      </AboutSection>
    </MainLayout>
  )
}

export default AboutTemplate
