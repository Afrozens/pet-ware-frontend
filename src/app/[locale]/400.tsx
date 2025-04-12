import Link from 'next/link';

import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';
import { montserrat } from '@/fonts';

export default function Custom404() {
  return (
    <section className="bg-white h-full min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mt-10">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-01">
            404
          </h1>
          <p
            className={`mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ${montserrat.className}`}
          >
            Something's missing.
          </p>
          <p className={`mb-4 text-lg font-light text-gray-500 ${montserrat.className}`}>
            Sorry, we can't find that page. You'll find lots to explore on the home
            page.{' '}
          </p>
          <Link href={'/'} className="w-fit block mx-auto">
            <ButtonPrimary type="button">Back to Homepage</ButtonPrimary>
          </Link>
        </div>
      </div>
    </section>
  );
}
