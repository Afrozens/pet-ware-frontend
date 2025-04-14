import { useTranslations } from "next-intl"
import Image from "next/image";
import Link from "next/link";

import RegisterProfessionalForm from "@/components/auth/forms/RegisterProfessionalForm";
import { montserrat } from "@/fonts";
import AuthLayout from "@/layout/AuthLayout"

const page = () => {
  const t = useTranslations('components.auth');
  return (
    <AuthLayout withAd={false}>
        <section className='w-full min-h-screen flex justify-center items-center bg-white'>
        <div className="flex w-full flex-col items-center min-h-screen pt-20 justify-start gap-0">
            <Link href="/" className="hover:opacity-80 text-3xl transition-opacity w-fit">
                <Image src={'/logotype.svg'} alt="pet image reference" className="-rotate-45" width={80} height={80} />
              </Link>
            <div className="mt-10 justify-center items-center flex w-full flex-col gap-4">
          <h1 className="form-title">{t('register-title')}</h1>
          <p className={`form-subtitle whitespace-nowrap -mt-4 md:text-lg md:font-medium ${montserrat.className}`}>
            {t('register-description')}
          </p>
          <RegisterProfessionalForm />
        </div>
      </div>
        </section>
    </AuthLayout>
  )
}

export default page
