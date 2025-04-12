import { montserrat } from '@/fonts';

export default function Custom500() {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-02">
            500
          </h1>
          <p
            className={`mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ${montserrat.className}`}
          >
            Internal Server Error.
          </p>
          <p className={`mb-4 text-lg font-light text-gray-500 ${montserrat.className}`}>
            We are already working to solve the problem.
          </p>
        </div>
      </div>
    </section>
  );
}
