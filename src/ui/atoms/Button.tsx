import classNames from "classnames"
import { FC, ReactNode } from "react"

export enum ButtonColorEnum {
  PRIMARY,
  DEFAULT,
}

export interface ButtonProps {
  children: ReactNode
  color?: ButtonColorEnum
  title?: string
  type?: "button" | "submit" | "reset"
}

const Button: FC<ButtonProps> = (props) => {
  const { children, color, type = "button", title } = props

  const getColorClass = () => {
    switch (color) {
      case ButtonColorEnum.DEFAULT:
        return "rounded-full bg-gray-500 text-white hover:bg-gray-400"
      default:
        return "bg-green-500 text-white hover:bg-green-700"
    }
  }

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      title={title}
      className={classNames(
        "px-6 py-4 rounded-sm transition-all",
        getColorClass()
      )}
    >
      {children}
    </button>
  )
}

export default Button
