'server-only';

import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { type AbstractIntlMessages } from 'next-intl';

import { locales, type Locale, defaultLocale } from '@/models/locale'; // Add defaultLocale to your imports

const messageImports = {
  en: () => import('./messages/en.json'),
  es: () => import('./messages/es.json'),
} as const satisfies Record<Locale, () => Promise<{ default: AbstractIntlMessages }>>;

export function isValidLocale(locale: unknown): locale is Locale {
  return locales.some((l) => l === locale);
}

export default getRequestConfig(async (params) => {
  // Add fallback to default locale if params.locale is missing
  const locale = params.locale || defaultLocale;
  const baseLocale = new Intl.Locale(locale).baseName;
  
  if (!isValidLocale(baseLocale)) notFound();

  const messages = (await messageImports[baseLocale]()).default;
  return {
    locale: baseLocale,
    messages,
  };
});