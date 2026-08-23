import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { validateManifest } from '../scripts/validate-manifest.mjs';

const manifest = JSON.parse(readFileSync(new URL('../.ring/manifest.json', import.meta.url)));
test('current alpha manifest is closed and valid', () => {
  validateManifest(manifest, 'alpha', new Date('2026-08-23T20:00:00Z'));
});
test('repository and field injection fail closed', () => {
  assert.throws(() => validateManifest({ ...manifest, extra: true }, 'alpha'));
  assert.throws(() => validateManifest({ ...manifest, source: { ...manifest.source, repository: 'evil/repo' } }, 'alpha'));
});
test('future and published-without-install fail closed', () => {
  assert.throws(() => validateManifest({ ...manifest, promoted_at: '2999-01-01T00:00:00Z' }, 'alpha'));
  assert.throws(() => validateManifest({ ...manifest, status: 'published', reason: null }, 'alpha'));
});
