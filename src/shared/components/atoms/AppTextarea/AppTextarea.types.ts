import type { TextInputProps as RNTextInputProps } from 'react-native';

export type AppTextareaProps = RNTextInputProps & {
  label: string;
  error?: string;
};
