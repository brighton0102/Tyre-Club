export interface AppDateInputProps {
  label: string;
  value: Date;
  onChange: (date: Date) => void;
  error?: string;
  disabled?: boolean;
  minimumDate?: Date;
  maximumDate?: Date;
}
