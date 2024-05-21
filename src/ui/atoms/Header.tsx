"use client"

import colors from "@/config/colors"
import styled, { css } from "styled-components"

const basicStyles = css`
  color: ${colors.green500};
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
`

export const H1 = styled.h1`
  font-size: 2rem;
  ${basicStyles}
`

export const H2 = styled.h2`
  font-size: 1.75rem;
  ${basicStyles}
`

export default {
  H1,
  H2,
}
