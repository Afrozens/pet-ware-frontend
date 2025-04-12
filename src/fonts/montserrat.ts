import localFont from 'next/font/local';

const nexa = localFont({
  src: [
    {
      path: '../../public/fonts/montserrat/Montserrat-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/montserrat/Montserrat-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/montserrat/Montserrat-Bold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
});

export default nexa;
