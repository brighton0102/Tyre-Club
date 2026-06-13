import { useState } from 'react';

import { VStack } from '@/shared/components/atoms/vstack';
import {
  AppButton,
  AppCard,
  AppText,
  AppTextInput,
  LoadingState,
  Screen,
} from '@/shared/components';

export function UiExampleScreen() {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleLoading = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  if (isLoading) {
    return (
      <Screen>
        <LoadingState message="Fetching demo data..." />
      </Screen>
    );
  }

  return (
    <Screen scrollable>
      <VStack space="lg">
        <VStack space="xs">
          <AppText variant="display">UI Example</AppText>
          <AppText variant="body">Shared components built on gluestack-ui wrappers.</AppText>
        </VStack>

        <VStack space="xs">
          <AppText variant="h1">Heading 1</AppText>
          <AppText variant="h2">Heading 2</AppText>
          <AppText variant="h3">Heading 3</AppText>
          <AppText variant="body">Body text</AppText>
          <AppText variant="caption">Caption text</AppText>
          <AppText variant="label">Label text</AppText>
          <AppText variant="mono">Mono text — VIN123456789</AppText>
        </VStack>

        <AppTextInput
          label="Your name"
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />

        <AppCard title="Sample Card">
          <AppText variant="body">
            {name ? `Hello, ${name}!` : 'Fill in your name above to see a greeting here.'}
          </AppText>
        </AppCard>

        <VStack space="sm">
          <AppButton title="Toggle Loading Demo" onPress={handleToggleLoading} />
          <AppButton title="Secondary Action" onPress={() => {}} variant="secondary" />
        </VStack>
      </VStack>
    </Screen>
  );
}
