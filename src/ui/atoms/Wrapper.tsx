import { FC, ReactNode } from "react"

export interface WrapperProps {
  width?: number
  maxWidth?: number
  children: ReactNode
}

const Wrapper: FC<WrapperProps> = (props) => {
  const { width, maxWidth, children } = props
  return (
    <div
      className="mx-auto h-full"
      style={{
        width: `${width || "95"}%`,
        maxWidth: `${maxWidth || 1480}px`,
      }}
    >
      {children}
    </div>
  )
}

export default Wrapper
