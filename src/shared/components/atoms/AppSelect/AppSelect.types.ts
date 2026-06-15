export type AppSelectOption = {
  label: string;
  value: string;
};

export interface AppSelectProps {
  label: string;
  options: AppSelectOption[];
  value?: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}
