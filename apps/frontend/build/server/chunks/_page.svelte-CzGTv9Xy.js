import { e as escape_html } from './escaping-CqgfEcN3.js';
import './root-DL9dihOr.js';
import './state.svelte-mv8Iu8-m.js';
import './renderer-_nUXuel9.js';

function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const { $$slots, $$events, ...props } = $$props;
    let isSignupSuccessful = props.data.isPending;
    $$renderer2.push(`<div class="main-container svelte-1s728sz">`);
    if (props.form?.error) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`${escape_html(props.form.error)}`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> `);
    if (isSignupSuccessful) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="pending-container"><h1>Registration Pending</h1> <p id="ii">your request has been recorded and is being processed</p> <p>an admin will verify your credentials</p> <hr/> <p style="font-size: 0.8rem; opacity: 0.8;">Helping a colleague?</p> <form method="POST" action="?/newSignup"><button type="submit">Sign up as another user</button></form></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="login-form-container svelte-1s728sz"><form method="POST" action="?/login" class="login-container svelte-1s728sz"><div class="official ID-container"><label for="official ID">official ID:</label> <input name="officialId" type="text" id="official ID"/></div> <div class="password-container"><label for="password">password:</label> <input name="password" type="password" id="password"/></div> <button>Submit</button></form> <button type="button" class="link-button svelte-1s728sz">Don't have an account?</button></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
  });
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CzGTv9Xy.js.map
