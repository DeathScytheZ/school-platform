import { e as ensure_array_like, a as attr, d as derived } from "../../../../chunks/renderer.js";
import { e as escape_html } from "../../../../chunks/escaping.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/root.js";
import "../../../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data, form } = $$props;
    let children = derived(() => data.children || []);
    $$renderer2.push(`<div class="page svelte-c8klt2"><header class="svelte-c8klt2"><a class="back-link svelte-c8klt2" href="/system-admin-dashboard">← System Admin</a> <h1 class="svelte-c8klt2">Add Parent</h1> <p class="svelte-c8klt2">Register a new parent and link them to children.</p></header> <section class="form-card svelte-c8klt2"><h2 class="svelte-c8klt2">Create Parent</h2> <form method="POST" action="?/createParent"><div class="input-group svelte-c8klt2"><label for="parent-officialId" class="svelte-c8klt2">Official ID</label> <input type="text" id="parent-officialId" name="officialId" placeholder="ex: PRNT-5678" required="" class="svelte-c8klt2"/></div> <div class="input-group svelte-c8klt2"><label for="parent-password" class="svelte-c8klt2">Password</label> <input type="password" id="parent-password" name="password" required="" class="svelte-c8klt2"/></div> <div class="input-group svelte-c8klt2"><label for="parent-firstName" class="svelte-c8klt2">First Name</label> <input type="text" id="parent-firstName" name="firstName" required="" class="svelte-c8klt2"/></div> <div class="input-group svelte-c8klt2"><label for="parent-lastName" class="svelte-c8klt2">Last Name</label> <input type="text" id="parent-lastName" name="lastName" required="" class="svelte-c8klt2"/></div> <div class="input-group svelte-c8klt2"><label for="parent-dateOfBirth" class="svelte-c8klt2">Date of Birth</label> <input type="date" id="parent-dateOfBirth" name="dateOfBirth" required="" class="svelte-c8klt2"/></div> <div class="input-group svelte-c8klt2"><label for="parent-wilaya" class="svelte-c8klt2">Wilaya</label> <input type="text" id="parent-wilaya" name="wilaya" required="" class="svelte-c8klt2"/></div> <div class="input-group svelte-c8klt2"><label for="parent-commune" class="svelte-c8klt2">Commune</label> <input type="text" id="parent-commune" name="commune" required="" class="svelte-c8klt2"/></div> <div class="children-selection svelte-c8klt2"><h3 class="svelte-c8klt2">Select Children</h3> <div class="children-list svelte-c8klt2">`);
    const each_array = ensure_array_like(children());
    if (each_array.length !== 0) {
      $$renderer2.push("<!--[-->");
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let child = each_array[$$index];
        $$renderer2.push(`<label class="checkbox-label svelte-c8klt2"><input type="checkbox" name="childIds"${attr("value", child.id)} class="svelte-c8klt2"/> <span>${escape_html(child.first_name)} ${escape_html(child.last_name)}</span></label>`);
      }
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="empty-msg svelte-c8klt2">No children found</p>`);
    }
    $$renderer2.push(`<!--]--></div></div> <button type="submit" class="submit-btn svelte-c8klt2">Create Parent</button> `);
    if (form?.success && form?.action === "createParent") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="success-msg svelte-c8klt2">Parent created successfully.</p>`);
    } else if (form?.error && form?.action === "createParent") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<p class="error-msg svelte-c8klt2">${escape_html(form.error)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></form></section></div>`);
  });
}
export {
  _page as default
};
