import { LogBox } from 'react-native';
import React from 'react';
import type { Preview } from '@storybook/react';

import '../global.css';

import { StorybookProviders } from '@/app/providers/StorybookProviders';

LogBox.ignoreLogs([/Testing Library's `screen` object/]);

const preview: Preview = {
  decorators: [
    (Story) => (
      <StorybookProviders>
        <Story />
      </StorybookProviders>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
