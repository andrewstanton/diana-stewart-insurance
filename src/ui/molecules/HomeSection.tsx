import Link from "next/link"
import { FC, ReactNode } from "react"

import { Button, Section } from "@/ui/atoms"
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
    <Section>
      <div className="container mx-auto text-center">
        <H1>{title}</H1>

        {children}

        <div className="mt-10">
          <Link href="/contact">
            <Button color={ButtonColorEnum.DEFAULT}>{btnText}</Button>
          </Link>
        </div>
      </div>
    </Section>
  )
}

export default HomeSection
