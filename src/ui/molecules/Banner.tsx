import React from "react"

import { Hero, Wrapper } from "../atoms"

export interface HeroProps {
  img: string
  heading: string
  subHeading: string
  text: string
}

const Banner: React.FC<HeroProps> = (props: HeroProps) => {
  const { img, heading, subHeading, text } = props

  return (
    <section className="h-[300px]">
      <Hero img={img}>
        <Wrapper maxWidth={1440}>
          <div className="h-full py-10">
            <h1 className="text-3xl">{heading}</h1>
            <h2 className="text-4xl font-bold">{subHeading}</h2>
            <p className="text-2xl">{text}</p>
          </div>
        </Wrapper>
      </Hero>
    </section>
  )
}

export default Banner
