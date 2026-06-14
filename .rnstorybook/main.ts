import type { StorybookConfig } from '@storybook/react-native';

const main: StorybookConfig = {
  stories: [
    '../src/shared/components/primitives/**/*.stories.?(ts|tsx|js|jsx)',
    '../src/shared/components/atoms/**/*.stories.?(ts|tsx|js|jsx)',
    '../src/shared/components/molecules/**/*.stories.?(ts|tsx|js|jsx)',
    '../src/shared/components/layouts/**/*.stories.?(ts|tsx|js|jsx)',
  ],
  addons: ['@storybook/addon-ondevice-controls', '@storybook/addon-ondevice-actions'],
};

export default main;
