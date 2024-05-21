export const cleanPhone = (phone: string) => phone.replace(/[^\d]/g, "")

const formatPhone = (phone?: string): string => {
  if (!phone) return ""

  const phoneArr = cleanPhone(phone)
  if (phoneArr.length < 10) return phoneArr

  return `(${phoneArr.slice(0, 3)}) ${phoneArr.slice(3, 6)}-${phoneArr.slice(
    6,
    10
  )}`
}

export default formatPhone
