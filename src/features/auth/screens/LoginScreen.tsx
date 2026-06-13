import { VStack } from '@/shared/components/atoms/vstack';
import { AppText, Screen } from '@/shared/components';

import { LoginForm } from '../components/LoginForm';

export function LoginScreen() {
  return (
    <Screen scrollable>
      <VStack space="md" className="mt-6 mb-8">
        <AppText variant="title">Tire Club</AppText>
        <AppText variant="body">Sign in to your Tire Club account</AppText>
      </VStack>
      <LoginForm />
    </Screen>
  );
}
