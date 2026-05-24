import { e as escape_html, a as ensure_array_like } from "../../../../chunks/renderer.js";
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
    $$renderer2.push(`<div class="page svelte-q6q9po">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Administration",
      title: "Announcements",
      subtitle: "Create and review general announcements for everyone.",
      backHref: "/system-admin-dashboard",
      backLabel: "← System Admin"
    });
    $$renderer2.push(`<!----> <section class="announcements-section svelte-q6q9po"><div class="section-heading svelte-q6q9po"><h2 class="svelte-q6q9po">General Announcements</h2> <span class="svelte-q6q9po">${escape_html(data.announcements?.length || 0)}</span></div> <div class="announcement-list svelte-q6q9po">`);
    const each_array = ensure_array_like(data.announcements || []);
    if (each_array.length !== 0) {
      $$renderer2.push("<!--[-->");
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let announcement = each_array[$$index];
        $$renderer2.push(`<article class="announcement-card svelte-q6q9po"><div class="announcement-top svelte-q6q9po"><h3 class="svelte-q6q9po">${escape_html(announcement.title)}</h3> <time class="svelte-q6q9po">${escape_html(new Date(announcement.date).toLocaleDateString())}</time></div> `);
        if (announcement.subject) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="subject svelte-q6q9po">${escape_html(announcement.subject)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <p class="svelte-q6q9po">${escape_html(announcement.description)}</p></article>`);
      }
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="empty-msg svelte-q6q9po">No announcements found.</p>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="form-card svelte-q6q9po"><h2 class="svelte-q6q9po">Create General Announcement</h2> <form method="POST" action="?/createGeneralAnnouncement"><div class="input-group svelte-q6q9po"><label for="general-title" class="svelte-q6q9po">Title</label> <input type="text" id="general-title" name="title" required="" class="svelte-q6q9po"/></div> <div class="input-group svelte-q6q9po"><label for="general-subject" class="svelte-q6q9po">Subject</label> <input type="text" id="general-subject" name="subject" class="svelte-q6q9po"/></div> <div class="input-group svelte-q6q9po"><label for="general-description" class="svelte-q6q9po">Description</label> <textarea id="general-description" name="description" rows="4" required="" class="svelte-q6q9po"></textarea></div> <div class="input-group svelte-q6q9po"><label for="general-date" class="svelte-q6q9po">Date</label> <input type="date" id="general-date" name="date" required="" class="svelte-q6q9po"/></div> <button type="submit" class="submit-btn svelte-q6q9po">Create General Announcement</button> `);
    if (form?.success && form?.action === "createGeneral") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="success-msg svelte-q6q9po">General announcement created successfully.</p>`);
    } else if (form?.error && form?.action === "createGeneral") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<p class="error-msg svelte-q6q9po">${escape_html(form.error)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></form></section> `);
    AppFooter($$renderer2, { profile: data.profile, context: "General announcements" });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
