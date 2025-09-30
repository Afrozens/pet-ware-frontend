'use client';

import { RefObject } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import Carousel from 'react-multi-carousel';

interface Props {
  carouselRef: RefObject<Carousel | null>;
  isCenter?: boolean;
  isBlack?: boolean;
}

type typeProps = {} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  Props;

const ButtonLeft = ({ isBlack, isCenter = false, carouselRef, ...props }: typeProps) => {
  return (
    <button
      {...props}
      onClick={() => carouselRef?.current?.previous(1)}
      type="button"
      className={`${isBlack ? 'border-black text-black' : 'text-white border-white'} z-50 absolute ${isCenter ? 'top-1/2' : 'top-[35%]'} -translate-y-1/2 left-2 border-[5px] flex justify-center items-center w-10 h-10 p-5 rounded-full`}
    >
      <ArrowLeftOutlined className="text-2xl" />
    </button>
  );
};

export default ButtonLeft;
