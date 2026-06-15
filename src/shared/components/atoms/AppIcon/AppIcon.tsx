import { colorClasses } from '@/shared/theme';

import { APP_ICON_MAP, type AppIconProps } from './AppIcon.types';

export function AppIcon({ name, size = 'md', className }: AppIconProps) {
  const IconComponent = APP_ICON_MAP[name];

  return (
    <IconComponent
      size={size}
      className={[colorClasses.textPrimary, className].filter(Boolean).join(' ')}
    />
  );
}
