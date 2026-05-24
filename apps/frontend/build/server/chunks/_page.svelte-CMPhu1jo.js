import { c as escape_html, f as ensure_array_like } from './renderer-DMLyUep1.js';
import './root-C2JWElUZ.js';
import './state.svelte-BbMZKH71.js';
import { A as AppHeader, a as AppFooter } from './AppFooter-B3HinNAJ.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form } = $$props;
    $$renderer2.push(`<div class="page svelte-1mqui6d">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Administration",
      title: "Create Class",
      subtitle: "Create a class and review existing class records.",
      backHref: "/system-admin-dashboard",
      backLabel: "← System Admin"
    });
    $$renderer2.push(`<!----> <section class="class-section svelte-1mqui6d"><div class="form-card svelte-1mqui6d"><h2 class="svelte-1mqui6d">Create Class</h2> <form method="POST" action="?/createClass"><div class="form-grid svelte-1mqui6d"><div class="input-group svelte-1mqui6d"><label for="class-name" class="svelte-1mqui6d">Name</label> <input type="text" id="class-name" name="name" required="" class="svelte-1mqui6d"/></div> <div class="input-group svelte-1mqui6d"><label for="class-year" class="svelte-1mqui6d">Year</label> <input type="text" id="class-year" name="year" required="" class="svelte-1mqui6d"/></div> <div class="input-group svelte-1mqui6d"><label for="class-level" class="svelte-1mqui6d">Level</label> <input type="text" id="class-level" name="level" required="" class="svelte-1mqui6d"/></div></div> <button type="submit" class="submit-btn svelte-1mqui6d">Create Class</button> `);
    if (form?.success && form?.action === "createClass") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="success-msg svelte-1mqui6d">Class created successfully.</p>`);
    } else if (form?.error && form?.action === "createClass") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<p class="error-msg svelte-1mqui6d">${escape_html(form.error)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></form></div> <div class="table-card svelte-1mqui6d"><h2 class="svelte-1mqui6d">Classes</h2> <div class="table-wrap svelte-1mqui6d"><table class="svelte-1mqui6d"><thead><tr><th class="svelte-1mqui6d">Name</th><th class="svelte-1mqui6d">Year</th><th class="svelte-1mqui6d">Level</th></tr></thead><tbody>`);
    const each_array = ensure_array_like(data.classes || []);
    if (each_array.length !== 0) {
      $$renderer2.push("<!--[-->");
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let classItem = each_array[$$index];
        $$renderer2.push(`<tr><td class="svelte-1mqui6d">${escape_html(classItem.name)}</td><td class="svelte-1mqui6d">${escape_html(classItem.year)}</td><td class="svelte-1mqui6d">${escape_html(classItem.level)}</td></tr>`);
      }
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<tr><td colspan="3" class="empty-cell svelte-1mqui6d">No classes found</td></tr>`);
    }
    $$renderer2.push(`<!--]--></tbody></table></div></div></section> `);
    AppFooter($$renderer2, { profile: data.profile, context: "Class management" });
    $$renderer2.push(`<!----></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CMPhu1jo.js.map
