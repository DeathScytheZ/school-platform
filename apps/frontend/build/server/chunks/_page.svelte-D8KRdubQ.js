import './root-C2JWElUZ.js';
import './state.svelte-BbMZKH71.js';
import { A as AppHeader, a as AppFooter } from './AppFooter-B3HinNAJ.js';
import './renderer-DMLyUep1.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data: pageData } = $$props;
    $$renderer2.push(`<div class="page svelte-1stgtwu">`);
    AppHeader($$renderer2, {
      profile: pageData.profile,
      eyebrow: "Administration",
      title: "Registration Requests",
      subtitle: "Review, approve, or reject pending teacher and staff access requests.",
      backHref: "/system-admin-dashboard",
      backLabel: "← Dashboard"
    });
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="state-msg svelte-1stgtwu">Loading…</p>`);
    }
    $$renderer2.push(`<!--]--> `);
    AppFooter($$renderer2, { profile: pageData.profile, context: "Registration review" });
    $$renderer2.push(`<!----></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-D8KRdubQ.js.map
