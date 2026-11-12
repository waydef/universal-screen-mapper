// run with: node --test test/
// index.html is a single file, so the pure helpers sit between "// <core>" and
// "// </core>" markers and are loaded from there without a browser.
const test = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const match = html.match(/\/\/ <core>([\s\S]*?)\/\/ <\/core>/);
assert.ok(match, 'core block not found in index.html');
const core = vm.runInNewContext(
  match[1] + '; ({ MAX_SIDE, clampDimension, clampToPixelGrid, physicalScreenSize, scalePointList, pathLengthPx })'
);

test('1:1 mode uses matrix pixels, not css pixels', () => {
  // 2560x1600 laptop at 150 percent: window.screen says 1707x1067
  assert.deepStrictEqual({ ...core.physicalScreenSize(1707, 1067, 1.5) }, { w: 2561, h: 1601 }); // css size is rounded, so one pixel off is expected
  assert.deepStrictEqual({ ...core.physicalScreenSize(1920, 1080, 1) }, { w: 1920, h: 1080 });
  assert.deepStrictEqual({ ...core.physicalScreenSize(393, 852, 3) }, { w: 1179, h: 2556 });
  assert.deepStrictEqual({ ...core.physicalScreenSize(1920, 1080, 0) }, { w: 1920, h: 1080 });
});

test('points keep their place when the resolution changes and come back', () => {
  const pts = [{ x: 0, y: 0 }, { x: 960, y: 540 }, { x: 1919, y: 1079 }];
  const up = core.scalePointList(pts, 1920, 1080, 3840, 2160);
  assert.deepStrictEqual({ ...up[0] }, { x: 0, y: 0 });
  assert.deepStrictEqual({ ...up[2] }, { x: 3838, y: 2158 });
  const back = core.scalePointList(up, 3840, 2160, 1920, 1080);
  assert.deepStrictEqual(back.map(p => ({ ...p })), pts);
});

test('same resolution changes nothing and never returns the input array', () => {
  const pts = [{ x: 5, y: 7 }];
  const out = core.scalePointList(pts, 100, 100, 100, 100);
  assert.deepStrictEqual(out.map(p => ({ ...p })), pts);
  assert.notStrictEqual(out, pts);
});

test('pixel grid ends at size - 1', () => {
  assert.strictEqual(core.clampToPixelGrid(1920, 1920), 1919);
  assert.strictEqual(core.clampToPixelGrid(-4, 1920), 0);
  assert.strictEqual(core.clampToPixelGrid(100, 1920), 100);
});

test('typed resolutions are bounded', () => {
  assert.strictEqual(core.clampDimension('100000', 1920), core.MAX_SIDE);
  assert.strictEqual(core.clampDimension('-5', 1920), 1920);
  assert.strictEqual(core.clampDimension('', 1920), 1920);
  assert.strictEqual(core.clampDimension('abc', 1080), 1080);
  assert.strictEqual(core.clampDimension('2560', 1920), 2560);
});

test('path length open and closed', () => {
  const square = [{ x: 0, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 4 }];
  assert.strictEqual(core.pathLengthPx(square, false), 7);
  assert.strictEqual(core.pathLengthPx(square, true), 12);
  assert.strictEqual(core.pathLengthPx([{ x: 1, y: 1 }], false), 0);
});
