import React, { ReactNode, FC } from "react"
import Image from "next/image"

export interface HeroProps {
  img: string
  children?: ReactNode
}

const Hero: FC<HeroProps> = (props) => {
  const { img, children } = props
  return (
    <div className="relative h-full">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          className="absolute object-cover"
          src={img}
          alt="Diana Stewart Insurance Agent"
          fill
          priority
        />
      </div>
      <div className="relative h-full w-full">{children}</div>
    </div>
  )
}

export default Hero
