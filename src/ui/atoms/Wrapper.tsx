import { FC, ReactNode } from "react"
import cns from "classnames"

export interface WrapperProps {
  width?: number
  maxWidth?: number
  children: ReactNode
}

const Wrapper: FC<WrapperProps> = (props) => {
  const { width, maxWidth, children } = props
  return (
    <div
      className={cns("mx-auto h-full", {
        maxWidth: `max-width: ${maxWidth || 1480}px`,
        width: `width: ${width}px`,
      })}
    >
      {children}
    </div>
  )
}

export default Wrapper
