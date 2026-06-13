import { Center } from '@/components/ui/center';
import { VStack } from '@/components/ui/vstack';

import { AppButton } from './AppButton';
import { AppText } from './AppText';

type ErrorStateProps = {
  message: string;
  onRetry?: () => void;
};

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <Center className="flex-1 py-8">
      <VStack space="md" className="items-center px-6">
        <AppText variant="title">Something went wrong</AppText>
        <AppText variant="body">{message}</AppText>
        {onRetry ? <AppButton title="Try Again" onPress={onRetry} /> : null}
      </VStack>
    </Center>
  );
}
