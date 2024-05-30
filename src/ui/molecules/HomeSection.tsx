"use client"

import Link from "next/link"
import { FC, ReactNode } from "react"

import { Button, Content, Section } from "@/ui/atoms"
import { H1 } from "@/ui/atoms/Header"

// @types
import { ButtonColorEnum } from "../atoms/Button"

export interface HomeSectionProps {
  title?: string
  children?: ReactNode
  btnText?: string
}

const HomeSection: FC<HomeSectionProps> = (props) => {
  const { title, children, btnText = "Contact Diana Today!" } = props

  return (
    <Section wrapperMaxWidth={1000}>
      <div className="text-center">
        <H1>{title}</H1>
      </div>
      <Content>{children}</Content>
      <div className="mt-6 text-center">
        <Link href="/contact">
          <Button color={ButtonColorEnum.DEFAULT}>{btnText}</Button>
        </Link>
      </div>
    </Section>
  )
}

export default HomeSection
