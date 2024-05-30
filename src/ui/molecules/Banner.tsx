import React from "react"
import Link from "next/link"

import { Hero, Wrapper, Button } from "../atoms"

export interface HeroProps {
  img: string
}

const Banner: React.FC<HeroProps> = (props: HeroProps) => {
  const { img } = props

  return (
    <section className="h-[400px]">
      <Hero img={img}>
        <Wrapper maxWidth={1300}>
          <div className="h-full sm:max-w-[450px] py-8 flex flex-col items-center text-center sm:text-left sm:items-start justify-center gap-6 text-black">
            <h1 className="text-4xl m-0 leading-10">
              Choosing A Medicare Plan Feels Like You&apos;re At
            </h1>
            <h2 className="text-5xl font-bold m-0 leading-3">
              Niagra <span className="text-green-600">Falls</span>
            </h2>
            <p className="text-2xl p-0 m-0">I Can Keep You From Drowning!</p>
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
