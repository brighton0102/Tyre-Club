import { Pressable } from '@/shared/components/primitives/pressable';
import { Text } from '@/shared/components/primitives/text';
import { colorClasses, typographyClasses } from '@/shared/theme';

import type { AppTabChipProps } from './AppTabChip.types';

export function AppTabChip({ label, active = false, onPress, disabled = false }: AppTabChipProps) {
  const containerClassName = active ? 'bg-yellow' : 'bg-transparent';
  const textClassName = active
    ? `${colorClasses.textPrimary} font-semibold`
    : colorClasses.textSecondary;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="tab"
      accessibilityState={{ selected: active, disabled }}
      accessibilityLabel={label}
      className={`self-start rounded-md px-sp3 py-sp1 ${containerClassName}`}
    >
      <Text numberOfLines={1} className={`${typographyClasses.caption} ${textClassName}`}>
        {label}
      </Text>
    </Pressable>
  );
}
