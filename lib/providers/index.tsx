'use client'
import * as React from "react"
import { LazyMotion, domAnimation } from "framer-motion"

import { ThemeProvider } from "next-themes";

export const Providers = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <LazyMotion features={domAnimation}>

          {children}
        </LazyMotion>
      </ThemeProvider>

    </>

  )
}

export default Providers

