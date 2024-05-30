"use client"

import { FC, ReactNode } from "react"
import styled from "styled-components"

import Wrapper from "./Wrapper"

export interface SectionProps {
  children?: ReactNode
  bgColor?: string
  wrapperMaxWidth?: number
}

const SectionStyle = styled.section<SectionProps>`
  ${({ bgColor }) => (bgColor ? `background-color: ${bgColor};` : "white;")}
`

const Section: FC<SectionProps> = (props) => {
  const { children, bgColor, wrapperMaxWidth } = props
  return (
    <SectionStyle className="py-14" bgColor={bgColor}>
      <Wrapper maxWidth={wrapperMaxWidth}>{children}</Wrapper>
    </SectionStyle>
  )
}

export default Section
