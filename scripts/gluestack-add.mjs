import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const components = process.argv.slice(2);

if (components.length === 0) {
  console.error('Usage: node scripts/gluestack-add.mjs <component> [component...]');
  process.exit(1);
}

const prompts = require('@clack/prompts');

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

const { config } = require('gluestack-ui/dist/config');
config.writableComponentsPath = 'src/shared/components/primitives';
config.packageManager = 'npm';

const { componentAdder } = require('gluestack-ui/dist/util/add');

await componentAdder({ addAll: false, componentArgs: components });
