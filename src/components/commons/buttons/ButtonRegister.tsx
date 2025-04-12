'use client';

import { useTranslations } from 'next-intl';

import useOpen from '@/hooks/useOpen';
import StructuredModal from '@/components/modal/StructureModal';
import RegisterClientForm from '@/components/auth/forms/RegisterClientForm';
import ButtonPrimary from './ButtonPrimary';

interface Props {
    defaultButton?: boolean
}

const ButtonRegister = ({ defaultButton = false }: Props) => {
    const t = useTranslations('components.auth');
    const { onOpen, onClose, isOpen } = useOpen();
  return (
    <>
    {defaultButton ? (
        <ButtonPrimary
        onClick={onOpen}
        type='button'
        >
            {t('register')}
        </ButtonPrimary>
    ) : (
        <button
          onClick={onOpen}
          type='button'
          className="cursor-pointer underline hover:opacity-80 transition-opacity flex items-center"
        >
            {t('register')}
        </button>
    )}
        {isOpen ? (
            <StructuredModal open={isOpen} onClose={onClose}>
              <RegisterClientForm onClose={onClose} />
            </StructuredModal>
          ) : null}
    </>
  )
}

export default ButtonRegister
