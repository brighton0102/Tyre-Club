import { Skeleton, SkeletonText } from '@/shared/components/primitives/skeleton';

import type { AppSkeletonProps } from './AppSkeleton.types';

export function AppSkeleton({
  className = 'h-sp8 w-full',
  lines,
  isLoaded = false,
  children,
}: AppSkeletonProps) {
  if (lines) {
    return (
      <SkeletonText _lines={lines} className="h-sp2" isLoaded={isLoaded}>
        {children}
      </SkeletonText>
    );
  }

  return (
    <Skeleton className={className} isLoaded={isLoaded}>
      {children}
    </Skeleton>
  );
}
