export const fontFamily = {
  sans: 'DMSans',
  mono: 'DMMono',
} as const;

export const typography = {
  display: { fontFamily: fontFamily.sans, fontSize: 28, fontWeight: '700' as const },
  h1: { fontFamily: fontFamily.sans, fontSize: 22, fontWeight: '600' as const },
  h2: { fontFamily: fontFamily.sans, fontSize: 18, fontWeight: '600' as const },
  h3: { fontFamily: fontFamily.sans, fontSize: 15, fontWeight: '500' as const },
  body: { fontFamily: fontFamily.sans, fontSize: 13, fontWeight: '400' as const },
  caption: { fontFamily: fontFamily.sans, fontSize: 11, fontWeight: '400' as const },
  label: {
    fontFamily: fontFamily.sans,
    fontSize: 10,
    fontWeight: '600' as const,
    textTransform: 'uppercase' as const,
  },
  mono: { fontFamily: fontFamily.mono, fontSize: 12, fontWeight: '400' as const },
} as const;

export type TypographyVariant = keyof typeof typography;
