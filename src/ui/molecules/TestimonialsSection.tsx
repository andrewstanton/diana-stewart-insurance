"use client"

import { FC, ReactNode } from "react"

import { Button, Content, Section, Testimony } from "@/ui/atoms"
import { H1 } from "@/ui/atoms/Header"

// @types
import Link from "next/link"
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

      <div className="my-8 text-center">
        <Link href="/testimonials/write">
          <Button>Write Your Testimonial</Button>
        </Link>
      </div>
      <ul className="grid md:grid-cols-2 gap-12 place-items-start mt-20">
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
