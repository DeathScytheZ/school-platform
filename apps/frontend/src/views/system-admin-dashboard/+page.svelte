<script>
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';

    let { data } = $props();
</script>

<div class="page">
    <AppHeader
        profile={data.profile}
        eyebrow="Administration"
        title="System Admin"
        subtitle="Select a section to manage school accounts, classes, and announcements."
    />

    <div class="grid">
        <a href="/system-admin-dashboard/registration-requests" class="card">
            <div class="card-icon">RQ</div>
            <div class="card-body">
                <h2>Registration Requests</h2>
                <p>Review, approve, or reject pending staff and teacher registration requests.</p>
            </div>
            <span class="card-arrow">→</span>
        </a>

        <a href="/system-admin-dashboard/users" class="card">
            <div class="card-icon">US</div>
            <div class="card-body">
                <h2>User List</h2>
                <p>Browse and search all registered users in the database.</p>
            </div>
            <span class="card-arrow">→</span>
        </a>

        <a href="/system-admin-dashboard/add-child" class="card">
            <div class="card-icon">CH</div>
            <div class="card-body">
                <h2>Add Child</h2>
                <p>Register a new child into the system with their details.</p>
            </div>
            <span class="card-arrow">→</span>
        </a>

        <a href="/system-admin-dashboard/add-parent" class="card">
            <div class="card-icon">PR</div>
            <div class="card-body">
                <h2>Add Parent</h2>
                <p>Register a new parent and link them to their children.</p>
            </div>
            <span class="card-arrow">→</span>
        </a>

        <a href="/system-admin-dashboard/create-class" class="card">
            <div class="card-icon">CL</div>
            <div class="card-body">
                <h2>Create Class</h2>
                <p>Create a class and review existing class records.</p>
            </div>
            <span class="card-arrow">→</span>
        </a>

        <a href="/system-admin-dashboard/announcements" class="card">
            <div class="card-icon">AN</div>
            <div class="card-body">
                <h2>Announcements</h2>
                <p>Create general announcements for everyone.</p>
            </div>
            <span class="card-arrow">→</span>
        </a>
    </div>

    <AppFooter profile={data.profile} context="System administration workspace" />
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
        max-width: 980px;
        margin: 0 auto;
        padding: 4.5rem 2rem;
    }

    .page > :last-child {
        margin-top: auto;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
        gap: 1rem;
    }

    .card {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding: 1.35rem;
        background: rgba(255, 255, 255, 0.86);
        border: 1px solid rgba(217, 222, 234, 0.95);
        border-radius: 8px;
        text-decoration: none;
        color: inherit;
        box-shadow: 0 20px 60px rgba(22, 28, 45, 0.08);
        transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s, background 0.2s;
        cursor: pointer;
    }

    .card:hover {
        background: #ffffff;
        border-color: rgba(51, 69, 255, 0.28);
        box-shadow: 0 24px 70px rgba(22, 28, 45, 0.12);
        transform: translateY(-2px);
    }

    .card-icon {
        display: grid;
        width: 46px;
        height: 46px;
        place-items: center;
        border-radius: 8px;
        background: #3345ff;
        color: #ffffff;
        font-size: 0.78rem;
        font-weight: 900;
        flex-shrink: 0;
    }

    .card-body {
        flex: 1;
    }

    .card-body h2 {
        font-size: 1rem;
        font-weight: 800;
        color: #111936;
        margin: 0 0 0.3rem;
    }

    .card-body p {
        font-size: 0.82rem;
        color: #687086;
        margin: 0;
        line-height: 1.5;
    }

    .card-arrow {
        color: #3345ff;
        font-size: 1.2rem;
        flex-shrink: 0;
    }

</style>
