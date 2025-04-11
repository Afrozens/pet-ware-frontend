import createMiddleware from 'next-intl/middleware';
import { NextResponse, type NextRequest } from 'next/server';
import { locales, type Locale } from '@/models/locale';
import { AuthenticatedCookies } from './utils/auth';

const nextIntlMiddleware = createMiddleware({
  locales,
  defaultLocale: 'es' satisfies Locale,
  localePrefix: 'never',
});

export function middleware(req: NextRequest) {
  const token = req.cookies.get(AuthenticatedCookies.ACCESS)?.value;
  const parts = token && token.split('.');
  const publicRoutes = [
    '/login',
    '/register',
    '/recovery-password',
    '/reset-password',
    '/',
  ];
  const isPublicRoute = publicRoutes.some((route) => req.nextUrl.pathname === route);

  if (req.nextUrl.pathname === '/login' && parts?.length === 3) {
    return NextResponse.redirect(new URL('/', req.url));
  }
  if (!isPublicRoute && parts?.length !== 3) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return nextIntlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/'],
};
