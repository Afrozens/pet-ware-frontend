'use client'

import { PropsWithChildren } from 'react'

import Footer from '@/components/commons/Footer'
import Image from 'next/image'
import Link from 'next/link'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
        <header className="absolute top-0 z-[999] bg-transparent flex w-full p-10 2xl:px-20 items-center justify-center h-[51px]">
            <Link href="/" className="hover:opacity-80 text-3xl transition-opacity w-fit md:w-56">
                <Image src={'/logotype.svg'} alt="pet image reference" className="-rotate-45" width={50} height={50} />
            </Link>
        </header>
        {children}
        <Footer />
    </>
  )
}

export default AuthLayout
