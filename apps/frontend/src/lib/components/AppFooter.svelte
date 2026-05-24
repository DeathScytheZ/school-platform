<script>
    let { profile = null, context = 'School Platform' } = $props();

    const name = $derived(
        profile?.firstName && profile?.lastName
            ? `${profile.firstName} ${profile.lastName}`
            : profile?.firstName || profile?.lastName || profile?.officialId || 'Current session'
    );

    const currentYear = new Date().getFullYear();
</script>

<footer class="app-footer">
    <div class="footer-content">
        <div class="footer-section">
            <p class="footer-context">{context}</p>
            <p class="footer-user">
                {name}
            </p>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-section">
            <p class="footer-copyright">&copy; {currentYear} School Platform. All rights reserved.</p>
        </div>
    </div>
</footer>

<style>
    .app-footer {
        border-top: 1px solid rgba(217, 222, 234, 0.95);
        background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.3) 100%);
        margin-top: 2rem;
        padding: 1.25rem 0;
    }

    .footer-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        max-width: 1100px;
        margin: 0 auto;
        padding: 0 1.5rem;
        font-size: 0.8rem;
    }

    .footer-section {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
    }

    .footer-context {
        color: #3345ff;
        font-weight: 700;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        margin: 0;
    }

    .footer-user {
        color: #242b42;
        font-weight: 600;
        margin: 0;
    }

    .footer-copyright {
        color: #687086;
        margin: 0;
        font-weight: 500;
    }

    .footer-divider {
        width: 1px;
        height: 24px;
        background: rgba(217, 222, 234, 0.6);
    }

    @media (max-width: 560px) {
        .app-footer {
            padding: 1rem 0;
        }

        .footer-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
        }

        .footer-divider {
            display: none;
        }
    }
</style>
