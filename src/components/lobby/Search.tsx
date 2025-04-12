'use client';

import { useState } from 'react';
import { DownOutlined, LoadingOutlined, SearchOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps } from 'antd';
import { useTranslations } from 'next-intl';
import FieldSelect from '../commons/fields/FieldSelect';
import { optionLocation, optionPet, optionService } from '@/stub/optionStub';


const Search = () => {
  const t = useTranslations('components.search-general');
  const [visibleOne, setVisibleOne] = useState(false);
  const [visibleSecond, setVisibleSecond] = useState(false);
  const [visibleThird, setVisibleThird] = useState(false);

  const itemsOne: MenuProps['items'] = [
    {
      label: (
        <div className="w-full bg-transparent h-fit rounded-xl">
            <FieldSelect
              options={optionService}
              label={t('one.label')}
              id={t('one.label')}
              isMultiple={false}
              name={t('one.label')}
            />
        </div>
      ),
      key: '0',
    },
  ];

  const itemsSecond: MenuProps['items'] = [
    {
      label: (
        <div className="w-full bg-transparent h-fit rounded-xl">
            <FieldSelect
              options={optionLocation}
              label={t('second.label')}
              id={t('second.label')}
              isMultiple={false}
              name={t('second.label')}
            />
        </div>
      ),
      key: '0',
    },
  ];

  const itemsThird: MenuProps['items'] = [
    {
      label: (
        <div className="w-full bg-transparent h-fit rounded-xl">
            <FieldSelect
              options={optionPet}
              label={t('third.label')}
              id={t('third.label')}
              isMultiple={false}
              name={t('third.label')}
            />
        </div>
      ),
      key: '0',
    },
  ];

  const handleDropdownClick = (
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setVisible(true);
  };

  return (
    <div className="relative animate-fade h-auto xl:h-20 w-full rounded-[58px] bg-white flex-col xl:flex-row flex justify-between items-center p-4 xl:p-0">
      <Dropdown
        menu={{ items: itemsOne }}
        trigger={['click']}
        placement="bottomCenter"
        visible={visibleOne}
        onVisibleChange={(visible) => setVisibleOne(visible)}
      >
        <div
          className={`${visibleOne ? 'bg-primary-bg' : ''} container-field w-full mb-4 xl:mb-0`}
          onClick={() => handleDropdownClick(setVisibleOne)}
        >
          <span className="text-lg mt-2 md:text-xl font-bold capitalize">
            {t('one.title')}
          </span>
          <span className="text-sm md:text-base flex gap-2 items-center -mt-2 font-light">
            {t('one.label')} <DownOutlined className='text-lg' />
          </span>
        </div>
      </Dropdown>

      <Dropdown
        menu={{ items: itemsSecond }}
        trigger={['click']}
        placement="bottomCenter"
        visible={visibleSecond}
        onVisibleChange={(visible) => setVisibleSecond(visible)}
      >
        <div
          className={`${visibleSecond ? 'bg-primary-bg' : ''} container-field w-full mb-4 xl:mb-0`}
          onClick={() => handleDropdownClick(setVisibleSecond)}
        >
          <span className="text-lg mt-2 md:text-xl font-bold capitalize">
            {t('second.title')}
          </span>
          <span className="text-sm md:text-base flex gap-2 items-center -mt-2 font-light">
            {t('second.label')} <DownOutlined className='text-lg' />
          </span>
        </div>
      </Dropdown>

      <Dropdown
        menu={{ items: itemsThird }}
        trigger={['click']}
        placement="bottomCenter"
        visible={visibleThird}
        onVisibleChange={(visible) => setVisibleThird(visible)}
      >
        <div
          className={`${visibleThird ? 'bg-primary-bg' : ''} container-field w-full mb-4 mr-14 xl:mb-0`}
          onClick={() => handleDropdownClick(setVisibleThird)}
        >
          <span className="text-lg mt-2 md:text-xl font-bold capitalize">
            {t('third.title')}
          </span>
          <span className="text-sm md:text-base flex gap-2 items-center -mt-2 font-light">
           {t('third.label')} <DownOutlined className='text-lg' />
          </span>
        </div>
      </Dropdown>

      <button type='button' className="cursor-pointer bg-success-pressed text-white hover:opacity-80 flex justify-center items-center rounded-full p-3 w-16 h-16 xl:absolute xl:top-1/2 xl:-translate-y-1/2 xl:-right-4">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#fff"
            className="size-14"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
            </svg>
      </button>
    </div>
  );
};

export default Search;
