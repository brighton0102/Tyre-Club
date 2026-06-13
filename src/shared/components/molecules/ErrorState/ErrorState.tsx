import { Center } from '@/shared/components/primitives/center';
import { VStack } from '@/shared/components/primitives/vstack';
import { spacingClasses } from '@/shared/theme';

import { AppButton } from '../../atoms/AppButton';
import { AppText } from '../../atoms/AppText';

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
