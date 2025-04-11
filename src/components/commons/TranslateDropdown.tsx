'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';

import { Locale } from '@/models/locale';

const TranslateDropdown = () => {
  const t = useTranslations('components.translate-dropdown');
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale): void => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  const items: MenuProps['items'] = [
    {
      label: (
        <span
          onClick={() => handleLocaleChange('es')}
          className="flex gap-2 text-lg font-light"
        >
          <Image src="/icons/spain-flag.svg" alt="flag of spain" width={32} height={32} />
          {t('spanish')} (ES)
        </span>
      ),
      key: '0',
    },
    {
      label: (
        <span
          onClick={() => handleLocaleChange('en')}
          className="flex gap-2 text-lg font-light"
        >
          <Image
            src="/icons/english-flag.svg"
            alt="flag of spain"
            width={32}
            height={32}
          />
          {t('english')} (US)
        </span>
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
      <button type="button" className="w-fit px-2 btn-ghost text-white">
        <GlobalOutlined
          className={`text-lg text-white`}
        />
      </button>
    </Dropdown>
  );
};

export default TranslateDropdown;
