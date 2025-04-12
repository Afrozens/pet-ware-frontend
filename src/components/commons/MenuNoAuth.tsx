'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

import useOpen from '@/hooks/useOpen';
import StructuredModal from '../modal/StructureModal';
import ButtonPrimary from './buttons/ButtonPrimary';
import RegisterClientForm from '../auth/forms/RegisterClientForm';

const MenuNoAuth = () => {
  const t = useTranslations('components.auth');
  const { onOpen, onClose, isOpen } = useOpen();

  return (
    <>
      <div className="flex xl:text-lg whitespace-nowrap 2xl:text-xl items-center gap-2 xl:gap-5 2xl:gap-8">
        <button
          onClick={onOpen}
          type='button'
          className="cursor-pointer underline hover:opacity-80 transition-opacity flex items-center"
        >
            {t('register')}
        </button>
        <Link href={'/login'}>
          <ButtonPrimary>
              {t('login')}
          </ButtonPrimary>
        </Link>
      </div>
      {isOpen ? (
        <StructuredModal open={isOpen} onClose={onClose}>
          <RegisterClientForm onClose={onClose} />
        </StructuredModal>
      ) : null}
    </>
  );
};

export default MenuNoAuth;
