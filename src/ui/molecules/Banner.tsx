import Link from "next/link"
import React from "react"

import { Button, Hero, Wrapper } from "../atoms"

export interface HeroProps {
  img: string
}

const Banner: React.FC<HeroProps> = (props: HeroProps) => {
  const { img } = props

  return (
    <section className="h-[400px]">
      <Hero img={img}>
        <div
          className="absolute z-10 w-full h-full"
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.9) 36%, rgba(255,255,255,0) 100%)",
          }}
        />
        <Wrapper maxWidth={1300}>
          <div className="relative h-full sm:max-w-[600px] py-8 flex flex-col items-center text-center sm:text-left sm:items-start justify-center gap-6 text-black z-30">
            <h1 className="text-3xl m-0 leading-10 mb-0">
              Does Choosing Medicare Health Insurance Feels Like You Are{" "}
              <strong>Drowning</strong>?
            </h1>
            <h2 className="text-5xl mb-4 font-bold m-0 leading-12">
              <span className="text-green-600">I Can Keep You Afloat!</span>
            </h2>
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
