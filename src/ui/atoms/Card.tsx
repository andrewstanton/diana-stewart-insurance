import React, { ReactNode, FC } from "react"

export interface CardProps {
  children: ReactNode
}

const Card: FC<CardProps> = (props) => {
  const { children } = props
  return (
    <div
      className="p-14 m-10"
      style={{ boxShadow: "rgba(0, 0, 0, 0.4) 0px 0px 8px" }}
    >
      {children}
    </div>
  )
}

export default Card
