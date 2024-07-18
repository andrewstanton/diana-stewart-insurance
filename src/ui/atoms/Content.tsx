"use client"

import colors from "@/config/colors"
import { FC, ReactNode } from "react"
import styled from "styled-components"

export interface ContentProps {
  children: ReactNode
}

const StyledContent = styled.div`
  ul {
    margin-left: 2.5rem;
    margin-bottom: 1rem;
  }

  ul li {
    list-style-type: disc;
    padding: 0.25rem 0;
  }

  a {
    color: ${colors.green500};
    text-decoration: underline;
    font-weight: bold;
  }

  a:hover {
    color: ${colors.green700};
    text-decoration: none;
  }
`

const Content: FC<ContentProps> = (props) => {
  const { children } = props
  return (
    <StyledContent dangerouslySetInnerHTML={{ __html: String(children) }} />
  )
}

export default Content
