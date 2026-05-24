<section class="home">
    <div class="panel">
        <a class="brand" href="/auth" aria-label="School platform authentication">
            <span class="brand-mark">S</span>
            <span>School Platform</span>
        </a>
        <div>
            <p class="eyebrow">Access Portal</p>
            <h1>Welcome to your school workspace</h1>
            <p class="copy">Log in or request access to continue.</p>
        </div>
        <a class="primary-link" href="/auth">Continue</a>
    </div>
</section>

<style>
    :global(html, body) {
        margin: 0;
        padding: 0;
        min-height: 100dvh;
        background:
            radial-gradient(circle at 18% 12%, rgba(255, 255, 255, 0.9), transparent 28%),
            linear-gradient(135deg, #f2f4f7 0%, #d8dde7 100%);
        color: #101424;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    .home {
        min-height: 100dvh;
        display: grid;
        place-items: center;
        padding: 24px;
    }

    .panel {
        width: min(480px, 100%);
        display: grid;
        gap: 32px;
        border: 1px solid rgba(217, 222, 234, 0.95);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.9);
        box-shadow: 0 24px 70px rgba(22, 28, 45, 0.1);
        padding: 44px;
    }

    .brand {
        display: inline-flex;
        width: fit-content;
        align-items: center;
        gap: 10px;
        color: #111936;
        font-size: 0.92rem;
        font-weight: 800;
        text-decoration: none;
    }

    .brand-mark {
        display: grid;
        width: 34px;
        height: 34px;
        place-items: center;
        border-radius: 8px;
        background: #3345ff;
        color: white;
        font-weight: 900;
    }

    .eyebrow {
        margin: 0 0 12px;
        color: #3345ff;
        font-size: 0.76rem;
        font-weight: 800;
        text-transform: uppercase;
    }

    h1 {
        margin: 0 0 12px;
        color: #090f2d;
        font-size: 2.2rem;
        line-height: 1.08;
    }

    .copy {
        margin: 0;
        color: #687086;
        line-height: 1.55;
    }

    .primary-link {
        display: inline-flex;
        justify-content: center;
        border-radius: 4px;
        background: #3345ff;
        color: white;
        font-weight: 800;
        padding: 0.85rem 1rem;
        text-decoration: none;
        box-shadow: 0 14px 26px rgba(51, 69, 255, 0.22);
    }

    .primary-link:hover {
        background: #2635df;
    }
</style>
