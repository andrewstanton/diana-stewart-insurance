import React, { FC } from "react"
import Image from "next/image"
import classNames from "classnames"

export interface FillImageProps {
  img: string
  alt?: string
  priority?: boolean
  objectContain?: boolean
  roundedImg?: boolean
}

const FillImage: FC<FillImageProps> = (props) => {
  const { img, alt, priority, objectContain, roundedImg } = props

  return (
    <div className="relative w-full h-full">
      <Image
        className={classNames("fill-img object-cover rounded-2xl", {
          "!object-contain": objectContain,
          "!rounded-full": roundedImg,
        })}
        src={img}
        alt={alt ?? ""}
        priority={priority}
        fill
      />
    </div>
  )
}

export default FillImage
