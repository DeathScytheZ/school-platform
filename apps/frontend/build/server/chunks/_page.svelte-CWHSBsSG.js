import { A as AppHeader, a as AppFooter } from './AppFooter-B3HinNAJ.js';
import './renderer-DMLyUep1.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="page svelte-z67w2b">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Administration",
      title: "System Admin",
      subtitle: "Select a section to manage school accounts, classes, and announcements."
    });
    $$renderer2.push(`<!----> <div class="grid svelte-z67w2b"><a href="/system-admin-dashboard/registration-requests" class="card svelte-z67w2b"><div class="card-icon svelte-z67w2b">RQ</div> <div class="card-body svelte-z67w2b"><h2 class="svelte-z67w2b">Registration Requests</h2> <p class="svelte-z67w2b">Review, approve, or reject pending staff and teacher registration requests.</p></div> <span class="card-arrow svelte-z67w2b">→</span></a> <a href="/system-admin-dashboard/users" class="card svelte-z67w2b"><div class="card-icon svelte-z67w2b">US</div> <div class="card-body svelte-z67w2b"><h2 class="svelte-z67w2b">User List</h2> <p class="svelte-z67w2b">Browse and search all registered users in the database.</p></div> <span class="card-arrow svelte-z67w2b">→</span></a> <a href="/system-admin-dashboard/add-child" class="card svelte-z67w2b"><div class="card-icon svelte-z67w2b">CH</div> <div class="card-body svelte-z67w2b"><h2 class="svelte-z67w2b">Add Child</h2> <p class="svelte-z67w2b">Register a new child into the system with their details.</p></div> <span class="card-arrow svelte-z67w2b">→</span></a> <a href="/system-admin-dashboard/add-parent" class="card svelte-z67w2b"><div class="card-icon svelte-z67w2b">PR</div> <div class="card-body svelte-z67w2b"><h2 class="svelte-z67w2b">Add Parent</h2> <p class="svelte-z67w2b">Register a new parent and link them to their children.</p></div> <span class="card-arrow svelte-z67w2b">→</span></a> <a href="/system-admin-dashboard/create-class" class="card svelte-z67w2b"><div class="card-icon svelte-z67w2b">CL</div> <div class="card-body svelte-z67w2b"><h2 class="svelte-z67w2b">Create Class</h2> <p class="svelte-z67w2b">Create a class and review existing class records.</p></div> <span class="card-arrow svelte-z67w2b">→</span></a> <a href="/system-admin-dashboard/announcements" class="card svelte-z67w2b"><div class="card-icon svelte-z67w2b">AN</div> <div class="card-body svelte-z67w2b"><h2 class="svelte-z67w2b">Announcements</h2> <p class="svelte-z67w2b">Create general announcements for everyone.</p></div> <span class="card-arrow svelte-z67w2b">→</span></a></div> `);
    AppFooter($$renderer2, {
      profile: data.profile,
      context: "System administration workspace"
    });
    $$renderer2.push(`<!----></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CWHSBsSG.js.map
