<script>
    import { enhance } from '$app/forms';

    const props = $props();

	let showSignup = $state(false);
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

<div class="main-container" >
    {#if props.form?.error}
        {props.form.error}
    {/if}

    {#if isSignupSuccessful}
         <div class="pending-container">
            <h1> Registration Pending </h1>
            <p id="ii"> your request has been recorded and is being processed</p>
            <p> an admin will verify your credentials </p>
            <hr /> 
            <p style="font-size: 0.8rem; opacity: 0.8;"> 
                Helping a colleague? 
            </p>
            <form method="POST" action="?/newSignup" use:enhance={() => {
                return async ({ result, update }) => {
                  if(result.type === 'success') {
                    isSignupSuccessful = false;
                    showSignup = true;
                  }
                  await update({ reset: false, invalidateAll: false });
                }
            }}>
              <button type="submit"> Sign up as another user </button>
            </form>
        </div>
    {:else if showSignup}
		<form class="signup-container" method="POST" action="?/signup" use:enhance={() => {
            return async ({ result, update }) => {
                if(result.type === 'success') {
                    isSignupSuccessful = true;
                }
                await update({ reset: false, invalidateAll: false});
            };
        }}>
			<div class="officialId-container">
				<label for="officialId"> official id </label>
				<input name="officialId" type="text" placeholder="ex: TRN-7895-Q7U3" id="officialId" />
			</div>
			<div class="password">
				<label for="password"> password: </label>
				<input name="password" type="password" placeholder="ex: y22ujs-53" id="password" />
			</div>

			<div class="firstName-container">
				<label for="firstName"> first Name: </label>
				<input name="firstName" type="text" placeholder="firstName" id="firstName" />
			</div>
			<div class="lastName-container">
				<label for="lastName"> last Name: </label>
				<input name="lastName" type="lastName" placeholder="lastName" id="lastName" />
			</div>

			<div class="dateOfBirth-container">
				<label for="dateOfBirth"> date of birth: </label>
				<input name="dateOfBirth" type="date" id="dateOfBirth" />
			</div>

			<div class="phone-container">
				<label for="phone"> phone number: </label>
				<input name="phone" type="tel" placeholder="ex: 0512345678" id="phone" />
			</div>

			<div class="email-container">
				<label for="email"> email: </label>
				<input name="email" type="email" placeholder="ex: name@example.com" id="email" />
			</div>

			<div class="role-container">
				<label for="role"> role: </label>
				<select name="role" id="role" bind:value={role}>
					{#each roleOptions as opt (opt.value)}
						<option value={opt.value}> {opt.name} </option>
					{/each}
				</select>
			</div>

			{#if role === 'teacher'}
				<div class="subject-container">
					<label for="subject"> subject </label>
					<select name="subject" id="subject">
						{#each subjectOptions as sub (sub.value)}
							<option value={sub.value}> {sub.name} </option>
						{/each}
					</select>
				</div>
			{:else if role === 'staff'}
				<div class="position-container">
					<label for="position"> position </label>
					<select name="position" id="position" bind:value={position}>
						{#each positionOptions as occ (occ.value)}
							<option value={occ.value}> {occ.name} </option>
						{/each}
					</select>
				</div>
			{/if}

            <button id="submit-button" type="submit"> Submit </button>
		</form>
        <button type="button" class="link-button" onclick={() => showSignup = !showSignup }> Already have an account? </button>
	{:else}
		<div class="login-form-container">
			<form method="POST" action="?/login" class="login-container" use:enhance>
				<div class="official ID-container">
                    <label for="official ID" > official ID: </label>
					<input name="officialId" type="text" id="official ID" />
				</div>
				<div class="password-container">
					<label for="password"> password: </label>
					<input name="password" type="password" id="password" />
				</div>
				<button> Submit </button>
			</form>
            <button type="button" class="link-button" onclick={() => { showSignup = !showSignup}}> Don't have an account? </button>
		</div>
	{/if}
</div>

<style>
	:global(html),
	:global(body) {
		min-width: 100dvw;
		height: 100dvh;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: white;
        background-color: black;
	}

	.main-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		background-size: cover;
		background-position: center;
	}

	.signup-container {
		min-width: 40%;
		min-height: 60%;
		border: 1px solid white;
		border-radius: 200px;
		margin: 5px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(15px);
		box-shadow: 5px 5px 20px 20px rgba(0, 0, 0, 0.4);
		border: 1px solid rgba(255, 255, 255, 0.5);
	}

	.signup-container input {
		padding-bottom: 10px;
		margin-bottom: 10px;
		border-radius: 30px;
		border: none;
	}

	#submit-button {
		width: 50%;
	}

	.login-container {
		min-height: 60%;
		border: 1px solid white;
	}
	.login-form-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		min-height: 100%;
	}
    .link-button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        text-decoration: underline;
        font-size: 0.9rem;
        padding: 0;
    }

</style>
