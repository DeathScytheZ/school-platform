import { a as ensure_array_like, e as escape_html } from "../../../../chunks/renderer.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/root.js";
import "../../../../chunks/state.svelte.js";
import { A as AppHeader, a as AppFooter } from "../../../../chunks/AppFooter.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form } = $$props;
    $$renderer2.push(`<div class="page svelte-5orzlg">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Administration",
      title: "Add Child",
      subtitle: "Register a new child into the system with their details.",
      backHref: "/system-admin-dashboard",
      backLabel: "← System Admin"
    });
    $$renderer2.push(`<!----> <section class="form-card svelte-5orzlg"><h2 class="svelte-5orzlg">Create Child</h2> <form method="POST" action="?/createChild"><div class="input-group svelte-5orzlg"><label for="child-officialId" class="svelte-5orzlg">Official ID</label> <input type="text" id="child-officialId" name="officialId" placeholder="ex: CHLD-1234" required="" class="svelte-5orzlg"/></div> <div class="input-group svelte-5orzlg"><label for="child-password" class="svelte-5orzlg">Password</label> <input type="password" id="child-password" name="password" required="" class="svelte-5orzlg"/></div> <div class="input-group svelte-5orzlg"><label for="child-firstName" class="svelte-5orzlg">First Name</label> <input type="text" id="child-firstName" name="firstName" required="" class="svelte-5orzlg"/></div> <div class="input-group svelte-5orzlg"><label for="child-lastName" class="svelte-5orzlg">Last Name</label> <input type="text" id="child-lastName" name="lastName" required="" class="svelte-5orzlg"/></div> <div class="input-group svelte-5orzlg"><label for="child-dateOfBirth" class="svelte-5orzlg">Date of Birth</label> <input type="date" id="child-dateOfBirth" name="dateOfBirth" required="" class="svelte-5orzlg"/></div> <div class="input-group svelte-5orzlg"><label for="child-level" class="svelte-5orzlg">Level</label> <input type="text" id="child-level" name="level" required="" class="svelte-5orzlg"/></div> <div class="input-group svelte-5orzlg"><label for="child-class" class="svelte-5orzlg">Class</label> <select id="child-class" name="classId" required="" class="svelte-5orzlg">`);
    $$renderer2.option({ value: "", disabled: true, selected: true }, ($$renderer3) => {
      $$renderer3.push(`Select a class`);
    });
    $$renderer2.push(`<!--[-->`);
    const each_array = ensure_array_like(data.classes || []);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let classItem = each_array[$$index];
      $$renderer2.option({ value: classItem.id }, ($$renderer3) => {
        $$renderer3.push(`${escape_html(classItem.name)} - ${escape_html(classItem.year)} - ${escape_html(classItem.level)}`);
      });
    }
    $$renderer2.push(`<!--]--></select></div> <div class="input-group svelte-5orzlg"><label for="child-medicalCondition" class="svelte-5orzlg">Medical Condition</label> <textarea id="child-medicalCondition" name="medicalCondition" rows="2" required="" class="svelte-5orzlg"></textarea></div> <button type="submit" class="submit-btn svelte-5orzlg">Create Child</button> `);
    if (form?.success && form?.action === "createChild") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="success-msg svelte-5orzlg">Child created successfully.</p>`);
    } else if (form?.error && form?.action === "createChild") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<p class="error-msg svelte-5orzlg">${escape_html(form.error)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></form></section> `);
    AppFooter($$renderer2, { profile: data.profile, context: "Child registration" });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
