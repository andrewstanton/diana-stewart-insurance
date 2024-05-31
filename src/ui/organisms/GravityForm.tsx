"use client"

import React, { useState } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
// import ReCAPTCHA from "react-google-recaptcha"

import { Button, Input, Alert, Form } from "../atoms"

import {
  IFormField,
  // IFormFieldInput,
  FormFieldTypeEnum,
} from "../../../interfaces/gravity"

// import useInstanceLoader from "../../../hooks/useInstanceLoader"

// import { recaptchaCheck } from "../../lib/form"

export interface GravityFormProps {
  fields: IFormField[]
  defaultValues: unknown
  onSubmit: (d: unknown) => void
  btnText?: string
  loadingText?: string
  loading: boolean
  error?: string
}

const ButtonContainer = styled.div`
  margin-top: 2rem;
`

const ReCaptchaContainer = styled.div``

interface IRenderConfig {
  errors: any
  register: any
}

/**
 * Rendering Field For Form
 *
 * @param {IFormField} field
 * @param {IRenderConfig} config
 * @returns {JSX}
 */
const renderField = (field: IFormField, config: IRenderConfig) => {
  const { errors, register } = config
  const name = `input_${field.id}`
  const validation = field.isRequired
    ? {
        required: `This field is required`,
      }
    : {}

  /* eslint-disable react/jsx-props-no-spreading */
  switch (field.type) {
    case FormFieldTypeEnum.TEXT:
      return (
        <Input
          key={field.id}
          id={name}
          label={field.label}
          placeholder={field.placeholder}
          required={field.isRequired}
          fullWidth
          error={!!errors[name]}
          helperText={errors[name] && errors[name].message}
          {...register(name, validation)}
        />
      )
    case FormFieldTypeEnum.EMAIL:
      return (
        <Input
          key={field.id}
          id={name}
          label={field.label}
          type="email"
          placeholder={field.placeholder}
          required={field.isRequired}
          fullWidth
          error={!!errors[name]}
          helperText={errors[name] && errors[name].message}
          {...register(name, {
            ...validation,
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
      )
    case FormFieldTypeEnum.TEXTAREA:
      return (
        <Input
          type="textarea"
          key={field.id}
          id={name}
          placeholder={field.placeholder}
          label={field.label}
          fullWidth
          required={field.isRequired}
          error={!!errors[name]}
          helperText={errors[name] && errors[name].message}
          {...register(name, validation)}
        />
      )
    default:
      return (
        <div key={field.id}>
          {field.type}:{field.id}
        </div>
      )
  }
}

const ErrorContainer = styled.div``

const RequiredDescription = styled.div`
  margin-bottom: 1rem;
`

interface FormData {
  [key: string]: any
}

/**
 * Function for parsing data fields
 *
 * @param {FormData} data
 * @param {fields} fields
 *
 * @returns {FormData}
 */
const parseFormData = (data: FormData) => {
  const newData = data
  return newData
}

const GravityForm: React.FC<GravityFormProps> = (props) => {
  const {
    onSubmit,
    defaultValues,
    fields,
    loading,
    btnText,
    error,
    loadingText,
  } = props
  // const captchaRef = useRef<ReCAPTCHA>(null)
  const [capError, setCapError] = useState<string | null>(null)
  // const instance = useInstanceLoader()

  const onHandleSubmit = async (data: unknown) => {
    setCapError(null)

    // try {
    //   recaptchaCheck(captchaRef)
    // } catch (err) {
    //   return setCapError((err as Error).message)
    // }

    const parsed = parseFormData(data as FormData)
    // ;(captchaRef.current as any).reset()

    return onSubmit(parsed)
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues as any,
  })

  return (
    <Form onSubmit={handleSubmit(onHandleSubmit)}>
      <RequiredDescription>
        All required fields, marked with an asterisk (*), must be completed to
        submit
      </RequiredDescription>

      <div className="grid gap-6">
        {fields.map((field) => renderField(field, { register, errors }))}
      </div>

      <ReCaptchaContainer>
        {/* <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC ?? ""}
          ref={captchaRef}
          grecaptcha={instance}
        /> */}
      </ReCaptchaContainer>

      {(error || capError) && (
        <ErrorContainer>
          <Alert color="red">{error || capError}</Alert>
        </ErrorContainer>
      )}

      <ButtonContainer>
        <Button type="submit" disabled={loading} fullWidth>
          {loading ? loadingText : btnText}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

export default GravityForm
