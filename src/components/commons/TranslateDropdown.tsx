'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

import { Locale } from '@/models/locale';

const TranslateDropdown = () => {
  const router = useRouter();
  const locale = useLocale();

  const handleLocaleChange = (newLocale: Locale): void => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <div
          onClick={() => handleLocaleChange('es')}
          className={`p-2 rounded-lg text-lg font-light ${locale === 'es' ? 'bg-gray-200' : ''}`}
        >
          <Image src="/icons/spain-flag.svg" alt="flag of spain" width={32} height={32} />
        </div>
      ),
      key: '0',
    },
    {
      label: (
        <div
          onClick={() => handleLocaleChange('en')}
          className={`p-2 rounded-lg text-lg font-light ${locale === 'en' ? 'bg-gray-200' : ''}`}
        >
          <Image
            src="/icons/english-flag.svg"
            alt="flag of spain"
            width={32}
            height={32}
          />
        </div>
      ),
      key: '1',
    },
  ];
  return (
    <Dropdown
      className="hidden md:flex"
      menu={{ items }}
      trigger={['click']}
      placement="bottomRight"
    >
      <button type="button" className={'w-fit px-2 btn-ghost hover:text-gray-500 text-white'}>
        <GlobalOutlined className={`text-lg text-white`} />
      </button>
    </Dropdown>
  );
};

export default TranslateDropdown;
