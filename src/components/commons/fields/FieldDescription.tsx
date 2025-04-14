'use client';

import type { RegisterOptions, UseFormRegister } from 'react-hook-form';

import { montserrat } from '@/fonts';
import FieldError from './FieldError';

type AttributeProps = React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

type Props = {
  classAditional?: string;
  label: string;
  id: string;
  name: string;
  height?: string;
  register?: UseFormRegister<any>;
  error?: string;
  isRequired?: boolean;
  rules?: RegisterOptions;
} & AttributeProps;

const FieldDescription = ({
  classAditional,
  label,
  id,
  isRequired,
  height = 'h-48',
  error,
  register,
  rules,
  name,
  ...props
}: Props) => {
  return (
    <div
      className={`${classAditional} flex w-full relative flex-col items-center justify-center`}
    >
      <label
        className={`${montserrat.className} z-10 font-semibold capitalize absolute left-4 top-2 text-xs`}
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative w-full">
        <textarea
          {...(register && register(name as string, rules))}
          {...props}
          name={name}
          id={id}
          className={`${height} rounded-[19px] pl-4 focus:outline-none border-black border-1 font-light bg-[#F3F4F6] py-6 px-2 w-full text-black resize-none pb-3 px-1`}
        />
      </div>
      <FieldError error={error} />
    </div>
  );
};

export default FieldDescription;
