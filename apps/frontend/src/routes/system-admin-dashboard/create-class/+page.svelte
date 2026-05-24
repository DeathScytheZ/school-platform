<script>
    import { enhance } from '$app/forms';
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';

    let { data, form } = $props();
</script>

<div class="page">
    <AppHeader
        profile={data.profile}
        eyebrow="Administration"
        title="Create Class"
        subtitle="Create a class and review existing class records."
        backHref="/system-admin-dashboard"
        backLabel="← System Admin"
    />

    <section class="class-section">
        <div class="form-card">
            <h2>Create Class</h2>
            <form method="POST" action="?/createClass" use:enhance>
                <div class="form-grid">
                    <div class="input-group">
                        <label for="class-name">Name</label>
                        <input type="text" id="class-name" name="name" required />
                    </div>

                    <div class="input-group">
                        <label for="class-year">Year</label>
                        <input type="text" id="class-year" name="year" required />
                    </div>

                    <div class="input-group">
                        <label for="class-level">Level</label>
                        <input type="text" id="class-level" name="level" required />
                    </div>
                </div>

                <button type="submit" class="submit-btn">Create Class</button>

                {#if form?.success && form?.action === 'createClass'}
                    <p class="success-msg">Class created successfully.</p>
                {:else if form?.error && form?.action === 'createClass'}
                    <p class="error-msg">{form.error}</p>
                {/if}
            </form>
        </div>

        <div class="table-card">
            <h2>Classes</h2>
            <div class="table-wrap">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        {#each data.classes || [] as classItem}
                            <tr>
                                <td>{classItem.name}</td>
                                <td>{classItem.year}</td>
                                <td>{classItem.level}</td>
                            </tr>
                        {:else}
                            <tr>
                                <td colspan="3" class="empty-cell">No classes found</td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <AppFooter profile={data.profile} context="Class management" />
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
        max-width: 900px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    .class-section {
        display: grid;
        gap: 1.25rem;
    }

    .form-card,
    .table-card {
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(217, 222, 234, 0.95);
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 24px 70px rgba(22, 28, 45, 0.1);
    }

    .form-card h2,
    .table-card h2 {
        font-size: 1rem;
        font-weight: 800;
        color: #111936;
        margin: 0 0 1.25rem;
    }

    .form-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
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
        font: inherit;
        min-width: 0;
        padding: 0.7rem 0.75rem;
    }

    input:focus {
        outline: none;
        border-color: #3345ff;
        box-shadow: 0 0 0 4px rgba(51, 69, 255, 0.11);
    }

    .submit-btn {
        width: 100%;
        margin-top: 1.25rem;
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

    .table-wrap {
        overflow-x: auto;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 460px;
    }

    th,
    td {
        border-bottom: 1px solid #e6eaf2;
        padding: 0.85rem 0.75rem;
        text-align: left;
    }

    th {
        color: #687086;
        font-size: 0.78rem;
        font-weight: 600;
        text-transform: uppercase;
    }

    td {
        color: #242b42;
        font-size: 0.9rem;
    }

    .empty-cell {
        color: #687086;
        text-align: center;
    }

    @media (max-width: 760px) {
        .form-grid {
            grid-template-columns: 1fr;
        }
    }
</style>
