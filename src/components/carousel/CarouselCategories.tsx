'use client';

import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import ButtonRight from '../commons/buttons/ButtonRight';
import ButtonLeft from '../commons/buttons/ButtonLeft';
import { montserrat } from '@/fonts';
import useCarousel from '@/hooks/useCarousel';
import { createResponsiveConfig } from '@/utils/formated';
import { petServiceCategories } from '@/stub/optionStub';

const CarouselCategories = () => {
  const responsive = createResponsiveConfig([4, 5, 6]);
  const { carouselRef, defaultCarouselProps } = useCarousel();
  const router = useRouter();
  const t = useTranslations();

  return (
    <div className={'w-full h-36 lg:h-full lg:max-h-none'}>
        <Carousel
          ref={carouselRef}
          responsive={responsive}
          itemClass={`w-fit`}
          {...defaultCarouselProps}
          arrows={false}
        >
          {petServiceCategories.map((category, index) => (
            <div key={index} className="flex flex-col items-center gap-3 xl:gap-5">
              <button
                type="button"
                onClick={() => router.push(`/listings-all?service=${category.value}`)}
                className="relative hover:scale-95 transition-all hover:opacity-95 w-16 h-16 xl:w-18 xl:h-18 p-2 bg-white rounded-full shadow-lg flex justify-center items-center"
              >
                <category.icon className='text-2xl' />
              </button>
              <span
                className={`${montserrat.className} break-words max-w-none capitalize text-center text-gray-800 text-xs sm:text-sm xl:text-base font-light`}
              >
                {category.label}
              </span>
            </div>
          ))}
        </Carousel>
    </div>
  );
};

export default CarouselCategories;