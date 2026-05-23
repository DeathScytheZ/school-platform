import { e as escape_html } from './escaping-CqgfEcN3.js';
import './root-DL9dihOr.js';
import './state.svelte-mv8Iu8-m.js';
import './renderer-_nUXuel9.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { form } = $$props;
    $$renderer2.push(`<div class="page svelte-1huw90i"><header class="svelte-1huw90i"><a class="back-link svelte-1huw90i" href="/system-admin-dashboard">← System Admin</a> <h1 class="svelte-1huw90i">Add Child</h1> <p class="svelte-1huw90i">Register a new child into the system with their details.</p></header> <section class="form-card svelte-1huw90i"><h2 class="svelte-1huw90i">Create Child</h2> <form method="POST" action="?/createChild"><div class="input-group svelte-1huw90i"><label for="child-officialId" class="svelte-1huw90i">Official ID</label> <input type="text" id="child-officialId" name="officialId" placeholder="ex: CHLD-1234" required="" class="svelte-1huw90i"/></div> <div class="input-group svelte-1huw90i"><label for="child-password" class="svelte-1huw90i">Password</label> <input type="password" id="child-password" name="password" required="" class="svelte-1huw90i"/></div> <div class="input-group svelte-1huw90i"><label for="child-firstName" class="svelte-1huw90i">First Name</label> <input type="text" id="child-firstName" name="firstName" required="" class="svelte-1huw90i"/></div> <div class="input-group svelte-1huw90i"><label for="child-lastName" class="svelte-1huw90i">Last Name</label> <input type="text" id="child-lastName" name="lastName" required="" class="svelte-1huw90i"/></div> <div class="input-group svelte-1huw90i"><label for="child-dateOfBirth" class="svelte-1huw90i">Date of Birth</label> <input type="date" id="child-dateOfBirth" name="dateOfBirth" required="" class="svelte-1huw90i"/></div> <div class="input-group svelte-1huw90i"><label for="child-level" class="svelte-1huw90i">Level</label> <input type="text" id="child-level" name="level" required="" class="svelte-1huw90i"/></div> <div class="input-group svelte-1huw90i"><label for="child-medicalCondition" class="svelte-1huw90i">Medical Condition</label> <textarea id="child-medicalCondition" name="medicalCondition" rows="2" required="" class="svelte-1huw90i"></textarea></div> <button type="submit" class="submit-btn svelte-1huw90i">Create Child</button> `);
    if (form?.success && form?.action === "createChild") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="success-msg svelte-1huw90i">Child created successfully.</p>`);
    } else if (form?.error && form?.action === "createChild") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<p class="error-msg svelte-1huw90i">${escape_html(form.error)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></form></section></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DscxD5Kw.js.map
