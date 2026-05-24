import { n as noop } from './renderer-DMLyUep1.js';
import './root-C2JWElUZ.js';

const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
const placeholder_url = "a:";
if (is_legacy) {
  ({
    url: new URL(placeholder_url)
  });
}
//# sourceMappingURL=state.svelte-BbMZKH71.js.map
