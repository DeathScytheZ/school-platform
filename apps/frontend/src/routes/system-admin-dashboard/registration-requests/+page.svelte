<script>
    import { enhance } from "$app/forms";
    import { onMount } from "svelte";

    let data = $state([]);
    let loading = $state(true);
    let error = $state('');

    const statusColors = {
        pending: '#f59e0b',
        gov_verified: '#3b82f6',
        gov_rejected: '#ef4444',
        accepted: '#10b981',
        rejected: '#ef4444'
    };

    onMount(async () => {
        try {
            const response = await fetch("http://localhost:3000/api/system-admin-dashboard/request", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            const responseData = await response.json();
            data = responseData.requests ?? [];
        } catch(e) {
            error = 'Failed to load requests.';
        } finally {
            loading = false;
        }
    });
</script>

<div class="page">
    <header>
        <a href="/system-admin-dashboard" class="back-link">← Dashboard</a>
        <h1>Registration Requests</h1>
    </header>

    {#if loading}
        <p class="state-msg">Loading…</p>
    {:else if error}
        <p class="state-msg error">{error}</p>
    {:else if data.length === 0}
        <p class="state-msg">No registration requests found.</p>
    {:else}
        <div class="table-wrapper">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Official ID</th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Role</th>
                        <th>Detail</th>
                        <th>Submitted</th>
                        <th>Status</th>
                        <th colspan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {#each data as row (row.id)}
                        <tr>
                            <td>{row.id}</td>
                            <td><code>{row.official_id}</code></td>
                            <td>{row.first_name} {row.last_name}</td>
                            <td>{new Date(row.date_of_birth).toLocaleDateString()}</td>
                            <td><span class="badge role">{row.role}</span></td>
                            <td>{row.role_detail}</td>
                            <td>{new Date(row.request_date).toLocaleDateString()}</td>
                            <td>
                                <span class="badge" style="background:{statusColors[row.status] ?? '#666'}">
                                    {row.status.replace('_', ' ')}
                                </span>
                            </td>
                            <td>
                                <form method="POST" action="?/approveRequest" use:enhance>
                                    <input type="hidden" name="id" value={row.id}>
                                    <button class="btn approve" type="submit">Approve</button>
                                </form>
                            </td>
                            <td>
                                <form method="POST" action="?/rejectRequest" use:enhance>
                                    <input type="hidden" name="id" value={row.id}>
                                    <button class="btn reject" type="submit">Reject</button>
                                </form>
                            </td>
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
        max-width: 1200px;
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

    .state-msg {
        text-align: center;
        color: #64748b;
        margin-top: 4rem;
        font-size: 1rem;
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

    thead tr {
        background: #1e293b;
    }

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

    .badge.role { background: #334155; }

    .btn {
        padding: 5px 14px;
        border: none;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.2s;
    }
    .btn:hover { opacity: 0.8; }
    .btn.approve { background: #10b981; color: #fff; }
    .btn.reject  { background: #ef4444; color: #fff; }
</style>
