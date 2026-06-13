import { Center } from '@/shared/components/atoms/center';
import { VStack } from '@/shared/components/atoms/vstack';
import { spacingClasses } from '@/shared/theme';

import { AppText } from '../AppText';

type EmptyStateProps = {
  title: string;
  message?: string;
};

export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <Center className={`flex-1 ${spacingClasses.sectionY}`}>
      <VStack space="sm" className={`items-center ${spacingClasses.sectionX}`}>
        <AppText variant="h1">{title}</AppText>
        {message ? <AppText variant="body">{message}</AppText> : null}
      </VStack>
    </Center>
  );
}
