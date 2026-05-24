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
    $$renderer2.push(`<div class="page svelte-geb7ir">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Staff Workspace",
      title: "School Announcements",
      subtitle: "Create announcements for staff and teachers.",
      backHref: "/staff-dashboard",
      backLabel: "← Staff Dashboard"
    });
    $$renderer2.push(`<!----> <section class="announcements-section svelte-geb7ir"><h2 class="svelte-geb7ir">Visible Announcements</h2> <div class="announcement-list svelte-geb7ir">`);
    const each_array = ensure_array_like(data.announcements || []);
    if (each_array.length !== 0) {
      $$renderer2.push("<!--[-->");
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let announcement = each_array[$$index];
        $$renderer2.push(`<article class="announcement-card svelte-geb7ir"><div class="announcement-top svelte-geb7ir"><h3 class="svelte-geb7ir">${escape_html(announcement.title)}</h3> <time class="svelte-geb7ir">${escape_html(new Date(announcement.date).toLocaleDateString())}</time></div> `);
        if (announcement.subject) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="subject svelte-geb7ir">${escape_html(announcement.subject)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <p class="svelte-geb7ir">${escape_html(announcement.description)}</p></article>`);
      }
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="empty-msg svelte-geb7ir">No announcements found.</p>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="form-card svelte-geb7ir"><h2 class="svelte-geb7ir">Create School Announcement</h2> <form method="POST" action="?/createSchoolAnnouncement"><div class="input-group svelte-geb7ir"><label for="school-title" class="svelte-geb7ir">Title</label> <input type="text" id="school-title" name="title" required="" class="svelte-geb7ir"/></div> <div class="input-group svelte-geb7ir"><label for="school-subject" class="svelte-geb7ir">Subject</label> <input type="text" id="school-subject" name="subject" class="svelte-geb7ir"/></div> <div class="input-group svelte-geb7ir"><label for="school-description" class="svelte-geb7ir">Description</label> <textarea id="school-description" name="description" rows="4" required="" class="svelte-geb7ir"></textarea></div> <div class="input-group svelte-geb7ir"><label for="school-date" class="svelte-geb7ir">Date</label> <input type="date" id="school-date" name="date" required="" class="svelte-geb7ir"/></div> <div class="input-group svelte-geb7ir"><label for="staffId" class="svelte-geb7ir">Staff ID</label> <input type="text" id="staffId" name="staffId" required="" class="svelte-geb7ir"/></div> <button type="submit" class="submit-btn svelte-geb7ir">Create School Announcement</button> `);
    if (form?.success && form?.action === "createSchool") {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="success-msg svelte-geb7ir">School announcement created successfully.</p>`);
    } else if (form?.error && form?.action === "createSchool") {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<p class="error-msg svelte-geb7ir">${escape_html(form.error)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></form></section> `);
    AppFooter($$renderer2, { profile: data.profile, context: "School announcements" });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
