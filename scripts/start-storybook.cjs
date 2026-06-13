const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const originalMain = pkg.main;

function restoreMain() {
  const current = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  current.main = originalMain;
  fs.writeFileSync(pkgPath, `${JSON.stringify(current, null, 2)}\n`);
}

function runStorybook() {
  pkg.main = 'index.storybook.ts';
  fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);

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
