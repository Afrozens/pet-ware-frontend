import { useTranslations } from 'next-intl';
import Image from 'next/image'
import Link from 'next/link'

import { montserrat } from '@/fonts';
import AuthLayout from '@/layout/AuthLayout'
import LoginForm from '@/components/auth/forms/LoginForm';

const page = () => {
  const t = useTranslations('components');
  return (
    <AuthLayout>
        <section className='w-full min-h-screen flex justify-center items-center bg-white'>
              <div className="flex w-full flex-col items-center justify-center gap-0">
            <Link href="/" className="hover:opacity-80 text-3xl transition-opacity w-fit">
                <Image src={'/logotype.svg'} alt="pet image reference" className="-rotate-45" width={80} height={80} />
              </Link>
        <div className="mt-10 justify-center items-center flex w-full flex-col gap-4">
          <h1 className="form-title">{t('auth.login-title')}</h1>
          <p className={`form-subtitle -mt-4 md:text-lg md:font-medium ${montserrat.className}`}>
            {t('auth.login-description')}
          </p>
        </div>
        <LoginForm />
        <small className="mt-2 text-xs text-black">
          {t('auth.back')}{' '}
          <Link
            className="font-semibold text-primary transition-opacity hover:opacity-80"
            href="/"
          >
            {t('home')}
          </Link>
        </small>
      </div>
        </section>
    </AuthLayout>
  )
}

export default page
