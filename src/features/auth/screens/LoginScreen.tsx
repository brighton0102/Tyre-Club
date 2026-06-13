import { AppText, Screen, Stack } from '@/shared/components';

import { LoginForm } from '../components/LoginForm';

export function LoginScreen() {
  return (
    <Screen scrollable>
      <Stack space="md" className="mb-sp8 mt-sp6">
        <AppText variant="display">Tire Club</AppText>
        <AppText variant="body">Sign in to your Tire Club account</AppText>
      </Stack>
      <LoginForm />
    </Screen>
  );
}
