import { Pressable } from '@/shared/components/primitives/pressable';

import { AppIcon } from '../AppIcon';

import type { AppIconButtonProps } from './AppIconButton.types';

export function AppIconButton({
  icon,
  onPress,
  disabled = false,
  accessibilityLabel,
  size = 'md',
}: AppIconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      className="items-center justify-center rounded-full p-sp2"
    >
      <AppIcon name={icon} size={size} />
    </Pressable>
  );
}
