import { n as noop } from './renderer-_nUXuel9.js';
import './root-DL9dihOr.js';

const is_legacy = noop.toString().includes("$$") || /function \w+\(\) \{\}/.test(noop.toString());
const placeholder_url = "a:";
if (is_legacy) {
  ({
    url: new URL(placeholder_url)
  });
}
//# sourceMappingURL=state.svelte-mv8Iu8-m.js.map
