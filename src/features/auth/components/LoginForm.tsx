import { Controller } from 'react-hook-form';

import { AppButton, AppText, AppTextInput, Stack } from '@/shared/components';
import { colorClasses } from '@/shared/theme';

import { useLoginForm } from '../hooks/useLoginForm';

export function LoginForm() {
  const { control, errors, isSubmitting, submitError, onSubmit } = useLoginForm();

  return (
    <Stack space="sm">
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            label="Email"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.email?.message}
            autoCapitalize="none"
            keyboardType="email-address"
            autoComplete="email"
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            label="Password"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            error={errors.password?.message}
            secureTextEntry
            autoComplete="password"
          />
        )}
      />

      {submitError ? (
        <AppText variant="caption" className={colorClasses.red}>
          {submitError}
        </AppText>
      ) : null}

      <AppButton title="Sign In" onPress={onSubmit} loading={isSubmitting} />

      <AppText variant="caption" className="text-center">
        Demo: use any valid email and a password with 6+ characters.
      </AppText>
    </Stack>
  );
}
