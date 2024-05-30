import React from "react"
import cns from "classnames"

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
  const { id, name, placeholder, type, required, ...other } = props

  const styles = "outline-none border border-gray-400 w-full px-4 py-8"

  /* eslint-disable react/jsx-props-no-spreading */
  return type === "textarea" ? (
    <textarea
      className={cns("resize-none h-24 mb-8 text-lg", styles)}
      id={id}
      placeholder={placeholder}
      name={name}
      required={required}
      ref={ref as React.Ref<HTMLTextAreaElement>}
      {...other}
    />
  ) : (
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
  )
})

// Set a display name for component - react/display-name
Input.displayName = "Input"

export default Input
