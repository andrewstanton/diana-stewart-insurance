import React from "react"
import Link from "next/link"

import { Hero, Wrapper, Button } from "../atoms"

export interface HeroProps {
  img: string
  heading: string
  subHeading: string
  text: string
}

const Banner: React.FC<HeroProps> = (props: HeroProps) => {
  const { img, heading, subHeading, text } = props

  return (
    <section className="h-[400px]">
      <Hero img={img}>
        <Wrapper maxWidth={1000}>
          <div className="h-full max-w-[450px] py-8 flex flex-col justify-center gap-8 text-black">
            <h1 className="text-4xl m-0 leading-10">{heading}</h1>
            <h2 className="text-5xl font-bold m-0 leading-3">{subHeading}</h2>
            <p className="text-2xl p-0 m-0">{text}</p>
            <Link href="/contact">
              <Button>Contact Diana Now</Button>
            </Link>
          </div>
        </Wrapper>
      </Hero>
    </section>
  )
}

export default Banner
