'use client';

import { Dropdown, MenuProps } from 'antd';
import { LoadingOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { montserrat } from '@/fonts';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { User } from '@/models/user';
// import useLogout from '@/hooks/useLogout';
// import Loader from './Loader';
import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';
import useOpen from '@/hooks/useOpen';
import AvatarGenerate from './AvatarGenerate';

interface Props {
  user?: User;
}

const MenuAuth = ({ user }: Props) => {
//   const { handleLogout, isLoading } = useLogout();
  const [isMobile, setIsMobile] = useState(false);
  const { onClose, isOpen, onOpen } = useOpen();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

//   if (false) return <Loader />;

  const baseItems = [
    {
      label: (
        <Link href={`/`} className="text-lg font-semibold lg:text-sm lg:font-light">
          Home
        </Link>
      ),
      key: '1',
    },
    {
      label: (
        <Link href={`/dashboard/profile/${user?.id}`} className="text-lg font-semibold lg:text-sm lg:font-light">
          Profile
        </Link>
      ),
      key: '0',
    },
    {
      label: (
        <button
        //   onClick={handleLogout}
          className="hover:opacity-80 transition-opacity text-lg font-semibold lg:text-sm lg:font-light"
          type="button"
        >
          {/* {isLoading ? <LoadingOutlined className="text-2xl" /> : t('header.logout')} */}
          Logout
        </button>
      ),
      key: '2',
    },
    {
      label: (
        <Link href={`/who-we`} className="text-lg font-semibold lg:text-sm lg:font-light">
            Who me
        </Link>
      ),
      key: '5',
    },
    {
      label: (
        <Link href={`/contact-we`} className="text-lg font-semibold lg:text-sm lg:font-light">
          Contact me
        </Link>
      ),
      key: '6',
    },
  ];
  
  const mobileItems: MenuProps['items'] = baseItems.map((item) => ({
    label: (
      <span onClick={() => setIsVisible(false)} className={`${montserrat.className} text-lg font-semibold`}>
        {item.label}
      </span>
    ),
    key: item.key,
  }));

  const desktopItems: MenuProps['items'] = baseItems.slice(0, 3); // Solo mostrar account, home y logout en desktop

  return (
    <div className={`w-fit flex gap-2 items-center ${montserrat.className}`}>
      {/* {isMobile ? (
        <>
          <button
            onClick={onOpen}
            type="button"
            className="w-fit h-fit lg:hidden cursor-pointer"
          >
            <Image src={'/icons/menu.svg'} alt="menu hamburguesa" width={24} height={24} />
          </button>

          {isOpen && (
            <div
              className={`fixed inset-0 z-[99999] w-full min-h-screen bg-black transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-primary-01 hover:opacity-80 transition-opacity duration-200"
              >
                <CloseOutlined style={{ fontSize: '24px' }} />
              </button>

              <div className="flex flex-col items-end justify-center h-full pr-8 space-y-6 text-primary-01">
                {mobileItems.map((item) => (
                  <div
                    key={item?.key}
                    className={`transition-transform duration-300 transform hover:translate-x-1 ${item?.key === '2' ? 'w-full text-end max-w-sm' : ''}`}
                    style={{ transitionDelay: `${Number(item?.key) * 100}ms` }}
                  >
                    {item?.label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      ) : ( */}
        <Dropdown menu={{ items: desktopItems }} className='cursor-pointer' trigger={['click']} placement="bottomRight">
          <button
            type="button"
            className="px-2 border border-gray-300 bg-gray-50 rounded-full transition-all hover:shadow-lg"
          >
            <div className="flex items-center gap-4 px-2 py-1">
              {false ? (
                <LoadingOutlined className="text-3xl" />
              ) : (
                <>
                  <MenuOutlined className="font-black" />
                  <AvatarGenerate
                    src={null}
                    name={'pepe'}
                    size={40}
                    userId={'512412'}
                  />
                </>
              )}
            </div>
          </button>
        </Dropdown>
      {/* )} */}
    </div>
  );
};

export default MenuAuth;