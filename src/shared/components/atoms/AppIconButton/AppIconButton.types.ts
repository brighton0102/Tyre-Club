import type { AppIconName } from '../AppIcon/AppIcon.types';

export interface AppIconButtonProps {
  icon: AppIconName;
  onPress: () => void;
  disabled?: boolean;
  accessibilityLabel: string;
  size?: 'sm' | 'md' | 'lg';
}
