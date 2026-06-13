import { colors } from './colors';
import { hexToRgbChannels } from './utils';

export function buildGluestackLightVars(): Record<string, string> {
  return {
    '--color-primary-500': hexToRgbChannels(colors.yellow),
    '--color-primary-600': hexToRgbChannels(colors.yellow),
    '--color-primary-700': hexToRgbChannels(colors.yellow),

    '--color-background-0': hexToRgbChannels(colors.pageBackground),
    '--color-background-50': hexToRgbChannels(colors.surfacePrimary),

    '--color-typography-900': hexToRgbChannels(colors.textPrimary),
    '--color-typography-500': hexToRgbChannels(colors.textSecondary),

    '--color-error-600': hexToRgbChannels(colors.red),
    '--color-warning-600': hexToRgbChannels(colors.amber),
    '--color-success-600': hexToRgbChannels(colors.green),

    '--color-indicator-primary': hexToRgbChannels(colors.yellow),
    '--color-indicator-error': hexToRgbChannels(colors.red),
  };
}
