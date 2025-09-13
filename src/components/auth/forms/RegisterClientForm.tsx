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
  const authService             = new AuthService();
  const tInput                  = useTranslations('input');
  const tValidates              = useTranslations('validates');
  const tClient                 = useTranslations('components.register-client');
  const [isStart, setIsStart]   = useState(false);
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
    tClient('successful-account'),
  );

  const onSubmit: SubmitHandler<SignIn> = async (data) => {
    try {
      if (!data) return setError(tClient('complete-information'));
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
                {tClient('register-now')}
              </h2>
              <p className="text-balance text-gray-900 text-center text-lg opacity-70">
                {tClient('description')}
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="base-form">
                <FieldInput
                  label={tInput('email')}
                  type="email"
                  id="email"
                  name="email"
                  error={errors.email?.message as string}
                  register={register}
                  rules={{
                    required: {
                      value: true,
                      message: tValidates('email'),
                    },
                  }}
                  isRequired={true}
                  placeholder="Correo@example.com"
                />
                <div className="container-inputs flex-col">
                  <FieldInput
                    label={tInput('password')}
                    type="password"
                    name="password"
                    id="password"
                    error={errors.password?.message}
                    register={register}
                    rules={{
                      required: {
                        value: true,
                        message: tValidates('password-required'),
                      },
                      minLength: {
                        value: 8,
                        message: tValidates('password-eight'),
                      },
                      pattern: {
                        value: regexPassword,
                        message: tValidates('password-requirements'),
                      },
                    }}
                    isRequired={true}
                    placeholder="••••••••••"
                  />
                  <FieldInput
                    label={tInput('confirm-password')}
                    name="confirm_password"
                    error={errors.confirm_password?.message as string}
                    register={register}
                    rules={{
                      required: {
                        value: true,
                        message: tValidates('password-required'),
                      },
                      minLength: {
                        value: 8,
                        message: tValidates('password-eight'),
                      },
                      validate: (value) => {
                        const { password } = getValues();
                        if (password !== value)
                          return tValidates('passwords-match');
                      },
                      pattern: {
                        value: regexPassword,
                        message: tValidates('password-requirements'),
                      },
                    }}
                    type="password"
                    id="confirmPassword"
                    isRequired={true}
                    placeholder="••••••••••"
                  />
                </div>
                <ButtonPrimary loading={isLoading}>{tClient('register-client')}</ButtonPrimary>
              </form>
              <small className="mt-2 text-center text-xs text-gray-800">
                 {tClient('already-have-account')}{' '}
                <Link
                  className="font-semibold text-primary transition-opacity hover:opacity-80"
                  href="loguearse"
                >
                   {tClient('sign-in')}
                </Link>
              </small>
              <small className="-my-2 text-xs text-gray-700">
                  {tClient('accept-terms')}{' '}
                <a href="#" className="text-primary transition-opacity hover:opacity-80">
                  {tClient('terms-and-conditions')}
                </a>
              </small>
              <div className="w-full text-center">
                <FieldError error={error} />
              </div>
              <button
                onClick={() => setIsStart(false)}
                type="button"
                className="cursor-pointer -mt-2 mb-1 flex w-fit items-center gap-2 font-medium transition-all hover:-translate-x-2 hover:opacity-80"
              >
                <LeftOutlined className="text-[14px]" />{tClient('return')}
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
              <span className="text-xl font-bold">{tClient('activation')}</span>
              <span className="text-base font-light">{tClient('check')}</span>
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
