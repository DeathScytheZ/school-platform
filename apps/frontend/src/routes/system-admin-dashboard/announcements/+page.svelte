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
        title="Announcements"
        subtitle="Create and review general announcements for everyone."
        backHref="/system-admin-dashboard"
        backLabel="← System Admin"
    />

    <section class="announcements-section">
        <div class="section-heading">
            <h2>General Announcements</h2>
            <span>{data.announcements?.length || 0}</span>
        </div>

        <div class="announcement-list">
            {#each data.announcements || [] as announcement}
                <article class="announcement-card">
                    <div class="announcement-top">
                        <h3>{announcement.title}</h3>
                        <time>{new Date(announcement.date).toLocaleDateString()}</time>
                    </div>
                    {#if announcement.subject}
                        <p class="subject">{announcement.subject}</p>
                    {/if}
                    <p>{announcement.description}</p>
                </article>
            {:else}
                <p class="empty-msg">No announcements found.</p>
            {/each}
        </div>
    </section>

    <section class="form-card">
        <h2>Create General Announcement</h2>
        <form method="POST" action="?/createGeneralAnnouncement" use:enhance>
            <div class="input-group">
                <label for="general-title">Title</label>
                <input type="text" id="general-title" name="title" required />
            </div>

            <div class="input-group">
                <label for="general-subject">Subject</label>
                <input type="text" id="general-subject" name="subject" />
            </div>

            <div class="input-group">
                <label for="general-description">Description</label>
                <textarea id="general-description" name="description" rows="4" required></textarea>
            </div>

            <div class="input-group">
                <label for="general-date">Date</label>
                <input type="date" id="general-date" name="date" required />
            </div>

            <button type="submit" class="submit-btn">Create General Announcement</button>

            {#if form?.success && form?.action === 'createGeneral'}
                <p class="success-msg">General announcement created successfully.</p>
            {:else if form?.error && form?.action === 'createGeneral'}
                <p class="error-msg">{form.error}</p>
            {/if}
        </form>
    </section>

    <AppFooter profile={data.profile} context="General announcements" />
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

    h2 {
        color: #111936;
        font-size: 1rem;
        font-weight: 800;
        margin: 0 0 1.25rem;
    }

    .announcements-section {
        margin-bottom: 2rem;
    }

    .section-heading {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .section-heading h2 {
        margin-bottom: 0;
    }

    .section-heading span {
        background: #eef1ff;
        border: 1px solid #d9deea;
        border-radius: 999px;
        color: #3345ff;
        font-size: 0.8rem;
        font-weight: 800;
        padding: 0.25rem 0.65rem;
    }

    .announcement-list {
        display: grid;
        gap: 1rem;
    }

    .announcement-card,
    .form-card {
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(217, 222, 234, 0.95);
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 20px 60px rgba(22, 28, 45, 0.08);
    }

    .announcement-top {
        align-items: flex-start;
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        margin-bottom: 0.75rem;
    }

    .announcement-top h3 {
        color: #111936;
        font-size: 1.1rem;
        margin: 0;
    }

    time {
        color: #687086;
        font-size: 0.82rem;
        white-space: nowrap;
    }

    .announcement-card p {
        color: #242b42;
        line-height: 1.5;
        margin: 0;
    }

    .announcement-card .subject {
        color: #3345ff;
        font-size: 0.86rem;
        font-weight: 800;
        margin-bottom: 0.6rem;
    }

    .form-card {
        max-width: 560px;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-bottom: 1rem;
    }

    label {
        color: #242b42;
        font-size: 0.82rem;
        font-weight: 700;
    }

    input,
    textarea {
        background: #ffffff;
        border: 1px solid #d9deea;
        border-radius: 4px;
        color: #101424;
        color-scheme: light;
        font: inherit;
        padding: 0.7rem 0.75rem;
    }

    input:focus,
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

    @media (max-width: 640px) {
        .page {
            padding: 3rem 1rem;
        }

        .announcement-top {
            flex-direction: column;
        }
    }
</style>
