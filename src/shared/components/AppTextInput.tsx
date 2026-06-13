import { TextInputProps as RNTextInputProps } from 'react-native';

import { Input, InputField } from '@/components/ui/input';
import { Text } from '@/components/ui/text';
import { VStack } from '@/components/ui/vstack';

type AppTextInputProps = RNTextInputProps & {
  label: string;
  error?: string;
};

export function AppTextInput({ label, error, ...props }: AppTextInputProps) {
  return (
    <VStack space="xs" className="mb-4">
      <Text className="text-sm font-medium text-typography-900">{label}</Text>
      <Input variant="outline" size="md" isInvalid={Boolean(error)}>
        <InputField placeholderTextColor="#9CA3AF" {...props} />
      </Input>
      {error ? <Text className="text-xs text-error-600">{error}</Text> : null}
    </VStack>
  );
}
