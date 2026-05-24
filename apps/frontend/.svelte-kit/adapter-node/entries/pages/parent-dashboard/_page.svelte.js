import { a as ensure_array_like, b as attr_class, e as escape_html } from "../../../chunks/renderer.js";
import { A as AppHeader, a as AppFooter } from "../../../chunks/AppFooter.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let activeSection = "children";
    const navItems = [
      { id: "children", label: "My Children" },
      { id: "performance", label: "Performance" },
      { id: "behavior", label: "Behavior" },
      { id: "announcements", label: "Announcements" }
    ];
    $$renderer2.push(`<div class="dashboard svelte-15shsg4"><aside class="sidebar svelte-15shsg4"><div class="brand svelte-15shsg4"><span class="svelte-15shsg4">Parent</span> <strong class="svelte-15shsg4">Dashboard</strong></div> <nav class="svelte-15shsg4"><!--[-->`);
    const each_array = ensure_array_like(navItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<button type="button"${attr_class("svelte-15shsg4", void 0, { "active": activeSection === item.id })}>${escape_html(item.label)}</button>`);
    }
    $$renderer2.push(`<!--]--></nav></aside> <main class="content svelte-15shsg4">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Family Workspace",
      title: "Parent Dashboard",
      subtitle: "Review children, school notes, and announcements."
    });
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<section class="panel svelte-15shsg4"><div class="panel-heading svelte-15shsg4"><h2 class="svelte-15shsg4">My Children</h2> <span class="svelte-15shsg4">${escape_html(data.children?.length || 0)}</span></div> <div class="card-grid svelte-15shsg4">`);
      const each_array_1 = ensure_array_like(data.children || []);
      if (each_array_1.length !== 0) {
        $$renderer2.push("<!--[-->");
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let child = each_array_1[$$index_1];
          $$renderer2.push(`<article class="info-card svelte-15shsg4"><h3 class="svelte-15shsg4">${escape_html(child.first_name)} ${escape_html(child.last_name)}</h3> <dl class="svelte-15shsg4"><div><dt class="svelte-15shsg4">Level</dt> <dd class="svelte-15shsg4">${escape_html(child.level)}</dd></div> <div><dt class="svelte-15shsg4">Medical Condition</dt> <dd class="svelte-15shsg4">${escape_html(child.medicalCondition)}</dd></div></dl></article>`);
        }
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<p class="empty-msg svelte-15shsg4">No children found</p>`);
      }
      $$renderer2.push(`<!--]--></div></section>`);
    }
    $$renderer2.push(`<!--]--> `);
    AppFooter($$renderer2, { profile: data.profile, context: "Parent workspace" });
    $$renderer2.push(`<!----></main></div>`);
  });
}
export {
  _page as default
};
