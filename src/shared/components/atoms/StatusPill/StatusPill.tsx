import { Box } from '@/shared/components/primitives/box';
import { HStack } from '@/shared/components/primitives/hstack';
import { Text } from '@/shared/components/primitives/text';
import { colorClasses, typographyClasses } from '@/shared/theme';

import type { StatusPillProps, StatusPillVariant } from './StatusPill.types';

type VariantConfig = {
  defaultLabel: string;
  backgroundClass: string;
  borderClass: string;
  dotClass: string;
  textClass: string;
};

const VARIANT_CONFIG: Record<StatusPillVariant, VariantConfig> = {
  attentionRequired: {
    defaultLabel: 'Attention Required',
    backgroundClass: 'bg-red/10',
    borderClass: 'border-red',
    dotClass: 'bg-red',
    textClass: colorClasses.red,
  },
  needsAttention: {
    defaultLabel: 'Needs Attention',
    backgroundClass: 'bg-amber/10',
    borderClass: 'border-amber',
    dotClass: 'bg-amber',
    textClass: colorClasses.amber,
  },
  allGood: {
    defaultLabel: 'All Good',
    backgroundClass: 'bg-green/10',
    borderClass: 'border-green',
    dotClass: 'bg-green',
    textClass: colorClasses.green,
  },
  licensePending: {
    defaultLabel: 'License Pending',
    backgroundClass: 'bg-textSecondary/10',
    borderClass: 'border-textSecondary',
    dotClass: 'bg-textSecondary',
    textClass: colorClasses.textSecondary,
  },
};

export function StatusPill({ variant, label }: StatusPillProps) {
  const config = VARIANT_CONFIG[variant];
  const displayLabel = label ?? config.defaultLabel;

  return (
    <HStack
      space="xs"
      accessible
      accessibilityLabel={displayLabel}
      className={`self-start items-center rounded-full border px-sp3 py-sp1 ${config.backgroundClass} ${config.borderClass}`}
    >
      <Box className={`h-sp2 w-sp2 rounded-full ${config.dotClass}`} />
      <Text
        numberOfLines={1}
        className={`${typographyClasses.caption} font-medium ${config.textClass}`}
      >
        {displayLabel}
      </Text>
    </HStack>
  );
}
