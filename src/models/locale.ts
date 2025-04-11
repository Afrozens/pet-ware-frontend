export const locales = ['en', 'es'] as const;
export type Locale = (typeof locales)[number];
export type typeCoins = 'dollar' | 'peso' | 'euro' | 'loading';
export const defaultLocale = 'es'
