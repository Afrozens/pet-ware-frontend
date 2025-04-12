'use client';

import { LoadingOutlined } from '@ant-design/icons';
import React, { PropsWithChildren } from 'react';

type typeProps = {} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

interface Props extends PropsWithChildren, typeProps {
  withIcon?: boolean;
  loading?: boolean;
  color?: string;
  small?: boolean;
  disabled?: boolean;
}

const ButtonPrimary = ({
  children,
  withIcon = true,
  loading,
  color,
  disabled,
  small = true,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={`disabled:bg-gray-400 hover:translate-y-1 disabled:text-white ${color ?? 'bg-warning-pressed text-white'} disabled:cursor-not-allowed disabled:opacity-90  shadow-md hover:opacity-80 transition-all focus:scale-90 cursor-pointer hover:scale-105 font-medium 2xl:text-lg px-6 py-3 gap-4 flex rounded-3xl justify-center items-center ${small ? 'w-fit' : 'w-full text-xl h-16'} ${loading ? 'w-48 h-10' : ''}`}
    >
      <span>
        {loading ? <LoadingOutlined className="text-2xl text-white" /> : children}
      </span>
      {withIcon && !loading ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#fff"
          className="-mr-2 size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      ) : null}
    </button>
  );
};

export default ButtonPrimary;
