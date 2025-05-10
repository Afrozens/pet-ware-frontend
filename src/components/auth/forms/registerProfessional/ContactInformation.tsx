'use client';

import { Controller, useFormContext } from 'react-hook-form';

import { montserrat } from '@/fonts';
import FieldAutoComplete from '@/components/commons/fields/FieldAutoComplete';
import FieldInput from '@/components/commons/fields/FieldInput';
import FieldPhone from '@/components/commons/fields/FieldPhone';
import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';

interface Value {
    email: string;
    phone_number: string;
    address: string;
}

interface Props {
  handlePrev: () => void
  handleNext: () => void
}

const ContactInformation = ({ handleNext, handlePrev }: Props) => {
    const { setValue, register, watch, control, formState: { errors } } = useFormContext<Value>()

    const [address, email, phone_number] = watch([
        'address',
        'email',
        'phone_number'
    ]);
    
    const isFormComplete = 
        address && 
        email && 
        phone_number && 
        !errors.address &&
        !errors.email &&
        !errors.phone_number

  return (
    <div className="flex flex-col gap-5 justify-start items-start w-full p-4">
                <p className={`${montserrat.className} -mt-5 text-gray-800 font-light`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, impedit.
                </p>
                     <FieldInput
                        register={register}
                        classAditional="w-full"
                        label={'email'}
                        type="email"
                        id="email"
                        error={errors.email?.message as string}
                        name="email"
                        isRequired
                        placeholder="Correo@example.com"
                    />
                    <Controller
                        name="phone_number"
                        control={control}
                        render={({ field }) => (
                        <FieldPhone
                            isRequired
                            error={errors.phone_number?.message as string}
                            label={'phone number'}
                            field={field}
                            id="phone_number"
                            name="phone_number"
                        />
                        )}
                    />
                    <FieldAutoComplete
                        setValue={setValue}
                        register={register}
                        classAditional="w-full"
                        error={errors.address?.message as string}
                        label={'address'}
                      id="address"
                      name="address"
                      placeholder="5055 Wilshire Blvd. Suite 860"
                      isRequired
                    />

                     <div className="flex w-full justify-between">
                        <ButtonPrimary
                              type="button"
                            onClick={handlePrev}
>
                              Volver
                            </ButtonPrimary>
                            <ButtonPrimary
                            onClick={handleNext}
                              type="button"
                              disabled={!isFormComplete}
                            >
                              Siguiente
                            </ButtonPrimary>
                          </div>
                </div>
  )
}

export default ContactInformation
