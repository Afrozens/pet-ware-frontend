'use client';

import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';
import FieldDescription from '@/components/commons/fields/FieldDescription';
import FieldInput from '@/components/commons/fields/FieldInput';
import FieldSelect from '@/components/commons/fields/FieldSelect';
import { montserrat } from '@/fonts';
import { optionType } from '@/stub/optionStub';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

interface Value {
  first_name: string;
  last_name: string;
  type_document: string;
  document: number;
  description: string;
}

const BasicInformation = () => {
  const { 
    control, 
    register, 
    watch,
    formState: { errors } 
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, impedit.
      </p>
      
      <div className="container-inputs">
        <FieldInput
          rules={{
            required: {
              value: true,
              message: 'El nombre es requerido',
            },
            minLength: {
              value: 2,
              message: 'Mínimo 2 caracteres',
            },
            maxLength: {
              value: 50,
              message: 'Máximo 50 caracteres',
            },
            pattern: {
              value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
              message: 'Solo se permiten letras',
            }
          }}
          classAditional="w-full"
          label={'Nombre del profesional'}
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
              message: 'El apellido es requerido',
            },
            minLength: {
              value: 2,
              message: 'Mínimo 2 caracteres',
            },
            maxLength: {
              value: 50,
              message: 'Máximo 50 caracteres',
            },
            pattern: {
              value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
              message: 'Solo se permiten letras',
            }
          }}
          classAditional="w-full"
          error={errors.last_name?.message}
          label={'Apellido del profesional'}
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
              required: 'El tipo de documento es requerido'
            }}
            render={({ field, formState: { errors } }) => (
              <FieldSelect
                options={optionType}
                classAditional="col-span-2"
                field={field}
                label={'Tipo de documento'}
                placeholder="NIT"
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
                message: 'El documento es requerido',
              },
              min: {
                value: 1,
                message: 'El documento debe ser positivo',
              },
              max: {
                value: 9999999999,
                message: 'Documento demasiado largo',
              }
            }}
            error={errors.document?.message}
            classAditional="col-start-3 col-end-6"
            label={'Documento'}
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
            message: 'La descripción es requerida',
          },
          minLength: {
            value: 20,
            message: 'Mínimo 20 caracteres',
          },
          maxLength: {
            value: 500,
            message: 'Máximo 500 caracteres',
          }
        }}
        register={register}
        error={errors.description?.message}
        label={"Experiencia como profesional"} 
        id="description" 
        name="description" 
      />
      
      <div className="flex w-full justify-end">
        <ButtonPrimary 
          type="button"
          disabled={!isFormComplete}
        >
          Siguiente
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default BasicInformation;