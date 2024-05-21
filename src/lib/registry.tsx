"use client"

import { useServerInsertedHTML } from "next/navigation"
import { ReactNode, useState } from "react"
import { ServerStyleSheet, StyleSheetManager } from "styled-components"

interface StyledComponentsRegistryProps {
  children: ReactNode
}

const StyledComponentsRegistry = (props: StyledComponentsRegistryProps) => {
  const { children } = props

  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{styles}</>
  })

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (typeof window !== "undefined") return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  )
}

export default StyledComponentsRegistry
