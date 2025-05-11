'use client';

import { useFormContext } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import FieldInput from '@/components/commons/fields/FieldInput';
import { montserrat } from '@/fonts';
import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';
import { SignUpProfessional } from '@/models/auth';

interface Value extends Pick<SignUpProfessional, 'confirm_password' | 'password'> {}

interface Props {
  handlePrev: () => void;
  isLoading: boolean
}

const LoginInformation = ({ handlePrev, isLoading }: Props) => {
  const t = useTranslations('components.register-professional');
  const tInput = useTranslations('input');
  const tv = useTranslations('validates');
  
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<Value>();

  const [password, confirmPassword] = watch(['password', 'confirm_password']);

  const isFormComplete = 
    password && 
    confirmPassword && 
    password === confirmPassword &&
    !errors.password && 
    !errors.confirm_password;

  return (
    <div className="flex flex-col gap-5 justify-start items-start w-full p-4">
      <p className={`${montserrat.className} -mt-5 text-gray-800 font-light`}>
        {t('third-step.subtitle')}
      </p>

      <div className="container-inputs w-full flex-col">
        <FieldInput
          register={register}
          rules={{
            required: tv('required'),
            minLength: {
              value: 8,
              message: tv('password-requirements')
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: tv('password-requirements')
            }
          }}
          classAditional="w-full"
          label={tInput('password')}
          type="password"
          name="password"
          id="password"
          error={errors.password?.message as string}
          isRequired
          placeholder="••••••••••"
        />

        <FieldInput
          register={register}
          rules={{
            required: tv('required'),
            validate: (value) => 
              value === watch('password') || tv('passwords-match')
          }}
          classAditional="w-full"
          label={tInput('confirm-password')}
          name="confirm_password"
          type="password"
          id="confirmPassword"
          error={errors.confirm_password?.message as string}
          isRequired
          placeholder="••••••••••"
        />
      </div>

      <div className="flex w-full justify-between">
        <ButtonPrimary 
        type="button"
        loading={isLoading} 
        onClick={handlePrev}>
          {t('back')}
        </ButtonPrimary>
        <ButtonPrimary 
          type="submit"
          loading={isLoading}
          disabled={!isFormComplete}
        >
          {t('finish')}
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default LoginInformation;