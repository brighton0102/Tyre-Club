import { Pressable } from '@/shared/components/primitives/pressable';
import { Text } from '@/shared/components/primitives/text';
import { colorClasses, typographyClasses } from '@/shared/theme';

import type { AppChipProps } from './AppChip.types';

export function AppChip({ label, selected = false, onPress, disabled = false }: AppChipProps) {
  const containerClassName = selected
    ? 'border-yellow bg-yellow/10'
    : 'border-textSecondary bg-surfacePrimary';
  const textClassName = selected ? colorClasses.textPrimary : colorClasses.textSecondary;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ selected, disabled }}
      accessibilityLabel={label}
      className={`self-start rounded-full border px-sp3 py-sp1 ${containerClassName}`}
    >
      <Text
        numberOfLines={1}
        className={`${typographyClasses.caption} font-medium ${textClassName}`}
      >
        {label}
      </Text>
    </Pressable>
  );
}
