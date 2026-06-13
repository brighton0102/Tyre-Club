import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { login } from '../api/authApi';
import { useAuthStore } from './useAuthStore';

const loginSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function useLoginForm() {
  const authLogin = useAuthStore((state) => state.login);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmitError(null);

    try {
      const response = await login(values);
      authLogin(response.user, response.token);
    } catch {
      setSubmitError('Login failed. Please try again.');
    }
  });

  return {
    control,
    errors,
    isSubmitting,
    submitError,
    onSubmit,
  };
}
