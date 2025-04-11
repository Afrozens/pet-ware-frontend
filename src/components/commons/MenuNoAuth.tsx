'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import ButtonPrimary from './buttons/ButtonPrimary';

const MenuNoAuth = () => {
  const t = useTranslations();

  return (
    <>
      <div className="flex xl:text-lg whitespace-nowrap 2xl:text-xl items-center gap-2 xl:gap-5 2xl:gap-8">
        <Link
          href={'/login'}
          className="cursor-pointer underline hover:opacity-80 transition-opacity flex items-center"
        >
            Registrate
        </Link>
        <ButtonPrimary>
            Iniciar sesión
        </ButtonPrimary>
      </div>
    </>
  );
};

export default MenuNoAuth;
