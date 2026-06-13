export const colors = {
  yellow: '#F5C800',
  textPrimary: '#1A1A1A',
  textSecondary: '#5A5755',
  pageBackground: '#F0EDE8',
  surfacePrimary: '#FFFFFF',
  red: '#D93025',
  amber: '#C97C00',
  green: '#1A7A52',
} as const;

export type ColorToken = keyof typeof colors;
