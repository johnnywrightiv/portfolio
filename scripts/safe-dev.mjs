#!/usr/bin/env node
// Pre-flight: block dev server if dependencies have HIGH/CRITICAL vulnerabilities.
// Usage: node scripts/safe-dev.mjs <command> [args...]
// Canonical source: ~/code/Agents Hub/scripts/safe-dev.js

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const pm = existsSync('pnpm-lock.yaml')
	? 'pnpm'
	: existsSync('yarn.lock')
		? 'yarn'
		: 'npm';

console.log(`[safe-dev] auditing with ${pm} (blocks on high/critical)...`);
const audit = spawnSync(pm, ['audit', '--audit-level=high'], {
	stdio: 'inherit',
});
if (audit.status !== 0) {
	console.error(
		`\n[safe-dev] BLOCKED. Fix high/critical vulnerabilities before starting the dev server.\n` +
			`  Try:  ${pm} audit fix\n` +
			`  Or:   inspect the advisory and replace the dep.\n`
	);
	process.exit(1);
}

const cmd = process.argv.slice(2);
if (cmd.length === 0) {
	console.error(
		'[safe-dev] Usage: node scripts/safe-dev.mjs <command> [args...]'
	);
	process.exit(2);
}

console.log(`[safe-dev] audit clean - starting: ${cmd.join(' ')}\n`);
const dev = spawnSync(cmd[0], cmd.slice(1), { stdio: 'inherit' });
process.exit(dev.status ?? 0);
