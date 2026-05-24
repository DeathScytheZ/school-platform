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
    $$renderer2.push(`<div class="page svelte-1fg6p3e">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Administration",
      title: "Announcements",
      subtitle: "Create and review general announcements for everyone.",
      backHref: "/system-admin-dashboard",
      backLabel: "← System Admin"
    });
    $$renderer2.push(`<!----> <section class="announcements-section svelte-1fg6p3e"><div class="section-heading svelte-1fg6p3e"><h2 class="svelte-1fg6p3e">General Announcements</h2> <span class="svelte-1fg6p3e">${escape_html(data.announcements?.length || 0)}</span></div> <div class="announcement-list svelte-1fg6p3e">`);
    const each_array = ensure_array_like(data.announcements || []);
    if (each_array.length !== 0) {
      $$renderer2.push("<!--[-->");
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let announcement = each_array[$$index];
        $$renderer2.push(`<article class="announcement-card svelte-1fg6p3e"><div class="announcement-top svelte-1fg6p3e"><h3 class="svelte-1fg6p3e">${escape_html(announcement.title)}</h3> <time class="svelte-1fg6p3e">${escape_html(new Date(announcement.date).toLocaleDateString())}</time></div> `);
        if (announcement.subject) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="subject svelte-1fg6p3e">${escape_html(announcement.subject)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <p class="svelte-1fg6p3e">${escape_html(announcement.description)}</p></article>`);
      }
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="empty-msg svelte-1fg6p3e">No announcements found.</p>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="form-card svelte-1fg6p3e"><h2 class="svelte-1fg6p3e">Create General Announcement</h2> <form method="POST" action="?/createGeneralAnnouncement"><div class="input-group svelte-1fg6p3e"><label for="general-title" class="svelte-1fg6p3e">Title</label> <input type="text" id="general-title" name="title" required="" class="svelte-1fg6p3e"/></div> <div class="input-group svelte-1fg6p3e"><label for="general-subject" class="svelte-1fg6p3e">Subject</label> <input type="text" id="general-subject" name="subject" class="svelte-1fg6p3e"/></div> <div class="input-group svelte-1fg6p3e"><label for="general-description" class="svelte-1fg6p3e">Description</label> <textarea id="general-description" name="description" rows="4" required="" class="svelte-1fg6p3e"></textarea></div> <div class="input-group svelte-1fg6p3e"><label for="general-date" class="svelte-1fg6p3e">Date</label> <input type="date" id="general-date" name="date" required="" class="svelte-1fg6p3e"/></div> <button type="submit" class="submit-btn svelte-1fg6p3e">Create General Announcement</button> `);
    if (form?.success && form?.action === "createGeneral") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="success-msg svelte-1fg6p3e">General announcement created successfully.</p>`);
    } else if (form?.error && form?.action === "createGeneral") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<p class="error-msg svelte-1fg6p3e">${escape_html(form.error)}</p>`);
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
