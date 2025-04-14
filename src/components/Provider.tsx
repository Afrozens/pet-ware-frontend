'use client';

import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConfigProvider } from 'antd';
import { Toaster } from 'sonner';
import esEs from 'antd/locale/es_ES';
import enEn from 'antd/locale/en_US';
import { Providers } from '@/redux/provider';
import { Locale } from '@/models/locale';
import { APIProvider } from '@vis.gl/react-google-maps';

interface Props extends PropsWithChildren {
  locale: Locale;
}

const Provider = ({ children, locale }: Props) => {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;
  const queryClient = new QueryClient();
  return (
    <Providers>
      <Toaster richColors />
      <ConfigProvider
        theme={{
          token: {
            colorBorder: '#000',
            colorPrimary: "#4E3473"
          },
          components: {
            Rate: {
              starColor: '#25A54E',
              starSize: 30,
            },
          },
        }}
        locale={locale === 'en' ? enEn : esEs}
      >
        <APIProvider apiKey={API_KEY}>
          <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </APIProvider>
      </ConfigProvider>
    </Providers>
  );
};

export default Provider;
