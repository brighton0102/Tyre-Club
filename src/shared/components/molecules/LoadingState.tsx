import { Center } from '@/shared/components/atoms/center';
import { Spinner } from '@/shared/components/atoms/spinner';
import { VStack } from '@/shared/components/atoms/vstack';
import { spacingClasses } from '@/shared/theme';

import { AppText } from './AppText';

type LoadingStateProps = {
  message?: string;
};

export function LoadingState({ message = 'Loading...' }: LoadingStateProps) {
  return (
    <Center className={`flex-1 ${spacingClasses.sectionY}`}>
      <VStack space="md" className="items-center">
        <Spinner size="large" />
        <AppText variant="body">{message}</AppText>
      </VStack>
    </Center>
  );
}
