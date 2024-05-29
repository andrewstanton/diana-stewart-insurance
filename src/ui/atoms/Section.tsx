import { FC, ReactNode } from "react"

import Wrapper from "./Wrapper"

export interface SectionProps {
  children?: ReactNode
}

const Section: FC<SectionProps> = (props) => {
  const { children } = props
  return (
    <section className="bg-white p-14">
      <Wrapper>{children}</Wrapper>
    </section>
  )
}

export default Section
