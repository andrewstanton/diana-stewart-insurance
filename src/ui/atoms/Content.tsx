"use client"

import React, { ReactNode, FC } from "react"
import styled from "styled-components"

export interface ContentProps {
  children: ReactNode
}

const StyledContent = styled.div``

const Content: FC<ContentProps> = (props) => {
  const { children } = props
  return (
    <StyledContent dangerouslySetInnerHTML={{ __html: String(children) }} />
  )
}

export default Content
