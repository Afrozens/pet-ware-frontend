'use client';

import { toast } from 'sonner';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

// Generic types for the hook:
// T - Input data type
// U - Return data type
interface UseSubmitProps<T, U> {
  data: T;
  callback: (data: T, id?: string) => Promise<U>;
}

/**
 * A reusable submission hook with loading state and error handling
 * @param msg Optional success message (falls back to callback result)
 */
const useSubmit = <T, U>(msg?: string) => {
  const t = useTranslations('validates');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const doSubmit = async ({
    data,
    callback,
    id,
  }: UseSubmitProps<T, U> & { id?: string }) => {
    try {
      setIsLoading(true);
      const result = await callback(data, id);

      // Show success feedback
      if (msg) {
        toast.success(msg);
      } else if (typeof result === 'string') {
        toast.success(t(result as string));
      }
      return result;
    } catch (error) {
      // Show and store error
      toast.error(error as string);
      setError(t(error as string));
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    setError,
    doSubmit,
  };
};

export default useSubmit;
