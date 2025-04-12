'use client';

import { UserOutlined } from '@ant-design/icons';
import type { RegisterOptions, UseFormRegister } from 'react-hook-form';

import FieldError from './FieldError';

type AttributeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = {
  children: React.ReactNode;
  label: string;
  name: string;
  withDefaultIcon?: boolean;
  register?: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
  isSelect?: boolean;
} & AttributeProps;

const FieldSelectTab = ({
  children,
  label,
  name,
  withDefaultIcon,
  register,
  error,
  rules,
  isSelect,
  ...props
}: Props) => {
  return (
    <label
      htmlFor={label}
      className={`${
        isSelect
          ? 'border-secondary bg-gray-100 text-gray-600'
          : 'border-gray-300 bg-white text-gray-800'
      } mb-3  flex h-40 w-56 cursor-pointer items-center justify-center rounded-md border px-4 py-2 shadow-sm transition-all hover:border-secondary hover:bg-gray-100`}
    >
      <div className="flex flex-col items-center gap-2">
        {withDefaultIcon && <UserOutlined className="text-xl" />}
        {children}
      </div>
      <input
        type="radio"
        className="hidden h-0 w-0"
        id={label}
        {...(register && register(name as string, rules))}
        {...props}
        name={name}
      />
      <FieldError error={error} />
    </label>
  );
};

export default FieldSelectTab;
