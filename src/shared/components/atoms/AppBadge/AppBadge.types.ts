export type AppBadgeVariant = 'default' | 'success' | 'warning' | 'error';

export interface AppBadgeProps {
  label: string;
  variant?: AppBadgeVariant;
}
