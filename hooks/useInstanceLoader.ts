import { useRef, useEffect } from "react"

declare global {
  interface Window {
    grecaptcha: any
  }
}

const useInstanceLoader = () => {
  const helperInstance = useRef<object | undefined>(undefined)
  const sitekey = process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC ?? ""

  useEffect(() => {
    if (!window.grecaptcha) {
      const script = document.createElement("script")
      script.src = `https://www.google.com/recaptcha/api.js?render=${sitekey}`
      script.async = true
      script.defer = true
      script.onload = () => {
        helperInstance.current = window.grecaptcha
      }
      document.body.appendChild(script)
    } else {
      helperInstance.current = window.grecaptcha
    }

    return () => {
      if (helperInstance.current) {
        ;(helperInstance.current as any).reset()
      }
    }
  }, [])

  return helperInstance.current
}

export default useInstanceLoader
