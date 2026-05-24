<script>
    import { enhance } from "$app/forms";
    import { onMount } from "svelte";
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';

    let { data: pageData } = $props();

    let data = $state([]);
    let loading = $state(true);
    let error = $state('');
    let availableClasses = $state({});
    let selectedClassIds = $state({});

    const statusColors = {
        pending: '#f59e0b',
        gov_verified: '#3b82f6',
        gov_rejected: '#ef4444',
        accepted: '#10b981',
        rejected: '#ef4444'
    };

    async function loadAvailableClasses(row) {
        if(row.role !== 'teacher' || availableClasses[row.id]) return;

        try {
            const response = await fetch(`http://localhost:3000/api/system-admin-dashboard/available-classes/${row.role_detail}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            const responseData = await response.json();
            availableClasses[row.id] = responseData.classes ?? [];
        } catch(e) {
            availableClasses[row.id] = [];
        }
    }

    onMount(async () => {
        try {
            const response = await fetch("http://localhost:3000/api/system-admin-dashboard/request", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });
            const responseData = await response.json();
            data = responseData.requests ?? [];
            await Promise.all(data.filter((row) => row.role === 'teacher').map(loadAvailableClasses));
        } catch(e) {
            error = 'Failed to load requests.';
        } finally {
            loading = false;
        }
    });
</script>

<div class="page">
    <AppHeader
        profile={pageData.profile}
        eyebrow="Administration"
        title="Registration Requests"
        subtitle="Review, approve, or reject pending teacher and staff access requests."
        backHref="/system-admin-dashboard"
        backLabel="← Dashboard"
    />

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
                                    {#if row.role === 'teacher'}
                                        <select
                                            class="class-select"
                                            required
                                            onchange={(event) => selectedClassIds[row.id] = event.currentTarget.value}
                                        >
                                            <option value="" disabled selected>Select class</option>
                                            {#each availableClasses[row.id] || [] as classItem}
                                                <option value={classItem.id}>{classItem.name} {classItem.year} {classItem.level}</option>
                                            {/each}
                                        </select>
                                        <input type="hidden" name="classId" value={selectedClassIds[row.id] || ''}>
                                    {/if}
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

    <AppFooter profile={pageData.profile} context="Registration review" />
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
        max-width: 1200px;
        margin: 0 auto;
        padding: 2rem;
    }

    .page > :last-child {
        margin-top: auto;
    }

    .state-msg {
        text-align: center;
        color: #687086;
        margin-top: 4rem;
        font-size: 1rem;
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

    thead tr {
        background: #f7f8fc;
    }

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

    .badge.role { background: #687086; }

    .btn {
        padding: 5px 14px;
        border: none;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        transition: opacity 0.2s;
    }
    .btn:hover { opacity: 0.8; }
    .btn.approve { background: #0f9f6e; color: #fff; }
    .btn.reject  { background: #d83b3b; color: #fff; }

    .class-select {
        background: #ffffff;
        border: 1px solid #d9deea;
        border-radius: 4px;
        color: #101424;
        font-size: 0.8rem;
        margin-right: 0.5rem;
        padding: 5px 8px;
    }
</style>
