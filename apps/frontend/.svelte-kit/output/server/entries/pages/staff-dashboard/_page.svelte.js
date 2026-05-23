import { e as escape_html } from "../../../chunks/escaping.js";
import "clsx";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props } = $$props;
    $$renderer2.push(`<div class="main-container"><h1>${escape_html(props.data.welcomeMessage)}</h1></div>`);
  });
}
export {
  _page as default
};
