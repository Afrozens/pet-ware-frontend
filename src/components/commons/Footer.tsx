'use client';

import { InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Footer = () => {
  const t = useTranslations('components.footer');

  return (
    <footer className="bg-primary-main text-white">
      <div className="mx-auto w-full px-6 md:px-44 p-4 py-6 lg:py-8">
        {/* Contenedor principal reorganizado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
           {/* LOGO movido a la derecha */}
           <div className='w-full md:w-auto flex justify-end'>
            <span className='text-6xl'>LOGO</span>
          </div>
          {/* Sección de contacto y términos (ahora a la izquierda) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 w-full md:w-full max-w-5xl">
            <div>
              <h2 className="mb-4 md:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t('contact')}
              </h2>
              <ul className=" font-medium">
                <li className="mb-3 md:mb-4">
                  <span className="hover:underline">+58 042033245</span>
                </li>
                <li className="mb-3 md:mb-4">
                  <span className="hover:underline">support@patamia.app</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t('explore')}
              </h2>
              <ul className=" font-medium">
                <li className="mb-3 md:mb-4">
                  <span className="hover:underline">Servicios</span>
                </li>
                <li className="mb-3 md:mb-4">
                  <span className="hover:underline">Profesionales</span>
                </li>
                <li className="mb-3 md:mb-4">
                  <span className="hover:underline">Como funciona</span>
                </li>
                <li className="mb-3 md:mb-4">
                  <span className="hover:underline">Blog</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 md:mb-6 text-sm font-semibold uppercase">
                {t('follow')}
              </h2>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.instagram.com/patamia.official/"
                  target="_blank"
                  className="footer-link flex items-center gap-2"
                >
                  <InstagramOutlined className="text-lg md:text-xl" />
                  @patamia.official
                </a>
                <a
                  href="https://www.linkedin.com/company/patamia"
                  target="_blank"
                  className="footer-link flex items-center gap-2"
                >
                  <LinkedinOutlined className="text-lg md:text-xl" />
                  @patamia
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <hr className="my-6 border-white border-1 sm:mx-auto lg:my-8" />

        {/* Sección de derechos reservados y logotipo */}
        <div className="sm:flex sm:gap-5 sm:items-center sm:justify-between">
          <div className='w-full items-center flex gap-10'>
            <a href="#" className="hover:underline">
              {t('data')}
            </a>
            <a href="#" className="hover:underline">
              {t('conditions')}
            </a>
            <a href="#" className="hover:underline">
              Legal
            </a>
          </div>
          <div className="flex mt-4 whitespace-nowrap sm:justify-center sm:mt-0">
            <span className="text-sm sm:text-center">
              @2025{' '}
              <a href="#" className="hover:underline">
                Pata Mia™
              </a>
              . {t('reserved')}.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;