import { IConfigData } from "@/queries/getConfigQuery"

import { DefaultTemplateProps } from "@/ui/templates/HomeTemplate"

export const getDefaultProps = (data: IConfigData): DefaultTemplateProps => ({
  phone: data.companyPhone ?? "",
  email: data.companyEmail ?? "",
  facebook: data.facebook,
})

export default {
  getDefaultProps,
}
