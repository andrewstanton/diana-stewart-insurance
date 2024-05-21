import { FC, ReactNode } from "react"

export interface SectionProps {
  children?: ReactNode
}

const Section: FC<SectionProps> = (props) => {
  const { children } = props
  return <section className="bg-white p-14">{children}</section>
}

export default Section
