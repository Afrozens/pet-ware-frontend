import { useTranslations } from 'next-intl';
import { montserrat } from '@/fonts';
import AuthLayout from '@/layout/AuthLayout';
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import FlipBox from '@/components/animate/FlipBox';
import { ActivateUser } from '@/models/auth';
import AuthService from '@/services/AuthService';
import Custom404 from '../../400';
import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';

interface Context {
  params: {};
  searchParams: ActivateUser
}

const VerifiedPage = async ({ searchParams }: Context) => {
  const authService = new AuthService()
  const { token, email } = searchParams;
  let isVerified = true;
  let isError = false;

  const handleVerified = async () => {
    try {
      if (token && email) {
        // await authService.activateUser({ token, email })
        isVerified = true
        isError = false
      }
    } catch (error) {
      isError = true
      isVerified = false
      console.error(`error in account verified page: ${error}`)
    }
  }

  await handleVerified()

  if (!token && !email) return <Custom404 />

  return (
    <AuthLayout>
      <section className="w-full min-h-screen flex justify-center items-center bg-white">
        <div className="flex w-full flex-col items-center justify-center gap-0">

          <FlipBox
            front={<EnvelopeIcon className="w-8 h-8 text-gray-600" />}
            back={isError ? <EnvelopeIcon className="w-8 h-8 text-red-600" /> : <CheckCircleIcon className="w-8 h-8 text-green-600" />}
            duration={0.8}
            delay={0.2}
          />

          {isError ? (
            <div className="mt-10 justify-center items-center flex w-full flex-col gap-4">
              <h1 className="form-title">Error</h1>
              <p
                className={`form-subtitle -mt-4 md:text-lg md:font-medium ${montserrat.className}`}
              >
                Ha ocurrido un error al verificar tu cuenta. Por favor, intenta nuevamente.
                <ButtonPrimary onClick={() => console.log('enviado')} className="mt-4">
                  Reenviar correo de verificación
                </ButtonPrimary>
              </p>
            </div>
          ): (
            <div className="mt-10 justify-center items-center flex w-full flex-col gap-4">
            <h1 className="form-title">Email verificado</h1>
            <p className={`form-subtitle -mt-4 md:text-lg md:font-medium ${montserrat.className}`}>
              Tu correo electrónico ha sido verificado correctamente.
            </p>
          </div>
          )}
        </div>
      </section>
    </AuthLayout>
  );
};

export default VerifiedPage;
