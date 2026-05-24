<script>
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';

    let { data } = $props();
</script>

<div class="page">
    <div class="header-actions">
        <AppHeader
            profile={data.profile}
            eyebrow="Staff Workspace"
            title="Staff Dashboard"
            subtitle="Review announcements and create school-wide staff updates."
        />
        <a class="create-link" href="/staff-dashboard/announcements">Create School Announcement</a>
    </div>

    <section class="announcements-section">
        <div class="section-heading">
            <h2>Announcements</h2>
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

    <AppFooter profile={data.profile} context="Staff workspace" />
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
        max-width: 900px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    .page > :last-child {
        margin-top: auto;
    }

    .header-actions {
        align-items: flex-start;
        display: flex;
        gap: 1.5rem;
        justify-content: space-between;
        margin-bottom: 2rem;
    }

    .create-link {
        background: #3345ff;
        border-radius: 4px;
        color: white;
        font-size: 0.85rem;
        font-weight: 800;
        padding: 0.75rem 1rem;
        text-decoration: none;
        white-space: nowrap;
        box-shadow: 0 14px 26px rgba(51, 69, 255, 0.22);
    }

    .create-link:hover {
        background: #2635df;
    }

    .announcements-section {
        display: grid;
        gap: 1rem;
    }

    .section-heading {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    .section-heading h2 {
        color: #111936;
        font-size: 1rem;
        font-weight: 800;
        margin: 0;
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

    .announcement-card {
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

    .empty-msg {
        color: #687086;
        font-size: 0.85rem;
        margin: 0;
    }

    @media (max-width: 640px) {
        .page {
            padding: 3rem 1rem;
        }

        .header-actions {
            flex-direction: column;
        }

        .create-link {
            text-align: center;
            width: 100%;
        }

        .announcement-top {
            flex-direction: column;
        }
    }
</style>
