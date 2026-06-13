import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import AdmZip from 'adm-zip';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const zipPath = path.join(projectRoot, '.tmp', 'gluestack-ui-main.zip');
const extractRoot = path.join(projectRoot, '.tmp', 'gluestack-ui-main');

const COMPONENTS = [
  'gluestack-ui-provider',
  'icon',
  'toast',
  'button',
  'input',
  'text',
  'box',
  'vstack',
  'hstack',
  'heading',
  'center',
  'spinner',
  'divider',
  'pressable',
  'card',
  'actionsheet',
  'modal',
  'checkbox',
  'radio',
  'select',
  'textarea',
  'form-control',
  'scroll-view',
  'overlay',
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const file = fs.createWriteStream(dest);
    https
      .get(url, (response) => {
        if (response.statusCode === 302 || response.statusCode === 301) {
          file.close();
          fs.unlinkSync(dest);
          download(response.headers.location, dest).then(resolve).catch(reject);
          return;
        }
        if (response.statusCode !== 200) {
          reject(new Error(`Download failed: ${response.statusCode}`));
          return;
        }
        response.pipe(file);
        file.on('finish', () => file.close(resolve));
      })
      .on('error', reject);
  });
}

function copyDir(src, dest) {
  if (!fs.existsSync(src)) {
    console.warn(`Skipping missing folder: ${src}`);
    return;
  }
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

console.log('Downloading gluestack-ui repository...');
await download('https://github.com/gluestack/gluestack-ui/archive/refs/heads/main.zip', zipPath);

console.log('Extracting archive...');
if (fs.existsSync(extractRoot)) {
  fs.rmSync(extractRoot, { recursive: true, force: true });
}
const zip = new AdmZip(zipPath);
zip.extractAllTo(path.join(projectRoot, '.tmp'), true);

const repoRoot = path.join(projectRoot, '.tmp', 'gluestack-ui-main');
const targetUi = path.join(projectRoot, 'src', 'components', 'ui');
fs.mkdirSync(targetUi, { recursive: true });

for (const component of COMPONENTS) {
  const src = path.join(repoRoot, 'src', 'components', 'ui', component);
  const dest = path.join(targetUi, component);
  console.log(`Copying ${component}...`);
  copyDir(src, dest);
}

const templateFiles = [
  ['packages/gluestack-ui/templates/expo/babel.config.js', 'babel.config.js'],
  ['packages/gluestack-ui/templates/expo/metro.config.js', 'metro.config.js'],
  ['packages/gluestack-ui/templates/tailwind.config.js', 'tailwind.config.js'],
  ['packages/gluestack-ui/templates/common/global.css', 'global.css'],
];

for (const [srcRel, destName] of templateFiles) {
  const src = path.join(repoRoot, srcRel);
  const dest = path.join(projectRoot, destName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${destName}`);
  }
}

const gluestackConfig = {
  tailwind: {
    config: 'tailwind.config.js',
    css: 'global.css',
  },
  app: {
    entry: 'App.tsx',
    components: 'src/components/ui',
  },
};

fs.writeFileSync(
  path.join(projectRoot, 'gluestack-ui.config.json'),
  `${JSON.stringify(gluestackConfig, null, 2)}\n`,
);

console.log('gluestack-ui component setup complete.');
