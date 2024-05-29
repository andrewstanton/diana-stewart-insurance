"use client"

import Link from "next/link"
import { FC, ReactNode } from "react"
import styled from "styled-components"

import { Button, Content, Section } from "@/ui/atoms"
import { H1 } from "@/ui/atoms/Header"
import Banner from "./Banner"

// @types
import { ButtonColorEnum } from "../atoms/Button"

export interface HomeSectionProps {
  title?: string
  children?: ReactNode
  btnText?: string
}

const Wrapper = styled.div`
  max-width: 1000px;
`

const HomeSection: FC<HomeSectionProps> = (props) => {
  const { title, children, btnText = "Contact Diana Today!" } = props

  return (
    <Section>
      <Banner
        img="https://source.unsplash.com/random/?space"
        heading="Choosing A Medicare Plan Feels Like You're At"
        subHeading="Niagra Falls"
        text="I Can Keep You From Drowning!"
      />
      <Wrapper className="container mx-auto text-center">
        <H1>{title}</H1>

        <Content className="text-left">{children}</Content>

        <div className="mt-6">
          <Link href="/contact">
            <Button color={ButtonColorEnum.DEFAULT}>{btnText}</Button>
          </Link>
        </div>
      </Wrapper>
    </Section>
  )
}

export default HomeSection
