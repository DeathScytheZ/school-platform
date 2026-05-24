import { e as escape_html, a as ensure_array_like } from "../../../chunks/renderer.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/root.js";
import "../../../chunks/state.svelte.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props } = $$props;
    let showSignup = props.data.showSignup ?? false;
    let isSignupSuccessful = props.data.isPending;
    let role = "teacher";
    const roleOptions = [
      { value: "teacher", name: "teacher" },
      { value: "staff", name: "staff" }
    ];
    const subjectOptions = [
      { value: "school-teacher", name: "school-teacher" },
      { value: "sports-coach", name: "sports-coach" },
      { value: "quran", name: "quran" }
    ];
    $$renderer2.push(`<div class="auth-page svelte-ij5xw7"><section class="auth-shell svelte-ij5xw7"><div class="form-panel svelte-ij5xw7"><a class="brand svelte-ij5xw7" href="/auth" aria-label="School platform authentication"><span class="brand-mark svelte-ij5xw7">S</span> <span>School Platform</span></a> `);
    if (props.form?.error) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<p class="error-message svelte-ij5xw7">${escape_html(props.form.error)}</p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (isSignupSuccessful) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="panel-copy svelte-ij5xw7"><p class="eyebrow svelte-ij5xw7">Request received</p> <h1 class="svelte-ij5xw7">Registration Pending</h1> <p class="svelte-ij5xw7">Your request has been recorded and is being processed.</p> <p class="svelte-ij5xw7">An admin will verify your credentials.</p></div> <form class="auth-form pending-form svelte-ij5xw7" method="POST" action="?/newSignup"><button class="primary-button svelte-ij5xw7" type="submit">Sign up as another user</button></form>`);
    } else if (showSignup) {
      $$renderer2.push("<!--[1-->");
      $$renderer2.push(`<div class="panel-copy svelte-ij5xw7"><p class="eyebrow svelte-ij5xw7">Create access</p> <h1 class="svelte-ij5xw7">Request an account</h1> <p class="svelte-ij5xw7">Submit your staff details for system admin approval.</p></div> <form class="auth-form signup-container svelte-ij5xw7" method="POST" action="?/signup"><div class="field svelte-ij5xw7"><label for="officialId" class="svelte-ij5xw7">Official ID</label> <input name="officialId" type="text" placeholder="TRN-7895-Q7U3" id="officialId" class="svelte-ij5xw7"/></div> <div class="field svelte-ij5xw7"><label for="signupPassword" class="svelte-ij5xw7">Password</label> <input name="password" type="password" placeholder="Enter a secure password" id="signupPassword" class="svelte-ij5xw7"/></div> <div class="field-grid svelte-ij5xw7"><div class="field svelte-ij5xw7"><label for="firstName" class="svelte-ij5xw7">First name</label> <input name="firstName" type="text" placeholder="First name" id="firstName" class="svelte-ij5xw7"/></div> <div class="field svelte-ij5xw7"><label for="lastName" class="svelte-ij5xw7">Last name</label> <input name="lastName" type="text" placeholder="Last name" id="lastName" class="svelte-ij5xw7"/></div></div> <div class="field svelte-ij5xw7"><label for="dateOfBirth" class="svelte-ij5xw7">Date of birth</label> <input name="dateOfBirth" type="date" id="dateOfBirth" class="svelte-ij5xw7"/></div> <div class="field-grid svelte-ij5xw7"><div class="field svelte-ij5xw7"><label for="phone" class="svelte-ij5xw7">Phone number</label> <input name="phone" type="tel" placeholder="0512345678" id="phone" class="svelte-ij5xw7"/></div> <div class="field svelte-ij5xw7"><label for="email" class="svelte-ij5xw7">Email</label> <input name="email" type="email" placeholder="name@example.com" id="email" class="svelte-ij5xw7"/></div></div> <div class="field svelte-ij5xw7"><label for="role" class="svelte-ij5xw7">Role</label> `);
      $$renderer2.select(
        { name: "role", id: "role", value: role, class: "" },
        ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(roleOptions);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let opt = each_array[$$index];
            $$renderer3.option({ value: opt.value }, ($$renderer4) => {
              $$renderer4.push(`${escape_html(opt.name)}`);
            });
          }
          $$renderer3.push(`<!--]-->`);
        },
        "svelte-ij5xw7"
      );
      $$renderer2.push(`</div> `);
      {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="field svelte-ij5xw7"><label for="subject" class="svelte-ij5xw7">Subject</label> <select name="subject" id="subject" class="svelte-ij5xw7"><!--[-->`);
        const each_array_1 = ensure_array_like(subjectOptions);
        for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
          let sub = each_array_1[$$index_1];
          $$renderer2.option({ value: sub.value }, ($$renderer3) => {
            $$renderer3.push(`${escape_html(sub.name)}`);
          });
        }
        $$renderer2.push(`<!--]--></select></div>`);
      }
      $$renderer2.push(`<!--]--> <button class="primary-button svelte-ij5xw7" id="submit-button" type="submit">Submit request</button></form> <p class="switch-copy svelte-ij5xw7">Already have an account? <button type="button" class="link-button svelte-ij5xw7">Log in</button></p>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="panel-copy svelte-ij5xw7"><p class="eyebrow svelte-ij5xw7">Welcome back</p> <h1 class="svelte-ij5xw7">Log in to your workspace</h1> <p class="svelte-ij5xw7">Use your official ID and password to continue.</p></div> <form method="POST" action="?/login" class="auth-form login-container svelte-ij5xw7"><div class="field svelte-ij5xw7"><label for="loginOfficialId" class="svelte-ij5xw7">Official ID</label> <input name="officialId" type="text" id="loginOfficialId" placeholder="Enter your official ID" class="svelte-ij5xw7"/></div> <div class="field svelte-ij5xw7"><label for="loginPassword" class="svelte-ij5xw7">Password</label> <input name="password" type="password" id="loginPassword" placeholder="Enter your password" class="svelte-ij5xw7"/></div> <button class="primary-button svelte-ij5xw7" type="submit">Log in</button></form> <p class="switch-copy svelte-ij5xw7">Don't have an account? <button type="button" class="link-button svelte-ij5xw7">Sign up</button></p>`);
    }
    $$renderer2.push(`<!--]--></div> <aside class="visual-panel svelte-ij5xw7" aria-hidden="true"><div class="visual-content svelte-ij5xw7"><div class="glass-cube svelte-ij5xw7"><span class="svelte-ij5xw7"></span> <span class="svelte-ij5xw7"></span> <span class="svelte-ij5xw7"></span></div></div></aside></section></div>`);
  });
}
export {
  _page as default
};
