import { useRef } from 'react';
import Carousel from 'react-multi-carousel';

const useCarousel = () => {
  const carouselRef = useRef<Carousel>(null);

  const defaultCarouselProps = {
    autoPlay: true,
    swipeable: true,
    infinite: true,
    arrows: true,
    showDots: false,
    autoPlaySpeed: 4000,
    keyBoardControl: false,
  };

  return {
    carouselRef,
    defaultCarouselProps,
  };
};

export default useCarousel;
