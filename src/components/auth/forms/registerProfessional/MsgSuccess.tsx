'use client';

import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import { useTranslations } from 'next-intl';

const { Title, Paragraph } = Typography;

const MsgSuccess = () => {
  const t = useTranslations('validates.success');
  
  return (
    <div className='w-full flex justify-center items-center flex-col gap-10'>
      <Card className='max-w-2xl w-full text-center'>
        <div className='flex flex-col items-center gap-6'>
          <div className='bg-green-100 p-6 rounded-full'>
            <CheckOutlined className='text-green-500 text-4xl' />
          </div>
          <h3 className="title-information text-center !mb-2">
            {t('register-professional')}
          </h3>
          <p className='paragraph-information'>
            {t('activation-required')}
          </p>
          <p className='paragraph-information'>
            {t('check-email')}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default MsgSuccess;