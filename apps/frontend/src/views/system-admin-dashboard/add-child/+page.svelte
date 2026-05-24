<script>
    import { enhance } from '$app/forms';
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';

    let { data, form } = $props();

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
        title="Add Child"
        subtitle="Register a new child into the system with their details."
        backHref="/system-admin-dashboard"
        backLabel="← System Admin"
    />

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
                <input type="date" id="child-dateOfBirth" name="dateOfBirth" onclick={openDatePicker} required />
            </div>

            <div class="input-group">
                <label for="child-level">Level</label>
                <input type="text" id="child-level" name="level" required />
            </div>

            <div class="input-group">
                <label for="child-class">Class</label>
                <select id="child-class" name="classId" required>
                    <option value="" disabled selected>Select a class</option>
                    {#each data.classes || [] as classItem}
                        <option value={classItem.id}>{classItem.name} - {classItem.year} - {classItem.level}</option>
                    {/each}
                </select>
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

    <AppFooter profile={data.profile} context="Child registration" />
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

    input,
    select,
    textarea {
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

    input:focus,
    select:focus,
    textarea:focus {
        outline: none;
        border-color: #3345ff;
        box-shadow: 0 0 0 4px rgba(51, 69, 255, 0.11);
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
    .error-msg {
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
</style>
