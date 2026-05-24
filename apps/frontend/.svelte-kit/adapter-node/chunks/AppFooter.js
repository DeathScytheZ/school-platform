import { c as attr, e as escape_html, d as derived } from "./renderer.js";
function AppHeader($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      profile = null,
      title = "Dashboard",
      subtitle = "",
      eyebrow = "School Platform",
      backHref = "",
      backLabel = "Back"
    } = $$props;
    const roleLabels = {
      admin: "System Admin",
      teacher: "Teacher",
      staff: "Staff",
      parent: "Parent",
      child: "Student"
    };
    const detailLabels = {
      school: "School Teacher",
      quran: "Quran Teacher",
      sport: "Sports Coach",
      "school-teacher": "School Teacher",
      "sports-coach": "Sports Coach",
      headmaster: "Headmaster",
      principle: "Principal",
      principal: "Principal",
      counselor: "Counselor"
    };
    const displayName = derived(() => profile?.firstName && profile?.lastName ? `${profile.firstName} ${profile.lastName}` : profile?.firstName || profile?.lastName || roleLabels[profile?.role] || "User");
    const roleLabel = derived(() => roleLabels[profile?.role] || profile?.role || "Guest");
    const rawDetail = derived(() => profile?.teacherSubject || profile?.staffPosition || profile?.childLevel || (profile?.parentWilaya && profile?.parentCommune ? `${profile.parentWilaya}, ${profile.parentCommune}` : profile?.parentWilaya));
    const detailLabel = derived(() => detailLabels[rawDetail()] || rawDetail() || "");
    const initials = derived(() => displayName().split(" ").filter(Boolean).slice(0, 2).map((part) => part[0]).join("").toUpperCase() || "U");
    $$renderer2.push(`<header class="app-header svelte-isll26"><div class="header-main svelte-isll26">`);
    if (backHref) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<a class="back-link svelte-isll26"${attr("href", backHref)}>${escape_html(backLabel)}</a>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <p class="eyebrow svelte-isll26">${escape_html(eyebrow)}</p> <h1 class="svelte-isll26">${escape_html(title)}</h1> `);
    if (subtitle) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="subtitle svelte-isll26">${escape_html(subtitle)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="profile-card svelte-isll26"><div class="avatar svelte-isll26">${escape_html(initials())}</div> <div><strong class="svelte-isll26">${escape_html(displayName())}</strong> <span class="svelte-isll26">${escape_html(roleLabel())}${escape_html(detailLabel() ? ` - ${detailLabel()}` : "")}</span></div></div></header>`);
  });
}
function AppFooter($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { profile = null, context = "School Platform" } = $$props;
    const name = derived(() => profile?.firstName && profile?.lastName ? `${profile.firstName} ${profile.lastName}` : profile?.firstName || profile?.lastName || profile?.officialId || "Current session");
    $$renderer2.push(`<footer class="app-footer svelte-3mageo"><span>${escape_html(context)}</span> <span>${escape_html(name())}</span></footer>`);
  });
}
export {
  AppHeader as A,
  AppFooter as a
};
