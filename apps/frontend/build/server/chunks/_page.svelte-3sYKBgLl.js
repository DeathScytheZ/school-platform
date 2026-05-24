import { A as AppHeader, a as AppFooter } from './AppFooter-B3HinNAJ.js';
import './renderer-DMLyUep1.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="page svelte-qbrnu7">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Administration",
      title: "System Admin",
      subtitle: "Select a section to manage school accounts, classes, and announcements."
    });
    $$renderer2.push(`<!----> <div class="grid svelte-qbrnu7"><a href="/system-admin-dashboard/registration-requests" class="card svelte-qbrnu7"><div class="card-icon svelte-qbrnu7">RQ</div> <div class="card-body svelte-qbrnu7"><h2 class="svelte-qbrnu7">Registration Requests</h2> <p class="svelte-qbrnu7">Review, approve, or reject pending staff and teacher registration requests.</p></div> <span class="card-arrow svelte-qbrnu7">→</span></a> <a href="/system-admin-dashboard/users" class="card svelte-qbrnu7"><div class="card-icon svelte-qbrnu7">US</div> <div class="card-body svelte-qbrnu7"><h2 class="svelte-qbrnu7">User List</h2> <p class="svelte-qbrnu7">Browse and search all registered users in the database.</p></div> <span class="card-arrow svelte-qbrnu7">→</span></a> <a href="/system-admin-dashboard/add-child" class="card svelte-qbrnu7"><div class="card-icon svelte-qbrnu7">CH</div> <div class="card-body svelte-qbrnu7"><h2 class="svelte-qbrnu7">Add Child</h2> <p class="svelte-qbrnu7">Register a new child into the system with their details.</p></div> <span class="card-arrow svelte-qbrnu7">→</span></a> <a href="/system-admin-dashboard/add-parent" class="card svelte-qbrnu7"><div class="card-icon svelte-qbrnu7">PR</div> <div class="card-body svelte-qbrnu7"><h2 class="svelte-qbrnu7">Add Parent</h2> <p class="svelte-qbrnu7">Register a new parent and link them to their children.</p></div> <span class="card-arrow svelte-qbrnu7">→</span></a> <a href="/system-admin-dashboard/create-class" class="card svelte-qbrnu7"><div class="card-icon svelte-qbrnu7">CL</div> <div class="card-body svelte-qbrnu7"><h2 class="svelte-qbrnu7">Create Class</h2> <p class="svelte-qbrnu7">Create a class and review existing class records.</p></div> <span class="card-arrow svelte-qbrnu7">→</span></a> <a href="/system-admin-dashboard/announcements" class="card svelte-qbrnu7"><div class="card-icon svelte-qbrnu7">AN</div> <div class="card-body svelte-qbrnu7"><h2 class="svelte-qbrnu7">Announcements</h2> <p class="svelte-qbrnu7">Create general announcements for everyone.</p></div> <span class="card-arrow svelte-qbrnu7">→</span></a></div> `);
    AppFooter($$renderer2, {
      profile: data.profile,
      context: "System administration workspace"
    });
    $$renderer2.push(`<!----></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-3sYKBgLl.js.map
