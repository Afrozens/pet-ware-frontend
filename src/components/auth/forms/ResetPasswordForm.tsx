'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import FieldInput from '@/components/commons/fields/FieldInput';
import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';
import FieldError from '@/components/commons/fields/FieldError';
import useSubmit from '@/hooks/useSubmit';
import AuthService from '@/services/AuthService';
import { ForgotPassword, ResetPassword } from '@/models/auth';
import { regexPassword } from '@/utils/regex';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface Props extends Pick<ForgotPassword, 'token' | 'email'> {}

const ResetPasswordForm = ({ token, email }: Props) => {
    const authService = new AuthService();
    const tInput = useTranslations('input');
    const router = useRouter()
    const tValidates = useTranslations('validates');
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues
    } = useForm<Omit<ResetPassword, 'password'>>();

    const { error, setError, isLoading, doSubmit } = useSubmit<Omit<ResetPassword, 'password'>, void>(
        tValidates('recovery-success'),
    );

    const onSubmit: SubmitHandler<Omit<ResetPassword, 'password'>> = async (data) => {
        try {
            if (!data) return setError(tValidates('validates.empty'));
            const dataIn = {
              ...data,
              token,
              email
            }
            await doSubmit({ data: dataIn, callback: authService.resetPassword });
            toast.success(`reset password successfully`)
            router.push('/')
        } catch (error) {
            //catch vacio
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-initial">
            <div className="container-inputs flex-row">
                  <FieldInput
                    label={tInput('password')}
                    type="password"
                    name="new_password"
                    id="password"
                    error={errors.new_password?.message}
                    register={register}
                    rules={{
                      required: {
                        value: true,
                        message: tValidates('password-required'),
                      },
                      minLength: {
                        value: 8,
                        message: tValidates('password-eight'),
                      },
                      pattern: {
                        value: regexPassword,
                        message: tValidates('password-requirements'),
                      },
                    }}
                    isRequired={true}
                    placeholder="••••••••••"
                  />
                  <FieldInput
                    label={tInput('confirm-password')}
                    name="confirm_password"
                    error={errors.confirm_password?.message as string}
                    register={register}
                    rules={{
                      required: {
                        value: true,
                        message: tValidates('password-required'),
                      },
                      minLength: {
                        value: 8,
                        message: tValidates('password-eight'),
                      },
                      validate: (value) => {
                        const { new_password } = getValues();
                        if (new_password !== value)
                          return tValidates('passwords-match');
                      },
                      pattern: {
                        value: regexPassword,
                        message: tValidates('password-requirements'),
                      },
                    }}
                    type="password"
                    id="confirmPassword"
                    isRequired={true}
                    placeholder="••••••••••"
                  />
                </div>
            <div className="w-full flex justify-center items-center">
                <ButtonPrimary type="submit" loading={isLoading}>
                    Enviar
                </ButtonPrimary>
            </div>
            <div className="w-full text-center">
                <FieldError error={error ?? ''} />
            </div>
        </form>
    );
};

export default ResetPasswordForm;