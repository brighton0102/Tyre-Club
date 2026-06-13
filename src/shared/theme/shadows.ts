import { colors } from './colors';

export const shadows = {
  card: {
    shadowColor: colors.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
} as const;

export const shadowClasses = {
  card: 'shadow-soft-1',
} as const;
