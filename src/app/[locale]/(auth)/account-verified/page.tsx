import { useTranslations } from 'next-intl';
import { montserrat } from '@/fonts';
import AuthLayout from '@/layout/AuthLayout';
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import FlipBox from '@/components/animate/FlipBox';

const VerifiedPage = () => {
  const t = useTranslations('components');
  return (
    <AuthLayout withAd={false}>
      <section className="w-full min-h-screen flex justify-center items-center bg-white">
        <div className="flex w-full flex-col items-center justify-center gap-0">

          <FlipBox
            front={<EnvelopeIcon className="w-8 h-8 text-gray-600" />}
            back={<CheckCircleIcon className="w-8 h-8 text-green-600" />}
            duration={0.8}
            delay={0.2}
          />

          <div className="mt-10 justify-center items-center flex w-full flex-col gap-4">
            <h1 className="form-title">Email verificado</h1>
            <p className={`form-subtitle -mt-4 md:text-lg md:font-medium ${montserrat.className}`}>
              Tu correo electrónico ha sido verificado correctamente.
            </p>
          </div>
        </div>
      </section>
    </AuthLayout>
  );
};

export default VerifiedPage;
