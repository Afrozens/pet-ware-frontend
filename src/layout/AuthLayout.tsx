'use client'

import { PropsWithChildren } from 'react'
import { LeftOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'

import Footer from '@/components/commons/Footer'
import ButtonRegister from '@/components/commons/buttons/ButtonRegister'

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <section className='w-full min-h-screen flex'>
        {/* ad information */}
        <div className='hidden xl:block xl:max-w-[20%] xl:w-full h-screen bg-[#F5FAFF]'>
        </div>
        
        <div className='flex-1 flex bg-white'>
          <div className='w-full relative h-full'>
            <header className="absolute top-0 z-[999] bg-transparent flex w-full p-10 2xl:px-20 items-center justify-between h-[51px]">
              <Link href={'/'}>
              <div
                className="cursor-pointer -mt-2 mb-1 flex w-fit items-center gap-2 font-medium transition-all hover:-translate-x-2 hover:opacity-80"
              >
                <LeftOutlined className="text-[14px]" /> Volver
              </div>
              </Link>
              <ButtonRegister defaultButton />
            </header>
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default AuthLayout