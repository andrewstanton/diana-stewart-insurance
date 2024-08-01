"use client"

import { FC } from "react"
import styled from "styled-components"
import { Section } from "../atoms"

import colors from "../../config/colors"

const Content = styled.p`
  color: ${colors.white};

  a {
    color: ${colors.green700};
    font-weight: bold;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const Disclaimer: FC = () => (
  <Section bgColor={colors.gray700}>
    <Content>
      <strong>Disclaimer Notice:</strong> We do not offer every plan available
      in your service area. Currently we represent 9 organizations which offer
      30 products in your area.
      <br />
      <br />
      Please contact{" "}
      <a href="https://medicare.gov" target="_blank" rel="noreferrer">
        medicare.gov
      </a>{" "}
      (1-800-633-4227) or you local state help insurance program (ship) to get
      information on all of your options.
    </Content>
  </Section>
)

export default Disclaimer
