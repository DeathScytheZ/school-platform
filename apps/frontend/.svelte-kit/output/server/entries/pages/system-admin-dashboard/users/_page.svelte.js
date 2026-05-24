import { c as attr, a as ensure_array_like, b as attr_class, e as escape_html } from "../../../../chunks/renderer.js";
import { A as AppHeader, a as AppFooter } from "../../../../chunks/AppFooter.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let searchName = "";
    let searchId = "";
    let selectedRole = "all";
    const roles = ["all", "teacher", "staff"];
    $$renderer2.push(`<div class="page svelte-emalnu">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Administration",
      title: "Users",
      subtitle: "Browse and filter registered teacher and staff accounts.",
      backHref: "/system-admin-dashboard",
      backLabel: "← Dashboard"
    });
    $$renderer2.push(`<!----> <div class="filters svelte-emalnu"><input class="filter-input svelte-emalnu" type="text" placeholder="Search by name…"${attr("value", searchName)}/> <input class="filter-input svelte-emalnu" type="text" placeholder="Search by official ID…"${attr("value", searchId)}/> <div class="role-tabs svelte-emalnu"><!--[-->`);
    const each_array = ensure_array_like(roles);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let role = each_array[$$index];
      $$renderer2.push(`<button${attr_class("role-tab svelte-emalnu", void 0, { "active": selectedRole === role })}>${escape_html(role === "all" ? "All" : role.charAt(0).toUpperCase() + role.slice(1))}</button>`);
    }
    $$renderer2.push(`<!--]--></div></div> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="state-msg svelte-emalnu">Loading…</p>`);
    }
    $$renderer2.push(`<!--]--> `);
    AppFooter($$renderer2, { profile: data.profile, context: "User directory" });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
