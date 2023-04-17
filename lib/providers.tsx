'use client'
import * as React from "react"
import { LazyMotion, domAnimation } from "framer-motion"

import dynamic from 'next/dynamic';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const ThemeProvider = dynamic(
  () => {
    return import('next-themes').then(mod => mod.ThemeProvider);
  },
  { ssr: false, }
);




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
         <ToastContainer/> </>

  )
}

export default Providers

