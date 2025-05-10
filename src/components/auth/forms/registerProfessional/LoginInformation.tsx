'use client';

import FieldInput from '@/components/commons/fields/FieldInput';
import { montserrat } from '@/fonts';
import { useFormContext } from 'react-hook-form';

const LoginInformation = () => {
  const {} = useFormContext();
  return (
    <div className="flex flex-col gap-5 justify-start items-start w-full p-4">
      <p className={`${montserrat.className} -mt-5 text-gray-800 font-light`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, impedit.
      </p>
      <div className="container-inputs w-full flex-col">
        <FieldInput
          classAditional="w-full"
          label={'password'}
          type="password"
          name="password"
          id="password"
          isRequired
          placeholder="••••••••••"
        />
        <FieldInput
          classAditional="w-full"
          label={'confirm-password'}
          name="confirm_password"
          type="password"
          id="confirmPassword"
          isRequired
          placeholder="••••••••••"
        />
      </div>
    </div>
  );
};

export default LoginInformation;
