import React, { ReactNode, FC } from "react"
import Image from "next/image"

import { Section, Content } from "../atoms"
import { H2 } from "../atoms/Header"

export interface AboutSectionProps {
  title: string
  children: ReactNode
  img: string
}

const AboutSection: FC<AboutSectionProps> = (props) => {
  const { title, children, img } = props
  return (
    <Section>
      <div className="grid grid-cols-[2fr_1fr] gap-20">
        <div>
          <H2>{title}</H2>
          <Content>{children}</Content>
        </div>
        <div className="relative w-full h-[338px]">
          <Image
            className="object-cover hover:scale-105 transition-all"
            style={{ borderRadius: "50%" }}
            src={img}
            alt="Diana Stewart Insurance Agent"
            fill
          />
        </div>
      </div>
    </Section>
  )
}

export default AboutSection
