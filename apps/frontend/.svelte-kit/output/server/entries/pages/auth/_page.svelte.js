import { e as escape_html } from "../../../chunks/renderer.js";
import "clsx";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props } = $$props;
    let isSignupSuccessful = props.data.isPending;
    $$renderer2.push(`<div class="auth-page svelte-1s728sz"><section class="auth-shell svelte-1s728sz"><div class="form-panel svelte-1s728sz"><a class="brand svelte-1s728sz" href="/auth" aria-label="School platform authentication"><span class="brand-mark svelte-1s728sz">S</span> <span>School Platform</span></a> `);
    if (props.form?.error) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="error-message svelte-1s728sz">${escape_html(props.form.error)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (isSignupSuccessful) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="panel-copy svelte-1s728sz"><p class="eyebrow svelte-1s728sz">Request received</p> <h1 class="svelte-1s728sz">Registration Pending</h1> <p class="svelte-1s728sz">Your request has been recorded and is being processed.</p> <p class="svelte-1s728sz">An admin will verify your credentials.</p></div> <form class="auth-form pending-form svelte-1s728sz" method="POST" action="?/newSignup"><button class="primary-button svelte-1s728sz" type="submit">Sign up as another user</button></form>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="panel-copy svelte-1s728sz"><p class="eyebrow svelte-1s728sz">Welcome back</p> <h1 class="svelte-1s728sz">Log in to your workspace</h1> <p class="svelte-1s728sz">Use your official ID and password to continue.</p></div> <form method="POST" action="?/login" class="auth-form login-container svelte-1s728sz"><div class="field svelte-1s728sz"><label for="loginOfficialId" class="svelte-1s728sz">Official ID</label> <input name="officialId" type="text" id="loginOfficialId" placeholder="Enter your official ID" class="svelte-1s728sz"/></div> <div class="field svelte-1s728sz"><label for="loginPassword" class="svelte-1s728sz">Password</label> <input name="password" type="password" id="loginPassword" placeholder="Enter your password" class="svelte-1s728sz"/></div> <button class="primary-button svelte-1s728sz" type="submit">Log in</button></form> <p class="switch-copy svelte-1s728sz">Don't have an account? <button type="button" class="link-button svelte-1s728sz">Sign up</button></p>`);
    }
    $$renderer2.push(`<!--]--></div> <aside class="visual-panel svelte-1s728sz" aria-hidden="true"><div class="visual-content svelte-1s728sz"><div class="glass-cube svelte-1s728sz"><span class="svelte-1s728sz"></span> <span class="svelte-1s728sz"></span> <span class="svelte-1s728sz"></span></div></div></aside></section></div>`);
  });
}
export {
  _page as default
};
