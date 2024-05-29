import React, { FC } from "react"

import FillImage from "./FillImage"

export interface IClientTestimony {
  name: string
  testimony: string
}

const Testimony: FC<IClientTestimony> = (props) => {
  const { name, testimony } = props
  return (
    <div className="h-full flex flex-col items-center gap-8">
      <div className="h-[100px] w-[100px]">
        <FillImage img="/images/profile-placeholder.jpg" />
      </div>
      <div className="h-full border-gray-400 border-solid border-2 py-4 px-8">
        <div dangerouslySetInnerHTML={{ __html: String(testimony) }} />
        <h4 className="text-center text-black border-t-2 pt-4 border-black">
          {name}
        </h4>
      </div>
    </div>
  )
}

export default Testimony
