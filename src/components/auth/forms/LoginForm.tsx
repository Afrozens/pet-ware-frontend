'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import FieldInput from '@/components/commons/fields/FieldInput';
import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';
import FieldError from '@/components/commons//fields/FieldError';
import useSubmit from '@/hooks/useSubmit';
import AuthService from '@/services/AuthService';
import { SignIn } from '@/models/auth';
import { regexPassword } from '@/utils/regex';

const LoginForm = () => {
  const authService = new AuthService();
  const t = useTranslations('');
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignIn>();
  const { error, setError, isLoading, doSubmit } = useSubmit<SignIn, void>(
    t('validates.login-success'),
  );

  const onSubmit: SubmitHandler<SignIn> = async (data) => {
    try {
      if (!data) return setError(t('validates.empty'));
      await doSubmit({ data, callback: authService.loginAuth });
      router.push('/');
      router.refresh();
    } catch (error) {
      // empty
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-initial">
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
      <FieldInput
        label={t('input.password')}
        type="password"
        id="password"
        name="password"
        error={errors.password?.message as string}
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
      <Link href={'/recovery'} className="transition-opacity ml-auto w-fit hover:opacity-80">
        <small>{t('components.auth.forgot.recovery')}</small>
      </Link>
      <div className="w-full flex justify-center items-center">
        <ButtonPrimary type="submit" loading={isLoading}>
          {t('components.auth.login')}
        </ButtonPrimary>
      </div>
      <div className="w-full text-center">
        <FieldError error={error ?? ''} />
      </div>
    </form>
  );
};

export default LoginForm;