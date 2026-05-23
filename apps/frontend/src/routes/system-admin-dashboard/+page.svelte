<div class="page">
    <header>
        <h1>System Admin</h1>
        <p>Select a section to manage</p>
    </header>

    <div class="grid">
        <a href="/system-admin-dashboard/registration-requests" class="card">
            <div class="card-icon">📋</div>
            <div class="card-body">
                <h2>Registration Requests</h2>
                <p>Review, approve, or reject pending staff and teacher registration requests.</p>
            </div>
            <span class="card-arrow">→</span>
        </a>

        <a href="/system-admin-dashboard/users" class="card">
            <div class="card-icon">👥</div>
            <div class="card-body">
                <h2>User List</h2>
                <p>Browse and search all registered users in the database.</p>
            </div>
            <span class="card-arrow">→</span>
        </a>

        <a href="/system-admin-dashboard/add-child" class="card">
            <div class="card-icon">🧒</div>
            <div class="card-body">
                <h2>Add Child</h2>
                <p>Register a new child into the system with their details.</p>
            </div>
            <span class="card-arrow">→</span>
        </a>

        <a href="/system-admin-dashboard/add-parent" class="card">
            <div class="card-icon">👨‍👩‍👧</div>
            <div class="card-body">
                <h2>Add Parent</h2>
                <p>Register a new parent and link them to their children.</p>
            </div>
            <span class="card-arrow">→</span>
        </a>
    </div>
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
        max-width: 900px;
        margin: 0 auto;
        padding: 4rem 2rem;
    }

    header {
        margin-bottom: 3rem;
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

    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.25rem;
    }

    .card {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding: 1.5rem;
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 14px;
        text-decoration: none;
        color: inherit;
        transition: border-color 0.2s, background 0.2s;
        cursor: pointer;
    }

    .card:not(.disabled):hover {
        background: #243044;
        border-color: #4f6a9a;
    }

    .card.disabled {
        opacity: 0.5;
        cursor: default;
    }

    .card-icon {
        font-size: 2rem;
        flex-shrink: 0;
    }

    .card-body {
        flex: 1;
    }

    .card-body h2 {
        font-size: 1rem;
        font-weight: 600;
        color: #f1f5f9;
        margin: 0 0 0.3rem;
    }

    .card-body p {
        font-size: 0.82rem;
        color: #64748b;
        margin: 0;
        line-height: 1.5;
    }

    .card-arrow {
        color: #475569;
        font-size: 1.2rem;
        flex-shrink: 0;
    }

    .coming-soon {
        font-size: 0.7rem;
        font-weight: 600;
        color: #64748b;
        background: #0f1117;
        border: 1px solid #334155;
        border-radius: 999px;
        padding: 3px 10px;
        white-space: nowrap;
        flex-shrink: 0;
    }

</style>
