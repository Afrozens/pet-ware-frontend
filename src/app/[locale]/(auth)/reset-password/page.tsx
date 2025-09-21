import AuthLayout from '@/layout/AuthLayout';
import { montserrat } from '@/fonts';
import ResetPasswordForm from '@/components/auth/forms/ResetPasswordForm';
import AuthService from '@/services/AuthService';
import { ForgotPassword } from '@/models/auth';
import Custom500 from '../../500';
import Custom404 from '../../400';

interface SearchParams extends Pick<ForgotPassword, 'token' | 'email'> {}

interface Props {
    params: {},
    searchParams: SearchParams 
}

const ResetPasswordPage = async ({ searchParams }: Props) => {
    const authService = new AuthService()
    const { token, email } = searchParams
    let isVerified = true

    // const handleResetPassword = async () => {
    //     try {
    //         if (token && email) {
    //             isVerified = await authService.resetVerifyPassword(searchParams)
    //         }
    //     } catch (error) {
    //         console.error(`error in reset password page: ${error}`)
    //     }
    // }

    // await handleResetPassword()

    // if (!isVerified) return (
    //     <Custom404 />
    // )

    return (
        <AuthLayout withAd={false}>
            <section className="w-full min-h-screen flex justify-center items-center bg-white">
                <div className="flex w-full flex-col items-center justify-center gap-0">
                    {isVerified ? (
                        <div className="mt-10 justify-center items-center flex w-full flex-col gap-4">
                        <h1 className="form-title">Reset Password</h1>
                        <p
                            className={`form-subtitle -mt-4 md:text-lg md:font-medium ${montserrat.className}`}
                        >
                            Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                        </p>
                        <ResetPasswordForm token={token} email={email} />
                    </div>
                    ) : null}
                </div>
            </section>
        </AuthLayout >
    );
};

export default ResetPasswordPage;