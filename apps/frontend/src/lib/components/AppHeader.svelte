<script>
    let {
        profile = null,
        title = 'Dashboard',
        subtitle = '',
        eyebrow = 'School Platform',
        backHref = '',
        backLabel = 'Back'
    } = $props();

    const roleLabels = {
        admin: 'System Admin',
        teacher: 'Teacher',
        staff: 'Staff',
        parent: 'Parent',
        child: 'Student'
    };

    const detailLabels = {
        school: 'School Teacher',
        quran: 'Quran Teacher',
        sport: 'Sports Coach',
        'school-teacher': 'School Teacher',
        'sports-coach': 'Sports Coach',
        headmaster: 'Headmaster',
        principle: 'Principal',
        principal: 'Principal',
        counselor: 'Counselor'
    };

    const displayName = $derived(
        profile?.firstName && profile?.lastName
            ? `${profile.firstName} ${profile.lastName}`
            : profile?.firstName || profile?.lastName || roleLabels[profile?.role] || 'User'
    );

    const roleLabel = $derived(roleLabels[profile?.role] || profile?.role || 'Guest');

    const rawDetail = $derived(
        profile?.teacherSubject ||
            profile?.staffPosition ||
            profile?.childLevel ||
            (profile?.parentWilaya && profile?.parentCommune
                ? `${profile.parentWilaya}, ${profile.parentCommune}`
                : profile?.parentWilaya)
    );

    const detailLabel = $derived(detailLabels[rawDetail] || rawDetail || '');

    const initials = $derived(
        displayName
            .split(' ')
            .filter(Boolean)
            .slice(0, 2)
            .map((part) => part[0])
            .join('')
            .toUpperCase() || 'U'
    );
</script>

<header class="app-header">
    <div class="header-main">
        {#if backHref}
            <a class="back-link" href={backHref}>{backLabel}</a>
        {/if}
        <p class="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {#if subtitle}
            <p class="subtitle">{subtitle}</p>
        {/if}
    </div>

    <div class="profile-card">
        <div class="avatar">{initials}</div>
        <div>
            <strong>{displayName}</strong>
            <span>{roleLabel}{detailLabel ? ` - ${detailLabel}` : ''}</span>
        </div>
    </div>
</header>

<style>
    .app-header {
        align-items: flex-start;
        display: flex;
        gap: 1.5rem;
        justify-content: space-between;
        margin-bottom: 2rem;
    }

    .header-main {
        min-width: 0;
    }

    .back-link {
        color: #3345ff;
        display: inline-block;
        font-size: 0.9rem;
        font-weight: 800;
        margin-bottom: 0.9rem;
        text-decoration: none;
    }

    .back-link:hover {
        color: #2635df;
        text-decoration: underline;
    }

    .eyebrow {
        color: #3345ff;
        font-size: 0.76rem;
        font-weight: 800;
        margin: 0 0 0.65rem;
        text-transform: uppercase;
    }

    h1 {
        color: #090f2d;
        font-size: clamp(1.9rem, 3vw, 2.35rem);
        font-weight: 800;
        line-height: 1.08;
        margin: 0;
    }

    .subtitle {
        color: #687086;
        font-size: 0.95rem;
        line-height: 1.55;
        margin: 0.6rem 0 0;
    }

    .profile-card {
        align-items: center;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid rgba(217, 222, 234, 0.95);
        border-radius: 8px;
        box-shadow: 0 20px 60px rgba(22, 28, 45, 0.08);
        display: flex;
        flex-shrink: 0;
        gap: 0.8rem;
        max-width: 320px;
        min-width: 240px;
        padding: 0.85rem;
    }

    .avatar {
        display: grid;
        width: 42px;
        height: 42px;
        flex-shrink: 0;
        place-items: center;
        border-radius: 8px;
        background: #3345ff;
        color: #ffffff;
        font-size: 0.85rem;
        font-weight: 900;
    }

    .profile-card strong,
    .profile-card span {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .profile-card strong {
        color: #111936;
        font-size: 0.94rem;
    }

    .profile-card span {
        color: #687086;
        font-size: 0.82rem;
        font-weight: 700;
        margin-top: 0.18rem;
    }

    @media (max-width: 760px) {
        .app-header {
            flex-direction: column;
        }

        .profile-card {
            max-width: none;
            min-width: 0;
            width: 100%;
        }
    }
</style>
