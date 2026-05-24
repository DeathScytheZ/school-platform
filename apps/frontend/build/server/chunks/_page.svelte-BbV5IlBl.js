import { f as ensure_array_like, h as attr_class, c as escape_html } from './renderer-DMLyUep1.js';
import { A as AppHeader, a as AppFooter } from './AppFooter-B3HinNAJ.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    let activeSection = "overview";
    const navItems = [
      { id: "overview", label: "Overview" },
      { id: "grades", label: "Grades" },
      { id: "performance", label: "Performance" },
      { id: "behavior", label: "Behavior" },
      { id: "announcements", label: "Announcements" }
    ];
    $$renderer2.push(`<div class="dashboard svelte-932jew"><aside class="sidebar svelte-932jew"><div class="brand svelte-932jew"><span class="svelte-932jew">Student</span> <strong class="svelte-932jew">Dashboard</strong></div> <nav class="svelte-932jew"><!--[-->`);
    const each_array = ensure_array_like(navItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<button type="button"${attr_class("svelte-932jew", void 0, { "active": activeSection === item.id })}>${escape_html(item.label)}</button>`);
    }
    $$renderer2.push(`<!--]--></nav></aside> <main class="content svelte-932jew">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Student Workspace",
      title: "Student Dashboard",
      subtitle: "Review your grades, notes, and school announcements."
    });
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<section class="panel svelte-932jew"><div class="panel-heading svelte-932jew"><h2 class="svelte-932jew">My Profile</h2></div> `);
      if (data.child) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<article class="info-card svelte-932jew"><h3 class="svelte-932jew">${escape_html(data.child.first_name)} ${escape_html(data.child.last_name)}</h3> <dl class="svelte-932jew"><div><dt class="svelte-932jew">Level</dt> <dd class="svelte-932jew">${escape_html(data.child.level)}</dd></div> <div><dt class="svelte-932jew">Medical Condition</dt> <dd class="svelte-932jew">${escape_html(data.child.medicalCondition || "None recorded")}</dd></div></dl></article>`);
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<p class="empty-msg svelte-932jew">No student profile found</p>`);
      }
      $$renderer2.push(`<!--]--></section>`);
    }
    $$renderer2.push(`<!--]--> `);
    AppFooter($$renderer2, { profile: data.profile, context: "Student workspace" });
    $$renderer2.push(`<!----></main></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BbV5IlBl.js.map
