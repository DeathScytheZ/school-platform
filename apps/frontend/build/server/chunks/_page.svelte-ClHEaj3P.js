import { f as ensure_array_like, c as escape_html } from './renderer-DMLyUep1.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const features = [
      {
        title: "Unified dashboards",
        description: "Teachers, staff, parents, and students each get a workspace tailored to their role."
      },
      {
        title: "Grades & progress",
        description: "Track academic performance, behavior, and remarks in one secure place."
      },
      {
        title: "School-wide communication",
        description: "Announcements and updates reach the right people at the right time."
      }
    ];
    $$renderer2.push(`<div class="landing svelte-1sin4ra"><header class="site-header svelte-1sin4ra"><a class="brand svelte-1sin4ra" href="/" aria-label="School Platform home"><span class="brand-mark svelte-1sin4ra">S</span> <span>School Platform</span></a> <nav class="header-nav svelte-1sin4ra" aria-label="Account access"><a class="nav-link svelte-1sin4ra" href="/auth">Log in</a> <a class="nav-cta svelte-1sin4ra" href="/auth?mode=signup">Sign up</a></nav></header> <main class="svelte-1sin4ra"><section class="hero svelte-1sin4ra"><div class="hero-copy"><p class="eyebrow svelte-1sin4ra">School management, simplified</p> <h1 class="svelte-1sin4ra">One platform for your entire school community</h1> <p class="lead svelte-1sin4ra">Manage classes, grades, and communication with a modern workspace built for
                    teachers, staff, parents, and students.</p> <div class="hero-actions svelte-1sin4ra"><a class="primary-button svelte-1sin4ra" href="/auth">Log in</a> <a class="secondary-button svelte-1sin4ra" href="/auth?mode=signup">Request access</a></div> <ul class="hero-stats svelte-1sin4ra" aria-label="Platform highlights"><li class="svelte-1sin4ra"><strong class="svelte-1sin4ra">Secure</strong> <span class="svelte-1sin4ra">Role-based access</span></li> <li class="svelte-1sin4ra"><strong class="svelte-1sin4ra">Connected</strong> <span class="svelte-1sin4ra">Parents &amp; staff aligned</span></li> <li class="svelte-1sin4ra"><strong class="svelte-1sin4ra">Clear</strong> <span class="svelte-1sin4ra">Grades &amp; updates in one view</span></li></ul></div> <aside class="hero-visual svelte-1sin4ra" aria-hidden="true"><div class="visual-panel svelte-1sin4ra"><div class="visual-content svelte-1sin4ra"><div class="glass-cube svelte-1sin4ra"><span class="svelte-1sin4ra"></span> <span class="svelte-1sin4ra"></span> <span class="svelte-1sin4ra"></span></div></div> <div class="floating-card card-one svelte-1sin4ra"><span class="card-label svelte-1sin4ra">Grades</span> <span class="card-value svelte-1sin4ra">18.5</span></div> <div class="floating-card card-two svelte-1sin4ra"><span class="card-label svelte-1sin4ra">Announcements</span> <span class="card-dot svelte-1sin4ra"></span></div></div></aside></section> <section class="features svelte-1sin4ra" aria-labelledby="features-heading"><div class="features-intro svelte-1sin4ra"><p class="eyebrow svelte-1sin4ra">Why School Platform</p> <h2 id="features-heading" class="svelte-1sin4ra">Everything your school needs, in one place</h2></div> <div class="feature-grid svelte-1sin4ra"><!--[-->`);
    const each_array = ensure_array_like(features);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let feature = each_array[$$index];
      $$renderer2.push(`<article class="feature-card svelte-1sin4ra"><h3 class="svelte-1sin4ra">${escape_html(feature.title)}</h3> <p class="svelte-1sin4ra">${escape_html(feature.description)}</p></article>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="cta-band svelte-1sin4ra"><div class="cta-inner svelte-1sin4ra"><h2 class="svelte-1sin4ra">Ready to get started?</h2> <p class="svelte-1sin4ra">Sign in with your official ID or request a new account for admin approval.</p> <div class="cta-actions svelte-1sin4ra"><a class="primary-button svelte-1sin4ra" href="/auth">Log in</a> <a class="secondary-button light svelte-1sin4ra" href="/auth?mode=signup">Create an account</a></div></div></section></main> <footer class="site-footer svelte-1sin4ra"><a class="brand svelte-1sin4ra" href="/" aria-label="School Platform home"><span class="brand-mark svelte-1sin4ra">S</span> <span>School Platform</span></a> <p class="svelte-1sin4ra">© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} School Platform. All rights reserved.</p></footer></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-ClHEaj3P.js.map
