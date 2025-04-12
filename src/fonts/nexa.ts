import localFont from 'next/font/local';

const nexa = localFont({
  src: [
    {
      path: '../../public/fonts/nexa/Nexa_light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/nexa/Nexa_regular.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/nexa/Nexa_bold.otf',
      weight: '800',
      style: 'normal',
    },
  ],
});

export default nexa;
