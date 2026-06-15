import { Badge, BadgeText } from '@/shared/components/primitives/badge';

import type { AppBadgeProps, AppBadgeVariant } from './AppBadge.types';

const actionMap: Record<AppBadgeVariant, 'muted' | 'success' | 'warning' | 'error'> = {
  default: 'muted',
  success: 'success',
  warning: 'warning',
  error: 'error',
};

export function AppBadge({ label, variant = 'default' }: AppBadgeProps) {
  return (
    <Badge action={actionMap[variant]} variant="outline" size="sm">
      <BadgeText>{label}</BadgeText>
    </Badge>
  );
}
