import { Core } from './core';

const core = new Core();
const result = core.commonPrefix(['abcabcd', 'ababaa', 'aa']);
console.log(result);
