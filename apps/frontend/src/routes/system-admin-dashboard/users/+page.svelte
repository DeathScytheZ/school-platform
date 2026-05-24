<script>
    import { onMount } from "svelte";
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';

    let { data } = $props();

    let allUsers = $state([]);
    let loading = $state(true);
    let error = $state('');

    let searchName = $state('');
    let searchId = $state('');
    let selectedRole = $state('all');

    const roles = ['all', 'teacher', 'staff', 'parent', 'child'];

    const roleColors = {
        teacher: '#3345ff',
        staff: '#0f8aa6',
        parent: '#7c3aed',
        child: '#d97706'
    };

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
    <AppHeader
        profile={data.profile}
        eyebrow="Administration"
        title="Users"
        subtitle="Browse and filter registered teacher and staff accounts."
        backHref="/system-admin-dashboard"
        backLabel="← Dashboard"
    />

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
                            <td>
                                <span
                                    class="badge"
                                    style:background={roleColors[user.role] ?? '#687086'}
                                >
                                    {user.role}
                                </span>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        </div>
    {/if}

    <AppFooter profile={data.profile} context="User directory" />
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
        max-width: 1100px;
        margin: 0 auto;
        padding: 2rem;
    }

    .filters {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: center;
        margin-bottom: 1.25rem;
    }

    .filter-input {
        background: #ffffff;
        border: 1px solid #d9deea;
        border-radius: 4px;
        color: #101424;
        padding: 0.5rem 0.9rem;
        font-size: 0.875rem;
        outline: none;
        transition: border-color 0.2s;
        width: 220px;
    }
    .filter-input:focus {
        border-color: #3345ff;
        box-shadow: 0 0 0 4px rgba(51, 69, 255, 0.11);
    }
    .filter-input::placeholder { color: #a2a8b8; }

    .role-tabs {
        display: flex;
        gap: 0.4rem;
        background: rgba(255, 255, 255, 0.76);
        border: 1px solid #d9deea;
        border-radius: 8px;
        padding: 4px;
    }

    .role-tab {
        background: none;
        border: none;
        color: #687086;
        padding: 4px 14px;
        border-radius: 6px;
        font-size: 0.825rem;
        font-weight: 600;
        cursor: pointer;
        transition: background 0.15s, color 0.15s;
    }
    .role-tab.active {
        background: #3345ff;
        color: #ffffff;
    }

    .count {
        font-size: 0.8rem;
        color: #687086;
        margin: 0 0 0.75rem;
    }

    .state-msg {
        text-align: center;
        color: #687086;
        margin-top: 4rem;
    }
    .state-msg.error { color: #a22929; }

    .table-wrapper {
        overflow-x: auto;
        border-radius: 8px;
        border: 1px solid rgba(217, 222, 234, 0.95);
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0 24px 70px rgba(22, 28, 45, 0.1);
    }

    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.875rem;
    }

    thead tr { background: #f7f8fc; }

    th {
        padding: 0.85rem 1rem;
        text-align: left;
        font-weight: 600;
        color: #687086;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.05em;
        white-space: nowrap;
    }

    tbody tr {
        border-top: 1px solid #e6eaf2;
        transition: background 0.15s;
    }
    tbody tr:hover { background: #fbfcff; }

    td {
        padding: 0.85rem 1rem;
        vertical-align: middle;
        color: #242b42;
    }

    code {
        background: #eef1ff;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.8rem;
        color: #3345ff;
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
</style>
