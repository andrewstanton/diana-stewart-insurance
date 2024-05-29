import React, { FC, ReactNode } from "react"

import { MainLayout } from "../organisms"
import { HomeSection, Banner } from "../molecules"

export interface HomeTemplateProps {
  title: string
  content: ReactNode
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  const { title, content } = props
  return (
    <MainLayout>
      <Banner
        img="https://source.unsplash.com/random/?niagra"
        heading="Choosing A Medicare Plan Feels Like You're At"
        subHeading="Niagra Falls"
        text="I Can Keep You From Drowning!"
      />
      <HomeSection title={title}>{content}</HomeSection>
    </MainLayout>
  )
}

export default HomeTemplate
