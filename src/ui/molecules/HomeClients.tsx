import React, { FC } from "react"
import Link from "next/link"

import { Section, Button, Testimony } from "../atoms"
import { H2 } from "../atoms/Header"

// @types
import { IClientTestimony } from "../atoms/Testimony"

export interface HomeClientsProps {
  title: string
  testimonies: IClientTestimony[]
}

const HomeClients: FC<HomeClientsProps> = (props) => {
  const { title, testimonies } = props
  return (
    <Section>
      <div className="text-center">
        <H2>{title}</H2>
      </div>
      <ul className="grid grid-cols-3 gap-8 place-items-start">
        {testimonies.map((testimony) => (
          <Testimony
            key={testimony.name}
            name={testimony.name}
            testimony={testimony.testimony}
            img={testimony.img}
          />
        ))}
      </ul>
      <div className="mt-20 text-center">
        <Link href="/testimonials">
          <Button>View All Testimonials</Button>
        </Link>
      </div>
    </Section>
  )
}

export default HomeClients
