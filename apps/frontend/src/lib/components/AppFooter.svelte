<script>
    let { profile = null, context = 'School Platform' } = $props();

    const name = $derived(
        profile?.firstName && profile?.lastName
            ? `${profile.firstName} ${profile.lastName}`
            : profile?.firstName || profile?.lastName || profile?.officialId || 'Current session'
    );
</script>

<footer class="app-footer">
    <span>{context}</span>
    <span>{name}</span>
</footer>

<style>
    .app-footer {
        align-items: center;
        border-top: 1px solid rgba(217, 222, 234, 0.95);
        color: #687086;
        display: flex;
        font-size: 0.82rem;
        font-weight: 700;
        justify-content: space-between;
        margin-top: 2rem;
        padding-top: 1rem;
    }

    @media (max-width: 560px) {
        .app-footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 0.35rem;
        }
    }
</style>
