import { VStack } from '@/shared/components/atoms/vstack';
import { AppText, Screen } from '@/shared/components';

import { LoginForm } from '../components/LoginForm';

export function LoginScreen() {
  return (
    <Screen scrollable>
      <VStack space="md" className="mb-sp8 mt-sp6">
        <AppText variant="display">Tire Club</AppText>
        <AppText variant="body">Sign in to your Tire Club account</AppText>
      </VStack>
      <LoginForm />
    </Screen>
  );
}
