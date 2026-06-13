export const spacing = {
  sp1: 4,
  sp2: 8,
  sp3: 12,
  sp4: 16,
  sp6: 24,
  sp8: 32,
  sp12: 48,
} as const;

export type SpacingToken = keyof typeof spacing;
