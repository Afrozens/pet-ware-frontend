import AuthLayout from '@/layout/AuthLayout';
import { montserrat } from '@/fonts';
// import { useTranslations } from 'next-intl';
import RecoveryPasswordForm from '@/components/auth/forms/RecoveryPasswordForm';

const RecoveryPage = () => {
    // const t = useTranslations('components.auth');
    return (
        <AuthLayout withAd={false}>
            <section className="w-full min-h-screen flex justify-center items-center bg-white">
                <div className="flex w-full flex-col items-center justify-center gap-0">
                    <div className="mt-10 justify-center items-center flex w-full flex-col gap-4">
                        <h1 className="form-title">Recuperar contraseña</h1>
                        <p
                            className={`form-subtitle -mt-4 md:text-lg md:font-medium ${montserrat.className}`}
                        >
                            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                        </p>
                        <RecoveryPasswordForm />
                    </div>
                </div>
            </section>
        </AuthLayout >
    );
};

export default RecoveryPage;