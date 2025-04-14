'use client';

import PhoneInput, { PhoneInputProps } from 'react-phone-input-2';
import type { ControllerRenderProps} from 'react-hook-form';
import { EditOutlined } from '@ant-design/icons';

import FieldError from './FieldError';
import { montserrat, nexa } from '@/fonts';

type AttributeProps = PhoneInputProps;

type Props = {
  label: string;
  isRequired?: boolean;
  id: string;
  name?: string;
  error?: string | undefined;
  field?: ControllerRenderProps<any, string>;
} & AttributeProps;

const FieldPhone = ({
  label,
  isRequired,
  id,
  error,
  name,
  field,
  ...props
}: Props) => {
  return (
    <div
      className={`${nexa.className} flex w-full justify-between relative items-center gap-10`}
    >
      <label
        className={`${montserrat.className} text-black z-10 font-semibold capitalize absolute left-12 top-3 text-xs -translate-y-1/2`}
        htmlFor={id}
      >
        {label}
      </label>
      <PhoneInput {...props} {...field} />
      <div className="rounded-full shadow-xl w-[36px] h-[36px] bg-white flex justify-center items-center absolute top-1/2 -translate-y-1/2 right-8">
        <EditOutlined />
      </div>
      <FieldError error={error} />
    </div>
  );
};

export default FieldPhone;
