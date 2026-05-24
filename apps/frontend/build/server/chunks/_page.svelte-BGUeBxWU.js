import { f as ensure_array_like, h as attr_class, c as escape_html } from './renderer-DMLyUep1.js';
import './root-C2JWElUZ.js';
import './state.svelte-BbMZKH71.js';
import { A as AppHeader, a as AppFooter } from './AppFooter-B3HinNAJ.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form } = $$props;
    let activeSection = "students";
    const navItems = [
      { id: "students", label: "My Students" },
      { id: "performance", label: "Performance" },
      { id: "behavior", label: "Behavior" },
      { id: "grades", label: "Grades" }
    ];
    $$renderer2.push(`<div class="dashboard svelte-eigaem"><aside class="sidebar svelte-eigaem"><div class="brand svelte-eigaem"><span class="svelte-eigaem">Teacher</span> <strong class="svelte-eigaem">Dashboard</strong></div> <nav class="svelte-eigaem"><!--[-->`);
    const each_array = ensure_array_like(navItems);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let item = each_array[$$index];
      $$renderer2.push(`<button type="button"${attr_class("svelte-eigaem", void 0, { "active": activeSection === item.id })}>${escape_html(item.label)}</button>`);
    }
    $$renderer2.push(`<!--]--></nav></aside> <main class="content svelte-eigaem">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Teacher Workspace",
      title: "Teacher Dashboard",
      subtitle: "Manage students, performance remarks, and behavior notes."
    });
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<section class="panel svelte-eigaem"><div class="panel-heading svelte-eigaem"><h2 class="svelte-eigaem">My Students</h2> <span class="svelte-eigaem">${escape_html(data.students?.length || 0)}</span></div> <div class="table-wrap svelte-eigaem"><table class="svelte-eigaem"><thead><tr><th class="svelte-eigaem">First Name</th><th class="svelte-eigaem">Last Name</th></tr></thead><tbody>`);
      const each_array_1 = ensure_array_like(data.students || []);
      if (each_array_1.length !== 0) {
        $$renderer2.push("<!--[-->");
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let student = each_array_1[$$index_1];
          $$renderer2.push(`<tr><td class="svelte-eigaem">${escape_html(student.first_name)}</td><td class="svelte-eigaem">${escape_html(student.last_name)}</td></tr>`);
        }
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<tr><td colspan="2" class="empty-cell svelte-eigaem">No students found</td></tr>`);
      }
      $$renderer2.push(`<!--]--></tbody></table></div></section>`);
    }
    $$renderer2.push(`<!--]--> `);
    AppFooter($$renderer2, { profile: data.profile, context: "Teacher workspace" });
    $$renderer2.push(`<!----></main></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-BGUeBxWU.js.map
