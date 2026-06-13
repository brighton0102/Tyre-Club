const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, '..', 'package.json');

// The normal app entry. Always restore to this so an interrupted run can never
// leave package.json stuck on the Storybook entry (which crashes `npm start`).
const APP_ENTRY = 'index.ts';
const STORYBOOK_ENTRY = 'index.storybook.ts';

function setMain(entry) {
  const current = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  current.main = entry;
  fs.writeFileSync(pkgPath, `${JSON.stringify(current, null, 2)}\n`);
}

function restoreMain() {
  setMain(APP_ENTRY);
}

function runStorybook() {
  setMain(STORYBOOK_ENTRY);

  const args = process.argv.slice(2);
  const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  const env = { ...process.env, EXPO_PUBLIC_STORYBOOK_ENABLED: 'true' };

  const result = spawnSync(npx, ['expo', 'start', ...args], {
    stdio: 'inherit',
    env,
    shell: true,
  });

  restoreMain();
  process.exit(result.status ?? 1);
}

process.on('SIGINT', () => {
  restoreMain();
  process.exit(130);
});

process.on('SIGTERM', () => {
  restoreMain();
  process.exit(143);
});

runStorybook();
