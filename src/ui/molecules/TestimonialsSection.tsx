"use client"

import { FC, ReactNode } from "react"

import { Content, Section, Testimony } from "@/ui/atoms"
import { H1 } from "@/ui/atoms/Header"

// @types
import { IClientTestimony } from "../atoms/Testimony"

export interface TestimonialsSectionProps {
  title?: string
  children?: ReactNode
  testimonies: IClientTestimony[]
}

const TestimonialsSection: FC<TestimonialsSectionProps> = (props) => {
  const { title, children, testimonies } = props

  return (
    <Section>
      <div className="text-center">
        <H1>{title}</H1>
      </div>
      <Content>{children}</Content>
      <ul className="grid grid-cols-2 gap-12 place-items-start mt-20">
        {testimonies.map((testimony) => (
          <Testimony
            key={testimony.name}
            name={testimony.name}
            testimony={testimony.testimony}
            img={testimony.img}
          />
        ))}
      </ul>
    </Section>
  )
}

export default TestimonialsSection
