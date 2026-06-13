import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const prompts = require('@clack/prompts');

prompts.intro = () => {};
prompts.outro = () => {};
prompts.log = {
  info: (msg) => console.log(msg),
  error: (msg) => console.error(msg),
  step: (msg) => console.log(msg),
  success: (msg) => console.log(msg),
  warning: (msg) => console.warn(msg),
};
prompts.spinner = () => ({
  start: () => {},
  stop: () => {},
});
prompts.confirm = async () => true;
prompts.select = async () => 'expo';
prompts.multiselect = async () => [];

const { config } = require('gluestack-ui/dist/config');
config.writableComponentsPath = 'src/components/ui';

const { InitializeGlueStack } = require('gluestack-ui/dist/util/init');

await InitializeGlueStack({ projectType: 'expo', isTemplate: true });
