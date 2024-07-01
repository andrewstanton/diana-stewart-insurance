"use client"

import { FC, ReactNode } from "react"

import { IFormField } from "../../../interfaces/gravity"
import { Section } from "../atoms"

import { useGravityForm } from "../../../hooks"
import { GravityForm } from "../organisms"

export interface WriteSectionProps {
  title: string
  children: ReactNode
  fields: IFormField[]
  defaultValues: unknown
}

const WriteSection: FC<WriteSectionProps> = (props) => {
  const { title, children, fields, defaultValues } = props

  const [state, handleSubmit] = useGravityForm({
    id: "2",
  })

  return (
    <Section wrapperMaxWidth={700}>
      <GravityForm
        title={title}
        defaultValues={defaultValues}
        loading={state.loading}
        error={state.error}
        success={state.success}
        content={children}
        fields={fields}
        onSubmit={handleSubmit}
        btnText="Submit Testimonial"
      />
    </Section>
  )
}

export default WriteSection
