import { beforeAll, expect, test } from 'bun:test';
import { Core } from './core';

let core: Core;
beforeAll(() => {
  core = new Core();
});

test('abcabcd', () => {
  const result = core.commonPrefix(['abcabcd']);
  // console.log(`result:`, result);
  expect(result).toEqual([10]);
});

test('ababaa', () => {
  const result = core.commonPrefix(['ababaa']);
  console.log(`result:`, result);
  expect(result).toEqual([11]);
});

test('aa', () => {
  const result = core.commonPrefix(['aa']);
  console.log(`result:`, result);
  expect(result).toEqual([3]);
});
