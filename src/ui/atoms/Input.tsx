import cns from "classnames"
import React from "react"

import FieldLabel from "./FieldLabel"

export interface InputProps {
  id: string
  name: string
  type?: "text" | "email" | "textarea"
  placeholder?: string
  label: string
  required?: boolean
}

const Input = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>((props, ref) => {
  const { id, name, label, placeholder, type, required, ...other } = props

  const styles =
    "outline-none border border-gray-200 w-full px-4 py-4 text-normal text-black"

  return type === "textarea" ? (
    <div>
      {label && <FieldLabel id={id}>{label}</FieldLabel>}
      <textarea
        className={cns("resize-none h-40 mb-8", styles)}
        id={id}
        placeholder={placeholder}
        name={name}
        required={required}
        ref={ref as React.Ref<HTMLTextAreaElement>}
        {...other}
      />
    </div>
  ) : (
    <div>
      {label && <FieldLabel id={id}>{label}</FieldLabel>}
      <input
        className={cns("border h-14", styles)}
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        ref={ref as React.Ref<HTMLInputElement>}
        required={required}
        {...other}
      />
    </div>
  )
})

// Set a display name for component - react/display-name
Input.displayName = "Input"

export default Input
