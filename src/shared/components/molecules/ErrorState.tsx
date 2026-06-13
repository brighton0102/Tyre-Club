import { Center } from '@/shared/components/atoms/center';
import { VStack } from '@/shared/components/atoms/vstack';
import { spacingClasses } from '@/shared/theme';

import { AppButton } from './AppButton';
import { AppText } from './AppText';

type ErrorStateProps = {
  message: string;
  onRetry?: () => void;
};

export function ErrorState({ message, onRetry }: ErrorStateProps) {
  return (
    <Center className={`flex-1 ${spacingClasses.sectionY}`}>
      <VStack space="md" className={`items-center ${spacingClasses.sectionX}`}>
        <AppText variant="h1">Something went wrong</AppText>
        <AppText variant="body">{message}</AppText>
        {onRetry ? <AppButton title="Try Again" onPress={onRetry} /> : null}
      </VStack>
    </Center>
  );
}
