"use client"

import React, { useRef, useState } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import ReCAPTCHA from "react-google-recaptcha"
import moment from "moment"

import { Button, Input, Alert, Form } from "../atoms"

import {
  IFormField,
  // IFormFieldInput,
  FormFieldTypeEnum,
} from "../../../interfaces/gravity"

import useInstanceLoader from "../../../hooks/useInstanceLoader"

import { recaptchaCheck } from "../../lib/form"

export interface GravityFormProps {
  fields: IFormField[]
  defaultValues: unknown
  onSubmit: (d: unknown) => void
  btnText?: string
  loadingText?: string
  loading: boolean
  error?: string
}

// const NameContainer = styled.div``

// const NameFieldContainer = styled.div``

// const NameField = styled.div``

// const AddressContainer = styled.div``

const ButtonContainer = styled.div``

// const AddressFields = styled.div``

// const FullAddressCol = styled.div``

// const HalfAddressCol = styled.div``

// const HtmlContainer = styled.div``

// const SectionContainer = styled.div``

// const SectionText = styled.div``

// const SubHeading = styled.h3``

const ReCaptchaContainer = styled.div``

// /**
//  * See If Field Is Correct Field
//  *
//  * @param {IFormFieldInput} input
//  * @param {string} label
//  * @returns {boolean}
//  */
// const isFieldBasedOnLabel = (
//   input: IFormFieldInput,
//   label: string
// ): boolean => {
//   const fieldLabel = input.label.toLowerCase().trim()
//   const lowerLabel = label.toLowerCase().trim()
//   return fieldLabel === lowerLabel
// }

interface IRenderConfig {
  errors: any
  register: any
}

// /**
//  * Get Field Options
//  *
//  * @param {IFormField} field
//  * @returns {IOption[]}
//  */
// const getFieldOptions = (field: IFormField): IRadioOption[] =>
//   field.choices
//     ? field.choices.map((choice) => ({
//         label: choice.text,
//         value: choice.value,
//       }))
//     : []

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

    // case FormFieldTypeEnum.DATE:
    //   return (
    //     <Input
    //       key={field.id}
    //       id={name}
    //       type="date"
    //       label={field.label}
    //       placeholder={field.placeholder}
    //       required={field.isRequired}
    //       fullWidth
    //       error={!!errors[name]}
    //       helperText={errors[name] && errors[name].message}
    //       {...register(name, validation)}
    //     />
    //   )

    // case FormFieldTypeEnum.NUMBER:
    // return (
    //   <Input
    //     key={field.id}
    //     id={name}
    //     type="number"
    //     label={field.label}
    //     placeholder={field.placeholder}
    //     required={field.isRequired}
    //     fullWidth
    //     error={!!errors[name]}
    //     helperText={errors[name] && errors[name].message}
    //     {...register(name, validation)}
    //   />
    // )

    // case FormFieldTypeEnum.PHONE:
    //   return (
    //     <Input
    //       key={field.id}
    //       id={name}
    //       type="number"
    //       label={field.label}
    //       placeholder={field.placeholder ?? "##########"}
    //       required={field.isRequired}
    //       fullWidth
    //       error={!!errors[name]}
    //       helperText={
    //         errors[name]
    //           ? errors[name].message
    //           : "Example: 1234567890 (numbers only)"
    //       }
    //       {...register(name, {
    //         ...validation,
    //         pattern: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g,
    //         minLength: {
    //           value: 10,
    //           message: "Invalid phone number length",
    //         },
    //       })}
    //     />
    //   )

    // case FormFieldTypeEnum.RADIO:
    //   return (
    //     <div key={field.id}>
    //       <Radio
    //         id={name}
    //         name={name}
    //         label={field.label ?? ""}
    //         required={field.isRequired}
    //         options={getFieldOptions(field)}
    //         fullWidth
    //         error={!!errors[name]}
    //         helperText={errors[name] && errors[name].message}
    //         register={register}
    //         validation={validation}
    //       />
    //       {process.env.NEXT_PUBLIC_GRAVITY_DEBUG && <div>{field.id}</div>}
    //     </div>
    //   )

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

    // case FormFieldTypeEnum.SECTION:
    //   return (
    //     <SectionContainer key={field.id}>
    //       <SubHeading>{field.label}</SubHeading>
    //       {field.description && <SectionText>{field.description}</SectionText>}
    //       {process.env.NEXT_PUBLIC_GRAVITY_DEBUG && <div>{field.id}</div>}
    //     </SectionContainer>
    //   )

    // case FormFieldTypeEnum.HTML:
    //   return (
    //     <div key={field.id}>
    //       <HtmlContainer
    //         dangerouslySetInnerHTML={{ __html: field.content ?? "" }}
    //       />
    //       {process.env.NEXT_PUBLIC_GRAVITY_DEBUG && <div>{field.id}</div>}
    //     </div>
    //   )

    // case FormFieldTypeEnum.CHECKBOX:
    //   return (
    //     <div className="input" key={field.id}>
    //       <InputLabel>
    //         {field.label} {field.isRequired && "*"}
    //         <div>
    //           {field.inputs.map((input) => {
    //             const subname = getSubInputName(input)
    //             return (
    //               <Checkbox
    //                 key={input.id}
    //                 id={subname}
    //                 name={subname}
    //                 label={input.label}
    //                 value={input.label}
    //                 {...register(subname)}
    //               />
    //             )
    //           })}
    //         </div>
    //       </InputLabel>
    //       {process.env.NEXT_PUBLIC_GRAVITY_DEBUG && <div>{field.id}</div>}
    //     </div>
    //   )

    // case FormFieldTypeEnum.FILEUPLOAD:
    //   return (
    //     <Input
    //       key={field.id}
    //       id={name}
    //       type="file"
    //       label={field.label}
    //       required={field.isRequired}
    //       fullWidth
    //       multiple={false}
    //       error={!!errors[name]}
    //       helperText={
    //         errors[name]
    //           ? errors[name].message
    //           : `Max Size is ${
    //               field.maxFileSize
    //             }MB and File Types Include: ${field.allowedExtensions?.join(
    //               ","
    //             )}`
    //       }
    //       {...register(name, {
    //         ...validation,
    //       })}
    //     />
    //   )

    // case FormFieldTypeEnum.NAME:
    //   return (
    //     <NameContainer key={field.id}>
    //       <InputLabel>
    //         {field.label} {field.isRequired && "*"}
    //       </InputLabel>
    //       <NameFieldContainer>
    //         {field.inputs
    //           .filter((input) => !input.isHidden)
    //           .map((input) => {
    //             const subname = getSubInputName(input)
    //             const subrequired =
    //               input.label === "Middle" ? false : field.isRequired
    //             const subvalidate = subrequired
    //               ? {
    //                   required: `This field is required`,
    //                 }
    //               : {}

    //             return (
    //               <NameField key={subname}>
    //                 <Input
    //                   id={subname}
    //                   name={subname}
    //                   label={input.label}
    //                   placeholder={input.placeholder ?? input.label}
    //                   required={subrequired}
    //                   hideLabel
    //                   fullWidth
    //                   error={!!errors[subname]}
    //                   helperText={errors[subname] && errors[subname].message}
    //                   {...register(subname, subvalidate)}
    //                 />
    //               </NameField>
    //             )
    //           })}
    //       </NameFieldContainer>
    //       {process.env.NEXT_PUBLIC_GRAVITY_DEBUG && <div>{field.id}</div>}
    //     </NameContainer>
    //   )

    // case FormFieldTypeEnum.ADDRESS:
    //   return (
    //     <AddressContainer key={field.id}>
    //       <InputLabel>
    //         {field.label ?? "Address"} {field.isRequired && "*"}
    //       </InputLabel>
    //       <AddressFields>
    //         {field.inputs
    //           .filter((f) => !f.isHidden)
    //           .map((input) => {
    //             const subname = getSubInputName(input)
    //             return isFieldBasedOnLabel(input, "Street Address") ||
    //               isFieldBasedOnLabel(input, "Address Line 2") ? (
    //               <FullAddressCol key={subname}>
    //                 <Input
    //                   id={subname}
    //                   name={subname}
    //                   label={input.label}
    //                   placeholder={input.placeholder ?? input.label}
    //                   required={field.isRequired}
    //                   hideLabel
    //                   fullWidth
    //                   error={!!errors[subname]}
    //                   helperText={errors[subname] && errors[subname].message}
    //                   {...register(subname, validation)}
    //                 />
    //               </FullAddressCol>
    //             ) : (
    //               <HalfAddressCol key={subname}>
    //                 <Input
    //                   id={subname}
    //                   name={subname}
    //                   label={input.label}
    //                   placeholder={input.placeholder ?? input.label}
    //                   required={field.isRequired}
    //                   hideLabel
    //                   fullWidth
    //                   error={!!errors[subname]}
    //                   helperText={errors[subname] && errors[subname].message}
    //                   {...register(subname, validation)}
    //                 />
    //               </HalfAddressCol>
    //             )
    //           })}
    //       </AddressFields>
    //       {process.env.NEXT_PUBLIC_GRAVITY_DEBUG && <div>{field.id}</div>}
    //     </AddressContainer>
    //   )

    // case FormFieldTypeEnum.SELECT:
    //   return (
    //     <Select
    //       key={field.id}
    //       id={name}
    //       options={getSelectOptions(field)}
    //       label={field.label}
    //       placeholder={field.placeholder}
    //       required={field.isRequired}
    //       fullWidth
    //       error={!!errors[name]}
    //       helperText={errors[name] && errors[name].message}
    //       {...register(name, validation)}
    //     />
    //   )

    default:
      return (
        <div key={field.id}>
          {field.type}:{field.id}
        </div>
      )
  }
}

const ErrorContainer = styled.div``

const RequiredDescription = styled.div``

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
const parseFormData = (data: FormData, fields: IFormField[]) => {
  const newData = data
  const phoneFieldsRaw = fields.filter((field) => field.type === "PHONE")
  const dateFieldsRaw = fields.filter((field) => field.type === "DATE")
  const dateFields = dateFieldsRaw.map((field) => `input_${field.id}`)
  const phoneFields = phoneFieldsRaw.map((field) => `input_${field.id}`)

  // Phone Field Parse
  phoneFields.forEach((phoneField) => {
    const phoneExists =
      phoneField in newData && newData[phoneField].trim() !== ""
    if (phoneExists) {
      const newValue = `${newData[phoneField]}`.replace(/\D/g, "").trim()
      newData[phoneField] = newValue
    } else {
      delete newData[phoneField]
    }
  })

  // Date Field Parse
  dateFields.forEach((dateField) => {
    const dateExists = dateField in newData && newData[dateField].trim() !== ""
    if (dateExists) {
      const newValue = newData[dateField]
      newData[dateField] = moment(newValue).format("MM-DD-YYYY")
    } else {
      delete newData[dateField]
    }
  })

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
  const captchaRef = useRef<ReCAPTCHA>(null)
  const [capError, setCapError] = useState<string | null>(null)
  const instance = useInstanceLoader()

  const onHandleSubmit = async (data: unknown) => {
    setCapError(null)

    try {
      recaptchaCheck(captchaRef)
    } catch (err) {
      return setCapError((err as Error).message)
    }

    const parsed = parseFormData(data as FormData, fields)
    ;(captchaRef.current as any).reset()

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

      {fields.map((field) => renderField(field, { register, errors }))}

      <ReCaptchaContainer>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC ?? ""}
          ref={captchaRef}
          grecaptcha={instance}
        />
      </ReCaptchaContainer>

      {(error || capError) && (
        <ErrorContainer>
          <Alert color="red">{error || capError}</Alert>
        </ErrorContainer>
      )}

      <ButtonContainer>
        <Button type="submit" disabled={loading}>
          {loading ? loadingText : btnText}
        </Button>
      </ButtonContainer>
    </Form>
  )
}

GravityForm.defaultProps = {
  btnText: "Submit",
  loadingText: "Submitting...",
}

export default GravityForm
