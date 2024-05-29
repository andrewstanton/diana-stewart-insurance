import React, { FC } from "react"
import Image from "next/image"
import classNames from "classnames"

export interface FillImageProps {
  img: string
  alt?: string
  priority?: boolean
  objectContain?: boolean
}

const FillImage: FC<FillImageProps> = (props) => {
  const { img, alt, priority, objectContain } = props

  return (
    <div className="relative w-full h-full">
      <Image
        className={classNames("fill-img object-cover rounded-2xl", {
          "!object-contain": objectContain,
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
