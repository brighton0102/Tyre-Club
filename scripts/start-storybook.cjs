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

function logDependencyDiagnostics() {
  let svgResolved = null;
  let svgError = null;
  try {
    svgResolved = require.resolve('react-native-svg');
  } catch (error) {
    svgError = error instanceof Error ? error.message : String(error);
  }

  const payload = {
    sessionId: '4ed92a',
    runId: 'pre-start',
    hypothesisId: 'A',
    location: 'scripts/start-storybook.cjs:logDependencyDiagnostics',
    message: 'Storybook startup dependency check',
    data: {
      svgResolved,
      svgError,
      svgExists: svgResolved ? fs.existsSync(svgResolved) : false,
      nodeModulesExists: fs.existsSync(
        path.join(__dirname, '..', 'node_modules', 'react-native-svg', 'package.json')
      ),
    },
    timestamp: Date.now(),
  };

  // #region agent log
  fetch('http://127.0.0.1:7329/ingest/5408526a-ebf1-4b2a-b4d7-c715264938f5', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '4ed92a' },
    body: JSON.stringify(payload),
  }).catch(() => {});
  // #endregion
}

function runStorybook() {
  logDependencyDiagnostics();
  setMain(STORYBOOK_ENTRY);

  const userArgs = process.argv.slice(2);
  const hasClearFlag = userArgs.some((arg) => arg === '--clear' || arg === '-c');
  const expoArgs = ['start', ...(hasClearFlag ? [] : ['--clear']), ...userArgs];
  const npx = process.platform === 'win32' ? 'npx.cmd' : 'npx';
  const env = { ...process.env, EXPO_PUBLIC_STORYBOOK_ENABLED: 'true' };

  const result = spawnSync(npx, ['expo', ...expoArgs], {
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
