<script>
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';

    let { data } = $props();
    let activeSection = $state('children');

    const navItems = [
        { id: 'children', label: 'My Children' },
        { id: 'performance', label: 'Performance' },
        { id: 'behavior', label: 'Behavior' },
        { id: 'announcements', label: 'Announcements' }
    ];

    const sortedAnnouncements = $derived(
        [...(data.announcements || [])].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
</script>

<div class="dashboard">
    <aside class="sidebar">
        <div class="brand">
            <span>Parent</span>
            <strong>Dashboard</strong>
        </div>

        <nav>
            {#each navItems as item}
                <button
                    type="button"
                    class:active={activeSection === item.id}
                    onclick={() => activeSection = item.id}
                >
                    {item.label}
                </button>
            {/each}
        </nav>
    </aside>

    <main class="content">
        <AppHeader
            profile={data.profile}
            eyebrow="Family Workspace"
            title="Parent Dashboard"
            subtitle="Review children, school notes, and announcements."
        />

        {#if activeSection === 'children'}
            <section class="panel">
                <div class="panel-heading">
                    <h2>My Children</h2>
                    <span>{data.children?.length || 0}</span>
                </div>

                <div class="card-grid">
                    {#each data.children || [] as child}
                        <article class="info-card">
                            <h3>{child.first_name} {child.last_name}</h3>
                            <dl>
                                <div>
                                    <dt>Level</dt>
                                    <dd>{child.level}</dd>
                                </div>
                                <div>
                                    <dt>Medical Condition</dt>
                                    <dd>{child.medicalCondition}</dd>
                                </div>
                            </dl>
                        </article>
                    {:else}
                        <p class="empty-msg">No children found</p>
                    {/each}
                </div>
            </section>
        {:else if activeSection === 'performance'}
            <section class="panel">
                <div class="panel-heading">
                    <h2>Performance</h2>
                    <span>{data.performance?.length || 0}</span>
                </div>

                <div class="card-grid">
                    {#each data.performance || [] as item}
                        <article class="info-card">
                            <h3>{item.first_name} {item.last_name}</h3>
                            <p>{item.remark}</p>
                        </article>
                    {:else}
                        <p class="empty-msg">No performance records yet</p>
                    {/each}
                </div>
            </section>
        {:else if activeSection === 'behavior'}
            <section class="panel">
                <div class="panel-heading">
                    <h2>Behavior</h2>
                    <span>{data.behavior?.length || 0}</span>
                </div>

                <div class="card-grid">
                    {#each data.behavior || [] as item}
                        <article class="info-card">
                            <h3>{item.first_name} {item.last_name}</h3>
                            <p>{item.remark}</p>
                        </article>
                    {:else}
                        <p class="empty-msg">No behavior records yet</p>
                    {/each}
                </div>
            </section>
        {:else if activeSection === 'announcements'}
            <section class="panel">
                <div class="panel-heading">
                    <h2>Announcements</h2>
                    <span>{sortedAnnouncements.length}</span>
                </div>

                <div class="card-grid">
                    {#each sortedAnnouncements as announcement}
                        <article class="info-card">
                            <div class="card-top">
                                <h3>{announcement.title}</h3>
                                <time>{new Date(announcement.date).toLocaleDateString()}</time>
                            </div>
                            {#if announcement.subject}
                                <p class="subject">{announcement.subject}</p>
                            {/if}
                            <p>{announcement.description}</p>
                        </article>
                    {:else}
                        <p class="empty-msg">No announcements yet</p>
                    {/each}
                </div>
            </section>
        {/if}

        <AppFooter profile={data.profile} context="Parent workspace" />
    </main>
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

    .dashboard {
        display: grid;
        grid-template-columns: 260px minmax(0, 1fr);
        min-height: 100dvh;
        padding: 24px;
        gap: 24px;
    }

    .sidebar {
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(217, 222, 234, 0.95);
        border-radius: 8px;
        padding: 2rem 1.25rem;
        box-shadow: 0 20px 60px rgba(22, 28, 45, 0.08);
    }

    .brand {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        margin-bottom: 2rem;
    }

    .brand span {
        color: #687086;
        font-size: 0.78rem;
        font-weight: 800;
        text-transform: uppercase;
    }

    .brand strong {
        color: #111936;
        font-size: 1.25rem;
    }

    nav {
        display: grid;
        gap: 0.5rem;
    }

    nav button {
        background: transparent;
        border: 1px solid transparent;
        border-radius: 4px;
        color: #687086;
        cursor: pointer;
        font: inherit;
        font-weight: 700;
        padding: 0.85rem 1rem;
        text-align: left;
    }

    nav button:hover,
    nav button.active {
        background: #eef1ff;
        border-color: #d9deea;
        color: #3345ff;
    }

    .content {
        padding: 2.5rem 1rem 2.5rem 0;
    }

    .panel {
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(217, 222, 234, 0.95);
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 24px 70px rgba(22, 28, 45, 0.1);
    }

    .panel-heading {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .panel-heading h2 {
        color: #111936;
        font-size: 1rem;
        font-weight: 800;
        margin: 0;
    }

    .panel-heading span {
        background: #eef1ff;
        border: 1px solid #d9deea;
        border-radius: 999px;
        color: #3345ff;
        font-size: 0.8rem;
        font-weight: 800;
        padding: 0.25rem 0.65rem;
    }

    .card-grid {
        display: grid;
        gap: 1rem;
    }

    .info-card {
        background: #ffffff;
        border: 1px solid #e6eaf2;
        border-radius: 8px;
        padding: 1.25rem;
    }

    .info-card h3 {
        color: #111936;
        font-size: 1.05rem;
        margin: 0 0 0.75rem;
    }

    .info-card p {
        color: #242b42;
        line-height: 1.5;
        margin: 0;
    }

    dl {
        display: grid;
        gap: 0.75rem;
        margin: 0;
    }

    dt {
        color: #687086;
        font-size: 0.76rem;
        font-weight: 800;
        margin-bottom: 0.25rem;
        text-transform: uppercase;
    }

    dd {
        color: #242b42;
        margin: 0;
    }

    .card-top {
        align-items: flex-start;
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        margin-bottom: 0.75rem;
    }

    .card-top h3 {
        margin-bottom: 0;
    }

    time {
        color: #687086;
        font-size: 0.82rem;
        white-space: nowrap;
    }

    .subject {
        color: #3345ff;
        font-size: 0.86rem;
        font-weight: 800;
        margin-bottom: 0.6rem;
    }

    .empty-msg {
        color: #687086;
        margin: 0;
    }

    @media (max-width: 760px) {
        .dashboard {
            grid-template-columns: 1fr;
            padding: 0;
            gap: 0;
        }

        .sidebar {
            border-radius: 0;
            border-left: 0;
            border-right: 0;
            border-top: 0;
            padding: 1.25rem;
        }

        nav {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        nav button {
            text-align: center;
        }

        .content {
            padding: 1.5rem;
        }

        .card-top {
            flex-direction: column;
        }
    }
</style>
