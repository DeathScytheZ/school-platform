<script>
    import { enhance } from '$app/forms';
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';

    let { data, form } = $props();

    let children = $derived(data.children || []);

    function openDatePicker(event) {
        try {
            event.currentTarget.showPicker?.();
        } catch (error) {
            // Some browsers only allow showPicker during direct pointer interaction.
        }
    }
</script>

<div class="page">
    <AppHeader
        profile={data.profile}
        eyebrow="Administration"
        title="Add Parent"
        subtitle="Register a new parent and link them to children."
        backHref="/system-admin-dashboard"
        backLabel="← System Admin"
    />

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
                <input type="date" id="parent-dateOfBirth" name="dateOfBirth" onclick={openDatePicker} required />
            </div>

            <div class="input-group">
                <label for="parent-phone">Phone</label>
                <input type="tel" id="parent-phone" name="phone" placeholder="ex: 0512345678" required />
            </div>

            <div class="input-group">
                <label for="parent-email">Email</label>
                <input type="email" id="parent-email" name="email" placeholder="ex: parent@example.com" required />
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

    <AppFooter profile={data.profile} context="Parent registration" />
</div>

<style>
    :global(html, body) {
        margin: 0;
        padding: 0;
        background:
            radial-gradient(circle at 18% 12%, rgba(255, 255, 255, 0.9), transparent 28%),
            linear-gradient(135deg, #f2f4f7 0%, #d8dde7 100%);
        color: #101424;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        min-height: 100dvh;
    }

    .page {
        display: flex;
        flex-direction: column;
        min-height: 100dvh;
        max-width: 760px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    .page > :last-child {
        margin-top: auto;
    }

    .form-card {
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(217, 222, 234, 0.95);
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 24px 70px rgba(22, 28, 45, 0.1);
    }

    .form-card h2 {
        font-size: 1rem;
        font-weight: 800;
        color: #111936;
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
        color: #242b42;
        font-weight: 700;
    }

    input {
        background: #ffffff;
        border: 1px solid #d9deea;
        border-radius: 4px;
        color: #101424;
        color-scheme: light;
        font: inherit;
        padding: 0.7rem 0.75rem;
    }

    input[type="date"] {
        cursor: pointer;
    }

    input[type="date"]::-webkit-calendar-picker-indicator {
        cursor: pointer;
        opacity: 0.75;
    }

    input:focus {
        outline: none;
        border-color: #3345ff;
        box-shadow: 0 0 0 4px rgba(51, 69, 255, 0.11);
    }

    .children-selection {
        margin-top: 1.25rem;
    }

    .children-selection h3 {
        font-size: 0.95rem;
        font-weight: 800;
        color: #111936;
        margin: 0 0 0.75rem;
    }

    .children-list {
        background: #fbfcff;
        border: 1px solid #d9deea;
        border-radius: 4px;
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
        border-radius: 4px;
        background: #3345ff;
        color: white;
        cursor: pointer;
        font-weight: 800;
        box-shadow: 0 14px 26px rgba(51, 69, 255, 0.22);
    }

    .submit-btn:hover {
        background: #2635df;
    }

    .success-msg,
    .error-msg,
    .empty-msg {
        font-size: 0.85rem;
        margin: 0.9rem 0 0;
    }

    .success-msg {
        color: #0f9f6e;
        font-weight: 700;
    }

    .error-msg {
        color: #a22929;
        font-weight: 700;
    }

    .empty-msg {
        color: #687086;
    }
</style>
