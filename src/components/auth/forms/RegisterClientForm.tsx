'use client';

import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LeftOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import RolSelect from '@/components/auth/RolSelect';
import FieldInput from '@/components/commons/fields/FieldInput';
import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';
import FieldError from '@/components/commons/fields/FieldError';
import AuthService from '@/services/AuthService';
import useSubmit from '@/hooks/useSubmit';
import { SignIn } from '@/models/auth';
import { regexPassword } from '@/utils/regex';

type typeStatus = 'pending' | 'success';

interface Props {
  onClose: () => void;
}

const RegisterClientForm = ({ onClose }: Props) => {
  const authService = new AuthService();
  const t = useTranslations('');
  const [isStart, setIsStart] = useState(false);
  const [isStatus, setIsStatus] = useState<typeStatus>('pending');
  const onRegister = () => {
    setIsStart(true);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm<SignIn>();

  const { error, setError, isLoading, doSubmit } = useSubmit<SignIn, void>(
    'Te has registrado correctamente como cliente',
  );

  const onSubmit: SubmitHandler<SignIn> = async (data) => {
    try {
      if (!data) return setError('Debe completar la información');
      await doSubmit({ data, callback: authService.registerClient });
      setIsStatus('success');
    } catch (error) {
      // empty
    }
  };
  return (
    <>
      {isStart ? (
        <>
          {isStatus === 'pending' ? (
            <div className="form-initial mt-4 w-fit xl:w-full">
              <h2 className="whitespace-pre text-center text-xl font-semibold leading-none tracking-tight text-gray-900 md:text-2xl">
                Registrate ahora
              </h2>
              <p className="text-balance text-gray-900 text-center text-lg opacity-70">
                Seremos los intermediarios para ayudar a tu mascota, juntos.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="base-form">
                <FieldInput
                  label={t('input.email')}
                  type="email"
                  id="email"
                  name="email"
                  error={errors.email?.message as string}
                  register={register}
                  rules={{
                    required: {
                      value: true,
                      message: t('validates.email'),
                    },
                  }}
                  isRequired={true}
                  placeholder="Correo@example.com"
                />
                <div className="container-inputs flex-col">
                  <FieldInput
                    label={t('input.password')}
                    type="password"
                    name="password"
                    id="password"
                    error={errors.password?.message}
                    register={register}
                    rules={{
                      required: {
                        value: true,
                        message: t('validates.password.required'),
                      },
                      minLength: {
                        value: 8,
                        message: t('validates.password.eight'),
                      },
                      pattern: {
                        value: regexPassword,
                        message: t('validates.password.regex'),
                      },
                    }}
                    isRequired={true}
                    placeholder="••••••••••"
                  />
                  <FieldInput
                    label={t('input.confirm-password')}
                    name="confirm_password"
                    error={errors.confirm_password?.message as string}
                    register={register}
                    rules={{
                      required: {
                        value: true,
                        message: t('validates.confirm-password.required'),
                      },
                      minLength: {
                        value: 8,
                        message: t('validates.confirm-password.eight'),
                      },
                      validate: (value) => {
                        const { password } = getValues();
                        if (password !== value)
                          return t('validates.confirm-password.equal');
                      },
                      pattern: {
                        value: regexPassword,
                        message: t('validates.password.regex'),
                      },
                    }}
                    type="password"
                    id="confirmPassword"
                    isRequired={true}
                    placeholder="••••••••••"
                  />
                </div>
                <ButtonPrimary loading={isLoading}>
                  Registrarse
                </ButtonPrimary>
              </form>
              <small className="mt-2 text-center text-xs text-gray-800">
                ¿Ya tienes una cuenta? {" "}
                <Link
                  className="font-semibold text-primary transition-opacity hover:opacity-80"
                  href="loguearse"
                >
                  Iniciar sesión
                </Link>
              </small>
              <small className="-my-2 text-xs text-gray-700">
                Al registrarte aceptas los {" "}
                <a href="#" className="text-primary transition-opacity hover:opacity-80">
                  terminos y condiciones
                </a>
              </small>
              <div className="w-full text-center">
                <FieldError error={error} />
              </div>
              <button
                onClick={() => setIsStart(false)}
                type='button'
                className="cursor-pointer -mt-2 mb-1 flex w-fit items-center gap-2 font-medium transition-all hover:-translate-x-2 hover:opacity-80"
              >
                <LeftOutlined className="text-[14px]" /> Volver
              </button>
            </div>
          ) : (
            <div className="mt-4 flex h-56 w-fit xl:w-full animate-fade flex-col items-center justify-center">
              <Image
                src="/illustrators/notification.svg"
                alt="notification email in svg"
                width={125}
                height={125}
                className="mx-auto bg-cover motion-safe:animate-bounce"
              />
              <span className="text-xl font-bold">
                Activación de cuenta
              </span>
              <span className="text-base font-light">
                Puede revisar su correo eléctronico
              </span>
            </div>
          )}
        </>
      ) : (
        <RolSelect onClose={onClose} onRegister={onRegister} />
      )}
    </>
  );
};

export default RegisterClientForm;
