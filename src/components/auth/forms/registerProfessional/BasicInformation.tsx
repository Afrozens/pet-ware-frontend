'use client';

import { Controller, useFormContext } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';
import FieldDescription from '@/components/commons/fields/FieldDescription';
import FieldInput from '@/components/commons/fields/FieldInput';
import FieldSelect from '@/components/commons/fields/FieldSelect';
import { montserrat } from '@/fonts';
import { optionType } from '@/stub/optionStub';
import { SignUpProfessional } from '@/models/auth';

interface Value extends Pick<SignUpProfessional, 'first_name' | 'last_name' | 'type_document' | 'document' | 'description'> {}

interface Props {
  handleNext: () => void;
}

const BasicInformation = ({ handleNext }: Props) => {
  const t = useTranslations('components.register-professional');
  const tInput = useTranslations('input');
  const tv = useTranslations('validates');
  
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext<Value>();

  const [firstName, lastName, docType, document, description] = watch([
    'first_name',
    'last_name',
    'type_document',
    'document',
    'description',
  ]);

  const isFormComplete =
    firstName &&
    lastName &&
    docType &&
    document &&
    description &&
    description.length >= 20 &&
    description.length <= 500 &&
    !errors.first_name &&
    !errors.last_name &&
    !errors.type_document &&
    !errors.document &&
    !errors.description;

  return (
    <div className="flex flex-col gap-5 justify-start items-start w-full p-4">
      <p className={`${montserrat.className} -mt-5 text-gray-800 font-light`}>
        {t('first-step.subtitle')}
      </p>

      <div className="container-inputs">
        <FieldInput
          rules={{
            required: {
              value: true,
              message: tv('required'),
            },
            minLength: {
              value: 2,
              message: tv('min-length', { value: 2 }),
            },
            maxLength: {
              value: 50,
              message: tv('max-length', { value: 50 }),
            },
            pattern: {
              value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
              message: tv('letters-only'),
            },
          }}
          classAditional="w-full"
          label={tInput('first-name')}
          id="first_name"
          error={errors.first_name?.message}
          register={register}
          name="first_name"
          placeholder="Rafael"
          isRequired
        />

        <FieldInput
          rules={{
            required: {
              value: true,
              message: tv('required'),
            },
            minLength: {
              value: 2,
              message: tv('min-length', { value: 2 }),
            },
            maxLength: {
              value: 50,
              message: tv('max-length', { value: 50 }),
            },
            pattern: {
              value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
              message: tv('letters-only'),
            },
          }}
          classAditional="w-full"
          error={errors.last_name?.message}
          label={tInput('last-name')}
          register={register}
          id="last_name"
          name="last_name"
          placeholder="Chacon"
          isRequired
        />
      </div>

      <div className="container-inputs w-full">
        <div className="md:grid w-full flex flex-col md:grid-cols-5 items-center gap-1">
          <Controller
            name="type_document"
            control={control}
            rules={{
              required: tv('required'),
            }}
            render={({ field, formState: { errors } }) => (
              <FieldSelect
                options={optionType}
                classAditional="col-span-2"
                field={field}
                label={tInput('type-document')}
                placeholder="V"
                error={errors.type_document?.message}
                id="type_document"
                name="type_document"
                isRequired
                defaultValue={
                  optionType.filter((option) => option.value === field.value)[0]
                }
                isMultiple={false}
              />
            )}
          />

          <FieldInput
            rules={{
              required: {
                value: true,
                message: tv('required'),
              },
              min: {
                value: 1,
                message: tv('positive-number'),
              },
              max: {
                value: 9999999999,
                message: tv('document-too-long'),
              },
            }}
            error={errors.document?.message}
            classAditional="col-start-3 col-end-6"
            label={tInput('document')}
            register={register}
            type="number"
            placeholder="10122012334"
            name="document"
            id="document"
            isRequired
          />
        </div>
      </div>

      <FieldDescription
        rules={{
          required: {
            value: true,
            message: tv('required'),
          },
          minLength: {
            value: 20,
            message: tv('description-length'),
          },
          maxLength: {
            value: 500,
            message: tv('description-length'),
          },
        }}
        register={register}
        error={errors.description?.message}
        label={tInput('description-professional')}
        id="description"
        name="description"
      />

      <div className="flex w-full justify-end">
        <ButtonPrimary type="button" onClick={handleNext} disabled={!isFormComplete}>
          {t('next')}
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default BasicInformation;