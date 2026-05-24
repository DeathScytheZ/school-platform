<script>
    import { enhance } from '$app/forms';

    const props = $props();

	let showSignup = $state(props.data.showSignup ?? false);
    // svelte-ignore state_referenced_locally
    let isSignupSuccessful = $state(props.data.isPending);
    
	let role = $state('teacher');
	let position = $state('principal');
	const positionOptions = [
		{ value: 'headmaster', name: 'headmaster' },
		{ value: 'principle', name: 'principal' },
		{ value: 'counselor', name: 'counselor' }
	];

	const roleOptions = [
		{ value: 'teacher', name: 'teacher' },
		{ value: 'staff', name: 'staff' }
	];

	const subjectOptions = [
		{ value: 'school-teacher', name: 'school-teacher' },
		{ value: 'sports-coach', name: 'sports-coach' },
		{ value: 'quran', name: 'quran' }
	];
</script>

<div class="auth-page">
	<section class="auth-shell">
		<div class="form-panel">
			<a class="brand" href="/auth" aria-label="School platform authentication">
				<span class="brand-mark">S</span>
				<span>School Platform</span>
			</a>

			{#if props.form?.error}
				<p class="error-message">{props.form.error}</p>
			{/if}

			{#if isSignupSuccessful}
				<div class="panel-copy">
					<p class="eyebrow">Request received</p>
					<h1>Registration Pending</h1>
					<p>Your request has been recorded and is being processed.</p>
					<p>An admin will verify your credentials.</p>
				</div>

				<form class="auth-form pending-form" method="POST" action="?/newSignup" use:enhance={() => {
					return async ({ result, update }) => {
					  if(result.type === 'success') {
						isSignupSuccessful = false;
						showSignup = true;
					  }
					  await update({ reset: false, invalidateAll: false });
					}
				}}>
					<button class="primary-button" type="submit">Sign up as another user</button>
				</form>
			{:else if showSignup}
				<div class="panel-copy">
					<p class="eyebrow">Create access</p>
					<h1>Request an account</h1>
					<p>Submit your staff details for system admin approval.</p>
				</div>

				<form class="auth-form signup-container" method="POST" action="?/signup" use:enhance={() => {
					return async ({ result, update }) => {
						if(result.type === 'success') {
							isSignupSuccessful = true;
						}
						await update({ reset: false, invalidateAll: false});
					};
				}}>
					<div class="field">
						<label for="officialId">Official ID</label>
						<input name="officialId" type="text" placeholder="TRN-7895-Q7U3" id="officialId" />
					</div>
					<div class="field">
						<label for="signupPassword">Password</label>
						<input name="password" type="password" placeholder="Enter a secure password" id="signupPassword" />
					</div>

					<div class="field-grid">
						<div class="field">
							<label for="firstName">First name</label>
							<input name="firstName" type="text" placeholder="First name" id="firstName" />
						</div>
						<div class="field">
							<label for="lastName">Last name</label>
							<input name="lastName" type="text" placeholder="Last name" id="lastName" />
						</div>
					</div>

					<div class="field">
						<label for="dateOfBirth">Date of birth</label>
						<input name="dateOfBirth" type="date" id="dateOfBirth" />
					</div>

					<div class="field-grid">
						<div class="field">
							<label for="phone">Phone number</label>
							<input name="phone" type="tel" placeholder="0512345678" id="phone" />
						</div>
						<div class="field">
							<label for="email">Email</label>
							<input name="email" type="email" placeholder="name@example.com" id="email" />
						</div>
					</div>

					<div class="field">
						<label for="role">Role</label>
						<select name="role" id="role" bind:value={role}>
							{#each roleOptions as opt (opt.value)}
								<option value={opt.value}> {opt.name} </option>
							{/each}
						</select>
					</div>

					{#if role === 'teacher'}
						<div class="field">
							<label for="subject">Subject</label>
							<select name="subject" id="subject">
								{#each subjectOptions as sub (sub.value)}
									<option value={sub.value}> {sub.name} </option>
								{/each}
							</select>
						</div>
					{:else if role === 'staff'}
						<div class="field">
							<label for="position">Position</label>
							<select name="position" id="position" bind:value={position}>
								{#each positionOptions as occ (occ.value)}
									<option value={occ.value}> {occ.name} </option>
								{/each}
							</select>
						</div>
					{/if}

					<button class="primary-button" id="submit-button" type="submit">Submit request</button>
				</form>

				<p class="switch-copy">
					Already have an account?
					<button type="button" class="link-button" onclick={() => showSignup = !showSignup}>Log in</button>
				</p>
			{:else}
				<div class="panel-copy">
					<p class="eyebrow">Welcome back</p>
					<h1>Log in to your workspace</h1>
					<p>Use your official ID and password to continue.</p>
				</div>

				<form method="POST" action="?/login" class="auth-form login-container" use:enhance>
					<div class="field">
						<label for="loginOfficialId">Official ID</label>
						<input name="officialId" type="text" id="loginOfficialId" placeholder="Enter your official ID" />
					</div>
					<div class="field">
						<label for="loginPassword">Password</label>
						<input name="password" type="password" id="loginPassword" placeholder="Enter your password" />
					</div>
					<button class="primary-button" type="submit">Log in</button>
				</form>

				<p class="switch-copy">
					Don't have an account?
					<button type="button" class="link-button" onclick={() => { showSignup = !showSignup}}>Sign up</button>
				</p>
			{/if}
		</div>

		<aside class="visual-panel" aria-hidden="true">
			<div class="visual-content">
				<div class="glass-cube">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</aside>
	</section>
</div>

<style>
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		min-width: 100dvw;
		min-height: 100dvh;
		color: #101424;
		background: #dde1e8;
		font-family:
			Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
	}

	:global(body) {
		overflow-x: hidden;
	}

	:global(*) {
		box-sizing: border-box;
	}

	.auth-page {
		min-height: 100dvh;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 44px;
		background:
			radial-gradient(circle at 18% 12%, rgba(255, 255, 255, 0.9), transparent 28%),
			linear-gradient(135deg, #f2f4f7 0%, #d8dde7 100%);
	}

	.auth-shell {
		width: min(1180px, 100%);
		min-height: 680px;
		display: flex;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.72);
		border-radius: 8px;
		background: #ffffff;
		box-shadow: 0 28px 90px rgba(22, 28, 45, 0.14);
	}

	.form-panel {
		position: relative;
		width: 43%;
		min-width: 390px;
		display: flex;
		flex-direction: column;
		padding: 54px 60px;
		background: #ffffff;
	}

	.brand {
		display: inline-flex;
		width: fit-content;
		align-items: center;
		gap: 10px;
		margin-bottom: 70px;
		color: #111936;
		font-size: 0.92rem;
		font-weight: 800;
		text-decoration: none;
	}

	.brand-mark {
		display: grid;
		width: 34px;
		height: 34px;
		place-items: center;
		border-radius: 8px;
		background: #3345ff;
		color: white;
		font-weight: 900;
	}

	.panel-copy {
		margin-bottom: 30px;
	}

	.eyebrow {
		margin: 0 0 12px;
		color: #3345ff;
		font-size: 0.76rem;
		font-weight: 800;
		letter-spacing: 0;
		text-transform: uppercase;
	}

	h1 {
		margin: 0 0 12px;
		color: #090f2d;
		font-size: clamp(2rem, 3vw, 2.7rem);
		line-height: 1.08;
		letter-spacing: 0;
	}

	p {
		margin: 0;
		color: #687086;
		font-size: 0.95rem;
		line-height: 1.55;
	}

	.auth-form {
		display: grid;
		gap: 16px;
	}

	.signup-container {
		gap: 13px;
	}

	.field-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 12px;
	}

	.field {
		display: grid;
		gap: 7px;
	}

	label {
		color: #242b42;
		font-size: 0.78rem;
		font-weight: 700;
	}

	input,
	select {
		width: 100%;
		height: 44px;
		border: 1px solid #d9deea;
		border-radius: 4px;
		background: #ffffff;
		color: #101424;
		font: inherit;
		font-size: 0.9rem;
		outline: none;
		padding: 0 13px;
		transition:
			border-color 0.18s ease,
			box-shadow 0.18s ease,
			background-color 0.18s ease;
	}

	select {
		appearance: none;
		background-image:
			linear-gradient(45deg, transparent 50%, #687086 50%),
			linear-gradient(135deg, #687086 50%, transparent 50%);
		background-position:
			calc(100% - 18px) 19px,
			calc(100% - 13px) 19px;
		background-size:
			5px 5px,
			5px 5px;
		background-repeat: no-repeat;
		padding-right: 34px;
	}

	input::placeholder {
		color: #a2a8b8;
	}

	input:focus,
	select:focus {
		border-color: #3345ff;
		background: #fbfcff;
		box-shadow: 0 0 0 4px rgba(51, 69, 255, 0.11);
	}

	input[type="date"] {
		color-scheme: light;
	}

	.primary-button {
		width: 100%;
		height: 46px;
		border: 0;
		border-radius: 4px;
		margin-top: 6px;
		background: #3345ff;
		color: #ffffff;
		cursor: pointer;
		font-weight: 800;
		font-size: 0.9rem;
		box-shadow: 0 14px 26px rgba(51, 69, 255, 0.22);
		transition:
			transform 0.18s ease,
			background-color 0.18s ease,
			box-shadow 0.18s ease;
	}

	.primary-button:hover {
		background: #2635df;
		box-shadow: 0 17px 30px rgba(51, 69, 255, 0.28);
		transform: translateY(-1px);
	}

	.primary-button:active {
		transform: translateY(0);
	}

	.switch-copy {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		margin-top: 22px;
		font-size: 0.84rem;
	}

    .link-button {
		border: 0;
        background: none;
        color: #3345ff;
        cursor: pointer;
        font: inherit;
		font-weight: 800;
        padding: 0;
    }

	.link-button:hover {
		text-decoration: underline;
	}

	.error-message {
		margin: -34px 0 24px;
		border: 1px solid #ffd0d0;
		border-radius: 4px;
		background: #fff3f3;
		color: #a22929;
		padding: 11px 13px;
		font-size: 0.85rem;
		font-weight: 700;
	}

	.pending-form {
		margin-top: 10px;
	}

	.visual-panel {
		flex: 1;
		position: relative;
		display: grid;
		place-items: center;
		overflow: hidden;
		border-top-left-radius: 72px;
		background:
			radial-gradient(circle at 42% 38%, rgba(255, 255, 255, 0.95), transparent 24%),
			linear-gradient(145deg, #eef1f6 0%, #d6dce6 48%, #f8fafc 100%);
	}

	.visual-panel::before {
		content: "";
		position: absolute;
		inset: auto -12% -20% 16%;
		height: 46%;
		border-radius: 50%;
		background: rgba(255, 255, 255, 0.8);
		filter: blur(22px);
		transform: rotate(-10deg);
	}

	.visual-content {
		position: relative;
		width: min(520px, 80%);
		aspect-ratio: 1;
		display: grid;
		place-items: center;
	}

	.glass-cube {
		position: relative;
		width: min(290px, 64vw);
		aspect-ratio: 1;
		border-radius: 18px;
		background:
			linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(75, 96, 255, 0.3)),
			radial-gradient(circle at 26% 22%, rgba(255, 255, 255, 0.95), transparent 26%),
			linear-gradient(45deg, rgba(69, 80, 255, 0.82), rgba(135, 190, 255, 0.35));
		box-shadow:
			inset 26px 24px 50px rgba(255, 255, 255, 0.45),
			inset -30px -34px 60px rgba(46, 55, 190, 0.34),
			0 38px 60px rgba(57, 65, 139, 0.24);
		transform: rotate(-14deg) skew(4deg);
	}

	.glass-cube::before,
	.glass-cube::after,
	.glass-cube span {
		content: "";
		position: absolute;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.5);
		filter: blur(3px);
	}

	.glass-cube::before {
		width: 58%;
		height: 18px;
		left: 16%;
		top: 16%;
		transform: rotate(14deg);
	}

	.glass-cube::after {
		width: 22px;
		height: 62%;
		right: 18%;
		top: 18%;
		background: rgba(37, 54, 255, 0.2);
	}

	.glass-cube span:nth-child(1) {
		width: 36%;
		height: 28px;
		right: 13%;
		bottom: 26%;
		background: rgba(33, 52, 255, 0.3);
		transform: rotate(-25deg);
	}

	.glass-cube span:nth-child(2) {
		width: 18px;
		height: 32%;
		left: 23%;
		bottom: 18%;
	}

	.glass-cube span:nth-child(3) {
		width: 48%;
		height: 1px;
		right: 8%;
		top: 46%;
		background: rgba(255, 255, 255, 0.65);
	}

	@media (max-width: 920px) {
		.auth-page {
			padding: 24px;
			align-items: flex-start;
		}

		.auth-shell {
			min-height: auto;
			flex-direction: column-reverse;
		}

		.form-panel {
			width: 100%;
			min-width: 0;
			padding: 34px 28px 38px;
		}

		.brand {
			margin-bottom: 38px;
		}

		.visual-panel {
			min-height: 260px;
			border-top-left-radius: 0;
			border-bottom-left-radius: 54px;
		}

		.visual-content {
			width: min(420px, 86%);
		}

		.glass-cube {
			width: 190px;
		}
	}

	@media (max-width: 560px) {
		.auth-page {
			padding: 0;
		}

		.auth-shell {
			min-height: 100dvh;
			border: 0;
			border-radius: 0;
		}

		.form-panel {
			padding: 28px 20px 34px;
		}

		.field-grid {
			grid-template-columns: 1fr;
		}

		h1 {
			font-size: 2rem;
		}

		.visual-panel {
			min-height: 210px;
		}

	}
</style>
