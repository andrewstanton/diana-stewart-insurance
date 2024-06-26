import React, { FC } from "react"

import FillImage from "./FillImage"

export interface IClientTestimony {
  name: string
  testimony: string
  img: string
}

const Testimony: FC<IClientTestimony> = (props) => {
  const { name, testimony, img } = props
  return (
    <div className="flex flex-col items-center justify-center text-center gap-8">
      <div className="h-[100px] w-[100px]">
        <FillImage img={img} roundedImg />
      </div>
      <div className="relative h-full mt-4 border-gray-400 border-solid border-t border-l border-r border-b  py-10 px-8">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-10 h-10 -mt-5 rotate-45 border-t border-l border-gray-400 bg-white" />
        <div className="grid justify-center">
          <div dangerouslySetInnerHTML={{ __html: String(testimony) }} />
          <h4 className="text-black border-t-4 border-gray-400 pt-4 mt-8 border-black">
            {name}
          </h4>
        </div>
        <div
          className="absolute bg-white bottom-0 left-0 border-gray-400 h-[25px] border-t border-gray-40 border-r border-r-white border-l border-l-white transform -translate-x-[2%] translate-y-[5%]"
          style={{
            borderTopRightRadius: "100%",
            borderTopLeftRadius: "100%",
            width: "104%",
          }}
        />
      </div>
    </div>
  )
}

export default Testimony
