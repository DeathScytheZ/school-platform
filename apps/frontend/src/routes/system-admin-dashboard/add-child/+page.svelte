<script>
    import { enhance } from '$app/forms';

    let { form } = $props();
</script>

<div class="page">
    <header>
        <a class="back-link" href="/system-admin-dashboard">← System Admin</a>
        <h1>Add Child</h1>
        <p>Register a new child into the system with their details.</p>
    </header>

    <section class="form-card">
        <h2>Create Child</h2>
        <form method="POST" action="?/createChild" use:enhance>
            <div class="input-group">
                <label for="child-officialId">Official ID</label>
                <input type="text" id="child-officialId" name="officialId" placeholder="ex: CHLD-1234" required />
            </div>

            <div class="input-group">
                <label for="child-password">Password</label>
                <input type="password" id="child-password" name="password" required />
            </div>

            <div class="input-group">
                <label for="child-firstName">First Name</label>
                <input type="text" id="child-firstName" name="firstName" required />
            </div>

            <div class="input-group">
                <label for="child-lastName">Last Name</label>
                <input type="text" id="child-lastName" name="lastName" required />
            </div>

            <div class="input-group">
                <label for="child-dateOfBirth">Date of Birth</label>
                <input type="date" id="child-dateOfBirth" name="dateOfBirth" required />
            </div>

            <div class="input-group">
                <label for="child-level">Level</label>
                <input type="text" id="child-level" name="level" required />
            </div>

            <div class="input-group">
                <label for="child-medicalCondition">Medical Condition</label>
                <textarea id="child-medicalCondition" name="medicalCondition" rows="2" required></textarea>
            </div>

            <button type="submit" class="submit-btn">Create Child</button>

            {#if form?.success && form?.action === 'createChild'}
                <p class="success-msg">Child created successfully.</p>
            {:else if form?.error && form?.action === 'createChild'}
                <p class="error-msg">{form.error}</p>
            {/if}
        </form>
    </section>
</div>

<style>
    :global(html, body) {
        margin: 0; padding: 0;
        background: #0f1117;
        color: #e2e8f0;
        font-family: 'Segoe UI', sans-serif;
        min-height: 100dvh;
    }

    .page {
        max-width: 720px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    header {
        margin-bottom: 2rem;
    }

    .back-link {
        color: #93c5fd;
        display: inline-block;
        font-size: 0.9rem;
        margin-bottom: 1rem;
        text-decoration: none;
    }

    header h1 {
        font-size: 2rem;
        font-weight: 700;
        color: #f1f5f9;
        margin: 0 0 0.4rem;
    }

    header p {
        color: #64748b;
        margin: 0;
        font-size: 0.95rem;
    }

    .form-card {
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 14px;
        padding: 1.5rem;
    }

    .form-card h2 {
        font-size: 1rem;
        font-weight: 600;
        color: #f1f5f9;
        margin: 0 0 1.25rem;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    label {
        font-size: 0.82rem;
        color: #94a3b8;
    }

    input,
    textarea {
        background: #0f1117;
        border: 1px solid #334155;
        border-radius: 8px;
        color: #e2e8f0;
        font: inherit;
        padding: 0.7rem 0.75rem;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #4f6a9a;
    }

    .submit-btn {
        width: 100%;
        margin-top: 1rem;
        padding: 0.8rem 1rem;
        border: 0;
        border-radius: 8px;
        background: #2563eb;
        color: white;
        cursor: pointer;
        font-weight: 600;
    }

    .submit-btn:hover {
        background: #1d4ed8;
    }

    .success-msg,
    .error-msg {
        font-size: 0.85rem;
        margin: 0.9rem 0 0;
    }

    .success-msg {
        color: #34d399;
    }

    .error-msg {
        color: #f87171;
    }
</style>
