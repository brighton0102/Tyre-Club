export const typographyClasses = {
  display: 'font-sans text-display font-bold text-textPrimary',
  h1: 'font-sans text-h1 font-semibold text-textPrimary',
  h2: 'font-sans text-h2 font-semibold text-textPrimary',
  h3: 'font-sans text-h3 font-medium text-textPrimary',
  body: 'font-sans text-body font-normal text-textPrimary',
  caption: 'font-sans text-caption font-normal text-textSecondary',
  label: 'font-sans text-label font-semibold uppercase text-textSecondary',
  mono: 'font-mono text-mono font-normal text-textPrimary',
} as const;

export const spacingClasses = {
  screenPadding: 'p-sp4',
  stackSm: 'gap-sp2',
  stackMd: 'gap-sp4',
  sectionY: 'py-sp8',
  sectionX: 'px-sp6',
} as const;

export const colorClasses = {
  textPrimary: 'text-textPrimary',
  textSecondary: 'text-textSecondary',
  pageBackground: 'bg-pageBackground',
  surfacePrimary: 'bg-surfacePrimary',
  red: 'text-red',
  amber: 'text-amber',
  green: 'text-green',
  yellow: 'bg-yellow',
} as const;
