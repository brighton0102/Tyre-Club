import { Text } from '@/shared/components/primitives/text';
import { Textarea, TextareaInput } from '@/shared/components/primitives/textarea';
import { VStack } from '@/shared/components/primitives/vstack';
import { colors, typographyClasses } from '@/shared/theme';

import { AppFormErrorText } from '../AppFormErrorText';

import type { AppTextareaProps } from './AppTextarea.types';

export function AppTextarea({ label, error, ...props }: AppTextareaProps) {
  return (
    <VStack space="xs" className="mb-sp4">
      <Text className={typographyClasses.label}>{label}</Text>
      <Textarea variant="default" size="md" isInvalid={Boolean(error)}>
        <TextareaInput placeholderTextColor={colors.textSecondary} {...props} />
      </Textarea>
      {error ? <AppFormErrorText>{error}</AppFormErrorText> : null}
    </VStack>
  );
}
