import type { ReactNode } from 'react';

export interface AppSkeletonProps {
  className?: string;
  lines?: number;
  isLoaded?: boolean;
  children?: ReactNode;
}
