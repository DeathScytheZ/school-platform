<script>
    import { onMount } from "svelte";

    let allUsers = $state([]);
    let loading = $state(true);
    let error = $state('');

    let searchName = $state('');
    let searchId = $state('');
    let selectedRole = $state('all');

    const roles = ['all', 'teacher', 'staff'];

    let filtered = $derived(
        allUsers.filter(u => {
            const fullName = `${u.first_name} ${u.last_name}`.toLowerCase();
            const matchName = fullName.includes(searchName.toLowerCase());
            const matchId = u.official_id.toLowerCase().includes(searchId.toLowerCase());
            const matchRole = selectedRole === 'all' || u.role === selectedRole;
            return matchName && matchId && matchRole;
        })
    );

    onMount(async () => {
        try {
            const response = await fetch("http://localhost:3000/api/system-admin-dashboard/users");
            const data = await response.json();
            allUsers = data.users ?? [];
        } catch(e) {
            error = 'Failed to load users.';
        } finally {
            loading = false;
        }
    });
</script>

<div class="page">
    <header>
        <a href="/system-admin-dashboard" class="back-link">← Dashboard</a>
        <h1>Users</h1>
    </header>

    <div class="filters">
        <input
            class="filter-input"
            type="text"
            placeholder="Search by name…"
            bind:value={searchName}
        />
        <input
            class="filter-input"
            type="text"
            placeholder="Search by official ID…"
            bind:value={searchId}
        />
        <div class="role-tabs">
            {#each roles as role}
                <button
                    class="role-tab"
                    class:active={selectedRole === role}
                    onclick={() => selectedRole = role}
                >
                    {role === 'all' ? 'All' : role.charAt(0).toUpperCase() + role.slice(1)}
                </button>
            {/each}
        </div>
    </div>

    {#if loading}
        <p class="state-msg">Loading…</p>
    {:else if error}
        <p class="state-msg error">{error}</p>
    {:else if filtered.length === 0}
        <p class="state-msg">No users match your filters.</p>
    {:else}
        <p class="count">{filtered.length} user{filtered.length !== 1 ? 's' : ''}</p>
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Official ID</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {#each filtered as user (user.id)}
                        <tr>
                            <td>{user.id}</td>
                            <td><code>{user.official_id}</code></td>
                            <td>{user.first_name} {user.last_name}</td>
                            <td>{new Date(user.date_of_birth).toLocaleDateString()}</td>
                            <td>{user.phone ?? '—'}</td>
                            <td>{user.email ?? '—'}</td>
                            <td><span class="badge {user.role}">{user.role}</span></td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}
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
        max-width: 1100px;
        margin: 0 auto;
        padding: 2rem;
    }

    header {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 2rem;
    }

    h1 {
        font-size: 1.6rem;
        font-weight: 600;
        color: #f1f5f9;
        margin: 0;
    }

    .back-link {
        color: #94a3b8;
        text-decoration: none;
        font-size: 0.9rem;
        transition: color 0.2s;
    }
    .back-link:hover { color: #e2e8f0; }

    .filters {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: center;
        margin-bottom: 1.25rem;
    }

    .filter-input {
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 8px;
        color: #e2e8f0;
        padding: 0.5rem 0.9rem;
        font-size: 0.875rem;
        outline: none;
        transition: border-color 0.2s;
        width: 220px;
    }
    .filter-input:focus { border-color: #4f6a9a; }
    .filter-input::placeholder { color: #475569; }

    .role-tabs {
        display: flex;
        gap: 0.4rem;
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 8px;
        padding: 4px;
    }

    .role-tab {
        background: none;
        border: none;
        color: #64748b;
        padding: 4px 14px;
        border-radius: 6px;
        font-size: 0.825rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
    }
    .role-tab.active {
        background: #334155;
        color: #f1f5f9;
    }

    .count {
        font-size: 0.8rem;
        color: #475569;
        margin: 0 0 0.75rem;
    }

    .state-msg {
        text-align: center;
        color: #64748b;
        margin-top: 4rem;
    }
    .state-msg.error { color: #f87171; }

    .table-wrapper {
        overflow-x: auto;
        border-radius: 12px;
        border: 1px solid #1e293b;
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.875rem;
    }

    thead tr { background: #1e293b; }

    th {
        padding: 0.85rem 1rem;
        text-align: left;
        font-weight: 600;
        color: #94a3b8;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
        white-space: nowrap;
    }

    tbody tr {
        border-top: 1px solid #1e293b;
        transition: background 0.15s;
    }
    tbody tr:hover { background: #161c28; }

    td {
        padding: 0.85rem 1rem;
        vertical-align: middle;
        color: #cbd5e1;
    }

    code {
        background: #1e293b;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.8rem;
        color: #7dd3fc;
    }

    .badge {
        display: inline-block;
        padding: 3px 10px;
        border-radius: 999px;
        font-size: 0.75rem;
        font-weight: 600;
        text-transform: capitalize;
        color: #fff;
    }
    .badge.teacher { background: #6366f1; }
    .badge.staff   { background: #0891b2; }
</style>
