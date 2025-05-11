'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import { montserrat } from '@/fonts';
import FieldAutoComplete from '@/components/commons/fields/FieldAutoComplete';
import FieldInput from '@/components/commons/fields/FieldInput';
import FieldPhone from '@/components/commons/fields/FieldPhone';
import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';
import { SignUpProfessional } from '@/models/auth';

interface Value extends Pick<SignUpProfessional, 'address' | 'phone_number' | 'email'> {}

interface Props {
  handlePrev: () => void;
  handleNext: () => void;
}

const ContactInformation = ({ handleNext, handlePrev }: Props) => {
  const t = useTranslations('components.register-professional');
  const tInput = useTranslations('input');
  const tv = useTranslations('validates');
  
  const {
    setValue,
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext<Value>();

  const [address, email, phone_number] = watch(['address', 'email', 'phone_number']);

  const isFormComplete =
    address &&
    email &&
    phone_number &&
    !errors.address &&
    !errors.email &&
    !errors.phone_number;

  return (
    <div className="flex flex-col gap-5 justify-start items-start w-full p-4">
      <p className={`${montserrat.className} -mt-5 text-gray-800 font-light`}>
        {t('second-step.subtitle')}
      </p>

      <FieldInput
        register={register}
        rules={{
          required: tv('required'),
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: tv('email-invalid')
          }
        }}
        classAditional="w-full"
        label={tInput('email')}
        type="email"
        id="email"
        error={errors.email?.message}
        name="email"
        isRequired
        placeholder="example@email.com"
      />

      <Controller
        name="phone_number"
        control={control}
        rules={{
          required: tv('required'),
          pattern: {
            value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/,
            message: tv('phone-invalid')
          }
        }}
        render={({ field }) => (
          <FieldPhone
            isRequired
            error={errors.phone_number?.message}
            label={tInput('phone-number')}
            field={field}
            id="phone_number"
            name="phone_number"
          />
        )}
      />

      <FieldAutoComplete
        setValue={setValue}
        register={register}
        rules={{
          required: tv('address-required')
        }}
        classAditional="w-full"
        error={errors.address?.message}
        label={tInput('address')}
        id="address"
        name="address"
        placeholder="5055 Wilshire Blvd. Suite 860"
        isRequired
      />

      <div className="flex w-full justify-between">
        <ButtonPrimary type="button" onClick={handlePrev}>
          {t('back')}
        </ButtonPrimary>
        <ButtonPrimary 
          onClick={handleNext} 
          type="button" 
          disabled={!isFormComplete}
        >
          {t('next')}
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default ContactInformation;