#!/usr/bin/env node

const { spawnSync } = require('node:child_process');

const requiredEnvVars = [
  'REACT_APP_SHARETRIBE_SDK_CLIENT_ID',
  'REACT_APP_STRIPE_PUBLISHABLE_KEY',
  'REACT_APP_MARKETPLACE_ROOT_URL',
  'REACT_APP_ENV',
];

const optionalEnvGroups = [
  {
    label: 'map provider key',
    vars: ['REACT_APP_MAPBOX_ACCESS_TOKEN', 'REACT_APP_GOOGLE_MAPS_API_KEY'],
  },
];

const fail = message => {
  console.error(`❌ ${message}`);
  process.exit(1);
};

const runCommand = (command, args) => {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
  });

  if (result.error) {
    fail(`Failed to run ${command} ${args.join(' ')}: ${result.error.message}`);
  }

  if (result.status !== 0) {
    fail(`${command} ${args.join(' ')} exited with status ${result.status}`);
  }
};

console.log('🔎 TEST environment healthcheck');
console.log(`Node version: ${process.version}`);

runCommand('yarn', ['--version']);

const missingRequiredVars = requiredEnvVars.filter(name => !process.env[name]);
if (missingRequiredVars.length > 0) {
  console.error('Missing required environment variables:');
  missingRequiredVars.forEach(name => console.error(`- ${name}`));
  process.exit(1);
}

const missingOptionalGroups = optionalEnvGroups.filter(
  group => !group.vars.some(name => process.env[name])
);
if (missingOptionalGroups.length > 0) {
  console.error('Missing required environment variable groups:');
  missingOptionalGroups.forEach(group => {
    console.error(`- ${group.label}: set one of ${group.vars.join(', ')}`);
  });
  process.exit(1);
}

console.log('✅ Environment variables are set.');
console.log('🧪 Running smoke command: yarn build');
runCommand('yarn', ['build']);
console.log('✅ Healthcheck completed successfully.');
