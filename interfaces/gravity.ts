export enum FormFieldTypeEnum {
  TEXT = "TEXT",
  EMAIL = "EMAIL",
  PHONE = "PHONE",
  TEXTAREA = "TEXTAREA",
  CHECKBOX = "CHECKBOX",
  DATE = "DATE",
  NUMBER = "NUMBER",
  RADIO = "RADIO",
  SELECT = "SELECT",
  NAME = "NAME",
  SECTION = "SECTION",
  ADDRESS = "ADDRESS",
  HTML = "HTML",
  FILEUPLOAD = "FILEUPLOAD",
}

export interface IFormChoice {
  text: string
  value: string
}

export interface IFormFieldInput {
  id: number
  placeholder: null | string
  label: string
  isHidden: boolean
}

export interface IFormField {
  id: number
  type: FormFieldTypeEnum
  label: string | null
  description: string | null
  isRequired: boolean
  placeholder: string | null
  choices: IFormChoice[]
  inputs: IFormFieldInput[]
  content: string | null
  maxFileSize: number | null
  allowedExtensions: string[] | null
}

export interface IFormData {
  id: number
  title: string
  fields: IFormField[]
}

export interface FormProps {
  defaultValues: unknown
  formFields: IFormField[]
  onSubmit: (d: unknown) => void
  loading: boolean
  error?: string
}
