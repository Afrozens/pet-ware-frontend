'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

import FieldInput from '@/components/commons/fields/FieldInput';
import ButtonPrimary from '@/components/commons/buttons/ButtonPrimary';
import FieldError from '@/components/commons/fields/FieldError';
import useSubmit from '@/hooks/useSubmit';
import AuthService from '@/services/AuthService';
import { RecoveryPassword } from '@/models/auth';

const RecoveryPasswordForm = () => {
    const authService = new AuthService();
    const t = useTranslations('');
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<RecoveryPassword>();

    const { error, setError, isLoading, doSubmit } = useSubmit<RecoveryPassword, void>(
        t('validates.recovery-success'),
    );

    const onSubmit: SubmitHandler<RecoveryPassword> = async (data) => {
        try {
            if (!data) return setError(t('validates.empty'));
            await doSubmit({ data, callback: authService.recoverPassword });
        } catch (error) {
            //catch vacio
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-initial">
            <FieldInput
                label={t('input.email')}
                type="email"
                id="email"
                name="email"
                error={errors.email?.message as string}
                register={register}
                rules={{
                    required: {
                        value: true,
                        message: t('validates.email'),
                    },
                }}
                isRequired
                placeholder="Correo@example.com"
            />
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

export default RecoveryPasswordForm;