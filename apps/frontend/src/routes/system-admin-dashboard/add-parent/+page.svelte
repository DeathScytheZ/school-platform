<script>
    import { enhance } from '$app/forms';

    let { data, form } = $props();

    let children = $derived(data.children || []);
</script>

<div class="page">
    <header>
        <a class="back-link" href="/system-admin-dashboard">← System Admin</a>
        <h1>Add Parent</h1>
        <p>Register a new parent and link them to children.</p>
    </header>

    <section class="form-card">
        <h2>Create Parent</h2>
        <form method="POST" action="?/createParent" use:enhance>
            <div class="input-group">
                <label for="parent-officialId">Official ID</label>
                <input type="text" id="parent-officialId" name="officialId" placeholder="ex: PRNT-5678" required />
            </div>

            <div class="input-group">
                <label for="parent-password">Password</label>
                <input type="password" id="parent-password" name="password" required />
            </div>

            <div class="input-group">
                <label for="parent-firstName">First Name</label>
                <input type="text" id="parent-firstName" name="firstName" required />
            </div>

            <div class="input-group">
                <label for="parent-lastName">Last Name</label>
                <input type="text" id="parent-lastName" name="lastName" required />
            </div>

            <div class="input-group">
                <label for="parent-dateOfBirth">Date of Birth</label>
                <input type="date" id="parent-dateOfBirth" name="dateOfBirth" required />
            </div>

            <div class="input-group">
                <label for="parent-wilaya">Wilaya</label>
                <input type="text" id="parent-wilaya" name="wilaya" required />
            </div>

            <div class="input-group">
                <label for="parent-commune">Commune</label>
                <input type="text" id="parent-commune" name="commune" required />
            </div>

            <div class="children-selection">
                <h3>Select Children</h3>
                <div class="children-list">
                    {#each children as child}
                        <label class="checkbox-label">
                            <input type="checkbox" name="childIds" value={child.id} />
                            <span>{child.first_name} {child.last_name}</span>
                        </label>
                    {:else}
                        <p class="empty-msg">No children found</p>
                    {/each}
                </div>
            </div>

            <button type="submit" class="submit-btn">Create Parent</button>

            {#if form?.success && form?.action === 'createParent'}
                <p class="success-msg">Parent created successfully.</p>
            {:else if form?.error && form?.action === 'createParent'}
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

    input {
        background: #0f1117;
        border: 1px solid #334155;
        border-radius: 8px;
        color: #e2e8f0;
        font: inherit;
        padding: 0.7rem 0.75rem;
    }

    input:focus {
        outline: none;
        border-color: #4f6a9a;
    }

    .children-selection {
        margin-top: 1.25rem;
    }

    .children-selection h3 {
        font-size: 0.95rem;
        font-weight: 600;
        color: #f1f5f9;
        margin: 0 0 0.75rem;
    }

    .children-list {
        background: #0f1117;
        border: 1px solid #334155;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        max-height: 180px;
        overflow-y: auto;
        padding: 0.75rem;
    }

    .checkbox-label {
        align-items: center;
        display: flex;
        gap: 0.65rem;
    }

    .checkbox-label input {
        width: 1rem;
        height: 1rem;
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
    .error-msg,
    .empty-msg {
        font-size: 0.85rem;
        margin: 0.9rem 0 0;
    }

    .success-msg {
        color: #34d399;
    }

    .error-msg {
        color: #f87171;
    }

    .empty-msg {
        color: #64748b;
    }
</style>
