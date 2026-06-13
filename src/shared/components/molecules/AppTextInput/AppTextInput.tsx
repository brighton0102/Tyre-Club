import { TextInputProps as RNTextInputProps } from 'react-native';

import { Input, InputField } from '@/shared/components/atoms/input';
import { Text } from '@/shared/components/atoms/text';
import { VStack } from '@/shared/components/atoms/vstack';
import { colors, colorClasses, typographyClasses } from '@/shared/theme';

type AppTextInputProps = RNTextInputProps & {
  label: string;
  error?: string;
};

export function AppTextInput({ label, error, ...props }: AppTextInputProps) {
  return (
    <VStack space="xs" className="mb-sp4">
      <Text className={typographyClasses.label}>{label}</Text>
      <Input variant="outline" size="md" isInvalid={Boolean(error)}>
        <InputField placeholderTextColor={colors.textSecondary} {...props} />
      </Input>
      {error ? (
        <Text className={`${typographyClasses.caption} ${colorClasses.red}`}>{error}</Text>
      ) : null}
    </VStack>
  );
}
