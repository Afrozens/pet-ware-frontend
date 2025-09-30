'use client';

import { RefObject } from 'react';
import Carousel from 'react-multi-carousel';
import { ArrowRightOutlined } from '@ant-design/icons';

interface Props {
  carouselRef: RefObject<Carousel | null>;
  isBlack?: boolean;
  isCenter?: boolean;
}

type typeProps = {} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  Props;

const ButtonRight = ({ isBlack, isCenter = false, carouselRef, ...props }: typeProps) => {
  return (
    <button
      {...props}
      onClick={() => carouselRef?.current?.next(1)}
      type="button"
      className={`${isBlack ? 'border-black text-black' : 'text-white border-white'} z-50 absolute ${isCenter ? 'top-1/2' : 'top-[35%]'} -translate-y-1/2 right-2 border-[5px] flex justify-center items-center w-10 h-10 p-5 rounded-full`}
    >
      <ArrowRightOutlined className="text-2xl" />
    </button>
  );
};

export default ButtonRight;
