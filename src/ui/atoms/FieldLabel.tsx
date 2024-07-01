import { FC } from "react"

interface FieldLabelProps {
  children: string
  id: string
}

const FieldLabel: FC<FieldLabelProps> = (props) => {
  const { children, id } = props

  return (
    <label className="block text-sm font-bold text-gray-600 mb-2" htmlFor={id}>
      {children}
    </label>
  )
}

export default FieldLabel
