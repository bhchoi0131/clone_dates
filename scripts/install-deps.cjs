'use strict';

const path = require('path');
const { spawnSync } = require('child_process');

const root = path.join(__dirname, '..');
const userconfig = path.join(root, '.npm-userconfig');
const result = spawnSync('npm', ['install'], {
  cwd: root,
  stdio: 'inherit',
  env: { ...process.env, NPM_CONFIG_USERCONFIG: userconfig },
});

process.exit(result.status === null ? 1 : result.status);
