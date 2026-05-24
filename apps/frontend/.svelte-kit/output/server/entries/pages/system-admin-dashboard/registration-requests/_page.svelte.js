import "clsx";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/root.js";
import "../../../../chunks/state.svelte.js";
import { A as AppHeader, a as AppFooter } from "../../../../chunks/AppFooter.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data: pageData } = $$props;
    $$renderer2.push(`<div class="page svelte-6qi9vk">`);
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
      $$renderer2.push(`<p class="state-msg svelte-6qi9vk">Loading…</p>`);
    }
    $$renderer2.push(`<!--]--> `);
    AppFooter($$renderer2, { profile: pageData.profile, context: "Registration review" });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
