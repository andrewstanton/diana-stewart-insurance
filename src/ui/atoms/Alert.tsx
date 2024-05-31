import React, { ReactNode } from "react"
import cns from "classnames"

export type AlertColor = "default" | "red"

export interface AlertProps {
  color?: AlertColor
  children?: ReactNode
}

const Hamburger: React.FC<AlertProps> = (props: AlertProps) => {
  const { color = "default", children } = props

  return (
    <div
      className={cns(
        "box-border p-6 text-sm border border-black border-red-500 h-fit text-black text-center",
        {
          [`${color}`]: color,
        }
      )}
    >
      {children}
    </div>
  )
}

export default Hamburger
