'use client'

import { PropsWithChildren } from "react"
import Header from "@/components/commons/Header"

const LobbyLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
        <Header />
        {children}
    </>
  )
}

export default LobbyLayout
