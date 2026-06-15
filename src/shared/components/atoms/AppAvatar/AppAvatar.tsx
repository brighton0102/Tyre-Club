import { Avatar, AvatarFallbackText, AvatarImage } from '@/shared/components/primitives/avatar';

import type { AppAvatarProps } from './AppAvatar.types';

const sizeMap = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
} as const;

function getInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) {
    return '?';
  }
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function AppAvatar({ name, source, size = 'md' }: AppAvatarProps) {
  const initials = name ? getInitials(name) : '?';

  return (
    <Avatar size={sizeMap[size]}>
      {source ? <AvatarImage source={source} /> : null}
      <AvatarFallbackText>{initials}</AvatarFallbackText>
    </Avatar>
  );
}
