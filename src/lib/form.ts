import { MutableRefObject } from "react"
import ReCAPTCHA from "react-google-recaptcha"

import {
  IFormFieldInput,
  IFormField,
  IFormData,
  FormFieldTypeEnum,
} from "../../interfaces/gravity"
import { ISelectOption } from "../../interfaces/form"

interface IDefaultGravityValue {
  [key: string]: string
}

/**
 * Get String Input Name For Sub Input Field
 *
 * @param {IFormField} field
 * @returns {string}
 */
export const getSubInputName = (field: IFormFieldInput): string => {
  const id = `${field.id}`.replace(".", "_")
  return `input_${id}`
}

/**
 * Build Select Options
 *
 * @param {IFormField} input
 * @returns {ISelectOption[]}
 */
export const getSelectOptions = (field: IFormField): ISelectOption[] =>
  field.choices.map((choice) => ({
    label: choice.text,
    value: choice.value,
  }))

/**
 * Get Default Values For Gravity Forms
 *
 * @param {IFormData} data
 * @returns {IDefaultGravityValue}
 */
export const getFormDefaultValues = (data: IFormData): IDefaultGravityValue => {
  const returnObject: IDefaultGravityValue = {}

  data.fields.forEach((field) => {
    switch (field.type) {
      case FormFieldTypeEnum.ADDRESS:
        field.inputs.forEach((input) => {
          const name = getSubInputName(input)
          returnObject[name] = ""
        })
        break

      case FormFieldTypeEnum.NAME:
        field.inputs.forEach((input) => {
          const name = getSubInputName(input)
          returnObject[name] = ""
        })
        break

      case FormFieldTypeEnum.RADIO:
        field.inputs.forEach((input) => {
          const name = getSubInputName(input)
          returnObject[name] = ""
        })
        break

      case FormFieldTypeEnum.SECTION:
        return

      default:
        returnObject[`input_${field.id}`] = ""
    }
  })

  return returnObject
}

/**
 * Recaptcha Error
 */
export const recaptchaCheck = (ref: MutableRefObject<ReCAPTCHA | null>) => {
  if (!ref.current) throw new Error("Recaptcha was not complete")
  const captcha = (ref.current as any).getValue()

  if (!captcha || captcha === "") throw new Error("Invalid Recaptcha Value")

  return captcha
}

export default {
  getFormDefaultValues,
  getSubInputName,
  recaptchaCheck,
}
