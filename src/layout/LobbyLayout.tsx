'use client'

import { PropsWithChildren } from "react"

import Header from "@/components/commons/Header"
import Footer from "@/components/commons/Footer"

const LobbyLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default LobbyLayout
