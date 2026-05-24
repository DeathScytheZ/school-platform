<script>
    import { enhance } from '$app/forms';
    import AppHeader from '$lib/components/AppHeader.svelte';
    import AppFooter from '$lib/components/AppFooter.svelte';

    let { data, form } = $props();
    let activeSection = $state('students');

    const navItems = [
        { id: 'students', label: 'My Students' },
        { id: 'performance', label: 'Performance' },
        { id: 'behavior', label: 'Behavior' },
        { id: 'grades', label: 'Grades' }
    ];
</script>

<div class="dashboard">
    <aside class="sidebar">
        <div class="brand">
            <span>Teacher</span>
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
            eyebrow="Teacher Workspace"
            title="Teacher Dashboard"
            subtitle="Manage students, performance remarks, and behavior notes."
        />

        {#if activeSection === 'students'}
            <section class="panel">
                <div class="panel-heading">
                    <h2>My Students</h2>
                    <span>{data.students?.length || 0}</span>
                </div>

                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each data.students || [] as student}
                                <tr>
                                    <td>{student.first_name}</td>
                                    <td>{student.last_name}</td>
                                </tr>
                            {:else}
                                <tr>
                                    <td colspan="2" class="empty-cell">No students found</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </section>
        {:else if activeSection === 'performance'}
            <section class="panel">
                <div class="panel-heading">
                    <h2>Performance</h2>
                    <span>{data.performance?.length || 0}</span>
                </div>

                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each data.performance || [] as row}
                                <tr>
                                    <td>{row.first_name}</td>
                                    <td>{row.last_name}</td>
                                    <td>{row.remark}</td>
                                </tr>
                            {:else}
                                <tr>
                                    <td colspan="3" class="empty-cell">No performance remarks found</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>

                <form class="remark-form" method="POST" action="?/setPerformance" use:enhance>
                    <input type="hidden" name="teacherId" value={data.teacherId} />

                    <div class="input-group">
                        <label for="performance-child">Student</label>
                        <select id="performance-child" name="childId" required>
                            <option value="" disabled selected>Select a student</option>
                            {#each data.students || [] as student}
                                <option value={student.id}>{student.first_name} {student.last_name}</option>
                            {/each}
                        </select>
                    </div>

                    <div class="input-group">
                        <label for="performance-remark">Remark</label>
                        <textarea id="performance-remark" name="remark" rows="4" required></textarea>
                    </div>

                    <button type="submit">Save Performance</button>

                    {#if form?.success && form?.action === 'setPerformance'}
                        <p class="success-msg">Performance updated successfully.</p>
                    {:else if form?.error && form?.action === 'setPerformance'}
                        <p class="error-msg">{form.error}</p>
                    {/if}
                </form>
            </section>
        {:else if activeSection === 'behavior'}
            <section class="panel">
                <div class="panel-heading">
                    <h2>Behavior</h2>
                    <span>{data.behavior?.length || 0}</span>
                </div>

                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Remark</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each data.behavior || [] as row}
                                <tr>
                                    <td>{row.first_name}</td>
                                    <td>{row.last_name}</td>
                                    <td>{row.remark}</td>
                                </tr>
                            {:else}
                                <tr>
                                    <td colspan="3" class="empty-cell">No behavior remarks found</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>

                <form class="remark-form" method="POST" action="?/setBehavior" use:enhance>
                    <input type="hidden" name="teacherId" value={data.teacherId} />

                    <div class="input-group">
                        <label for="behavior-child">Student</label>
                        <select id="behavior-child" name="childId" required>
                            <option value="" disabled selected>Select a student</option>
                            {#each data.students || [] as student}
                                <option value={student.id}>{student.first_name} {student.last_name}</option>
                            {/each}
                        </select>
                    </div>

                    <div class="input-group">
                        <label for="behavior-remark">Remark</label>
                        <textarea id="behavior-remark" name="remark" rows="4" required></textarea>
                    </div>

                    <button type="submit">Save Behavior</button>

                    {#if form?.success && form?.action === 'setBehavior'}
                        <p class="success-msg">Behavior updated successfully.</p>
                    {:else if form?.error && form?.action === 'setBehavior'}
                        <p class="error-msg">{form.error}</p>
                    {/if}
                </form>
            </section>
        {:else if activeSection === 'grades'}
            <section class="panel">
                <div class="panel-heading">
                    <h2>Grades</h2>
                    <span>{data.grades?.length || 0}</span>
                </div>

                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Value</th>
                                <th>Date</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {#each data.grades || [] as row}
                                <tr>
                                    <td>{row.first_name}</td>
                                    <td>{row.last_name}</td>
                                    <td>{row.value}</td>
                                    <td>{new Date(row.date).toLocaleDateString()}</td>
                                    <td>{row.type}</td>
                                </tr>
                            {:else}
                                <tr>
                                    <td colspan="5" class="empty-cell">No grades found</td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>

                <form class="remark-form" method="POST" action="?/addGrade" use:enhance>
                    <input type="hidden" name="teacherId" value={data.teacherId || 1} />

                    <div class="input-group">
                        <label for="grade-child">Student</label>
                        <select id="grade-child" name="childId" required>
                            <option value="" disabled selected>Select a student</option>
                            {#each data.students || [] as student}
                                <option value={student.id}>{student.first_name} {student.last_name}</option>
                            {/each}
                        </select>
                    </div>

                    <div class="input-group">
                        <label for="grade-value">Value</label>
                        <input id="grade-value" name="value" type="number" min="0" max="20" step="0.01" required />
                    </div>

                    <div class="input-group">
                        <label for="grade-date">Date</label>
                        <input id="grade-date" name="date" type="date" required />
                    </div>

                    <div class="input-group">
                        <label for="grade-type">Type</label>
                        <select id="grade-type" name="type" required>
                            <option value="" disabled selected>Select a type</option>
                            <option value="school">school</option>
                            <option value="quran">quran</option>
                            <option value="sport">sport</option>
                        </select>
                    </div>

                    <button type="submit">Save Grade</button>

                    {#if form?.success && form?.action === 'addGrade'}
                        <p class="success-msg">Grade added successfully.</p>
                    {:else if form?.error && form?.action === 'addGrade'}
                        <p class="error-msg">{form.error}</p>
                    {/if}
                </form>
            </section>
        {/if}

        <AppFooter profile={data.profile} context="Teacher workspace" />
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

    .table-wrap {
        overflow-x: auto;
    }

    table {
        border-collapse: collapse;
        min-width: 520px;
        width: 100%;
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

    .remark-form {
        border-top: 1px solid #e6eaf2;
        display: grid;
        gap: 1rem;
        margin-top: 1.5rem;
        max-width: 560px;
        padding-top: 1.5rem;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    label {
        color: #242b42;
        font-size: 0.82rem;
        font-weight: 700;
    }

    input,
    select,
    textarea {
        background: #ffffff;
        border: 1px solid #d9deea;
        border-radius: 4px;
        color: #101424;
        font: inherit;
        padding: 0.7rem 0.75rem;
    }

    input[type="date"] {
        color-scheme: light;
    }

    input:focus,
    select:focus,
    textarea:focus {
        border-color: #3345ff;
        box-shadow: 0 0 0 4px rgba(51, 69, 255, 0.11);
        outline: none;
    }

    .remark-form button {
        background: #3345ff;
        border: 0;
        border-radius: 4px;
        color: white;
        cursor: pointer;
        font-weight: 800;
        padding: 0.8rem 1rem;
        box-shadow: 0 14px 26px rgba(51, 69, 255, 0.22);
    }

    .remark-form button:hover {
        background: #2635df;
    }

    .success-msg,
    .error-msg {
        font-size: 0.85rem;
        margin: 0;
    }

    .success-msg {
        color: #0f9f6e;
        font-weight: 700;
    }

    .error-msg {
        color: #a22929;
        font-weight: 700;
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
            grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        nav button {
            text-align: center;
        }

        .content {
            padding: 1.5rem;
        }
    }
</style>
