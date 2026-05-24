import { e as escape_html, a as ensure_array_like } from "../../../chunks/renderer.js";
import { A as AppHeader, a as AppFooter } from "../../../chunks/AppFooter.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    $$renderer2.push(`<div class="page svelte-ecl5pc"><div class="header-actions svelte-ecl5pc">`);
    AppHeader($$renderer2, {
      profile: data.profile,
      eyebrow: "Staff Workspace",
      title: "Staff Dashboard",
      subtitle: "Review announcements and create school-wide staff updates."
    });
    $$renderer2.push(`<!----> <a class="create-link svelte-ecl5pc" href="/staff-dashboard/announcements">Create School Announcement</a></div> <section class="announcements-section svelte-ecl5pc"><div class="section-heading svelte-ecl5pc"><h2 class="svelte-ecl5pc">Announcements</h2> <span class="svelte-ecl5pc">${escape_html(data.announcements?.length || 0)}</span></div> <div class="announcement-list svelte-ecl5pc">`);
    const each_array = ensure_array_like(data.announcements || []);
    if (each_array.length !== 0) {
      $$renderer2.push("<!--[-->");
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let announcement = each_array[$$index];
        $$renderer2.push(`<article class="announcement-card svelte-ecl5pc"><div class="announcement-top svelte-ecl5pc"><h3 class="svelte-ecl5pc">${escape_html(announcement.title)}</h3> <time class="svelte-ecl5pc">${escape_html(new Date(announcement.date).toLocaleDateString())}</time></div> `);
        if (announcement.subject) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="subject svelte-ecl5pc">${escape_html(announcement.subject)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <p class="svelte-ecl5pc">${escape_html(announcement.description)}</p></article>`);
      }
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<p class="empty-msg svelte-ecl5pc">No announcements found.</p>`);
    }
    $$renderer2.push(`<!--]--></div></section> `);
    AppFooter($$renderer2, { profile: data.profile, context: "Staff workspace" });
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  _page as default
};
