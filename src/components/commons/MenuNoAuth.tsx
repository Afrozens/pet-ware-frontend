'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

import ButtonPrimary from './buttons/ButtonPrimary';
import ButtonRegister from './buttons/ButtonRegister';

const MenuNoAuth = () => {
  const t = useTranslations('components.auth');

  return (
    <>
      <div className="flex xl:text-lg whitespace-nowrap 2xl:text-xl items-center gap-2 xl:gap-5 2xl:gap-8">
        <ButtonRegister />
        <Link href={'/login'}>
          <ButtonPrimary>
              {t('login')}
          </ButtonPrimary>
        </Link>
      </div>
      
    </>
  );
};

export default MenuNoAuth;
