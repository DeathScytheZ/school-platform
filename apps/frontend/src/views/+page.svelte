<script>
    const features = [
        {
            title: 'Unified dashboards',
            description: 'Teachers, staff, parents, and students each get a workspace tailored to their role.'
        },
        {
            title: 'Grades & progress',
            description: 'Track academic performance, behavior, and remarks in one secure place.'
        },
        {
            title: 'School-wide communication',
            description: 'Announcements and updates reach the right people at the right time.'
        }
    ];
</script>

<div class="landing">
    <header class="site-header">
        <a class="brand" href="/" aria-label="School Platform home">
            <span class="brand-mark">S</span>
            <span>School Platform</span>
        </a>
        <nav class="header-nav" aria-label="Account access">
            <a class="nav-link" href="/auth">Log in</a>
            <a class="nav-cta" href="/auth?mode=signup">Sign up</a>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="hero-copy">
                <p class="eyebrow">School management, simplified</p>
                <h1>One platform for your entire school community</h1>
                <p class="lead">
                    Manage classes, grades, and communication with a modern workspace built for
                    teachers, staff, parents, and students.
                </p>
                <div class="hero-actions">
                    <a class="primary-button" href="/auth">Log in</a>
                    <a class="secondary-button" href="/auth?mode=signup">Request access</a>
                </div>
                <ul class="hero-stats" aria-label="Platform highlights">
                    <li>
                        <strong>Secure</strong>
                        <span>Role-based access</span>
                    </li>
                    <li>
                        <strong>Connected</strong>
                        <span>Parents &amp; staff aligned</span>
                    </li>
                    <li>
                        <strong>Clear</strong>
                        <span>Grades &amp; updates in one view</span>
                    </li>
                </ul>
            </div>

            <aside class="hero-visual" aria-hidden="true">
                <div class="visual-panel">
                    <div class="visual-content">
                        <div class="glass-cube">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="floating-card card-one">
                        <span class="card-label">Grades</span>
                        <span class="card-value">18.5</span>
                    </div>
                    <div class="floating-card card-two">
                        <span class="card-label">Announcements</span>
                        <span class="card-dot"></span>
                    </div>
                </div>
            </aside>
        </section>

        <section class="features" aria-labelledby="features-heading">
            <div class="features-intro">
                <p class="eyebrow">Why School Platform</p>
                <h2 id="features-heading">Everything your school needs, in one place</h2>
            </div>
            <div class="feature-grid">
                {#each features as feature}
                    <article class="feature-card">
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </article>
                {/each}
            </div>
        </section>

        <section class="cta-band">
            <div class="cta-inner">
                <h2>Ready to get started?</h2>
                <p>Sign in with your official ID or request a new account for admin approval.</p>
                <div class="cta-actions">
                    <a class="primary-button" href="/auth">Log in</a>
                    <a class="secondary-button light" href="/auth?mode=signup">Create an account</a>
                </div>
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <a class="brand" href="/" aria-label="School Platform home">
            <span class="brand-mark">S</span>
            <span>School Platform</span>
        </a>
        <p>&copy; {new Date().getFullYear()} School Platform. All rights reserved.</p>
    </footer>
</div>

<style>
    :global(html, body) {
        margin: 0;
        padding: 0;
        min-height: 100dvh;
        color: #101424;
        background:
            radial-gradient(circle at 18% 12%, rgba(255, 255, 255, 0.9), transparent 28%),
            linear-gradient(135deg, #f2f4f7 0%, #d8dde7 100%);
        font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }

    :global(*) {
        box-sizing: border-box;
    }

    .landing {
        min-height: 100dvh;
        display: flex;
        flex-direction: column;
    }

    .site-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 22px clamp(24px, 5vw, 64px);
    }

    .brand {
        display: inline-flex;
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

    .header-nav {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .nav-link {
        color: #3a425c;
        font-size: 0.9rem;
        font-weight: 700;
        text-decoration: none;
        padding: 0.55rem 0.9rem;
        border-radius: 4px;
        transition: color 0.15s ease, background 0.15s ease;
    }

    .nav-link:hover {
        color: #111936;
        background: rgba(255, 255, 255, 0.65);
    }

    .nav-cta {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background: #3345ff;
        color: white;
        font-size: 0.9rem;
        font-weight: 800;
        text-decoration: none;
        padding: 0.62rem 1.1rem;
        box-shadow: 0 14px 26px rgba(51, 69, 255, 0.22);
        transition: background 0.15s ease;
    }

    .nav-cta:hover {
        background: #2635df;
    }

    main {
        flex: 1;
    }

    .hero {
        display: grid;
        grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        gap: clamp(32px, 5vw, 72px);
        align-items: center;
        padding: clamp(24px, 4vw, 48px) clamp(24px, 5vw, 64px) clamp(56px, 8vw, 96px);
        max-width: 1280px;
        margin: 0 auto;
        width: 100%;
    }

    .eyebrow {
        margin: 0 0 14px;
        color: #3345ff;
        font-size: 0.76rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    h1 {
        margin: 0 0 18px;
        color: #090f2d;
        font-size: clamp(2.4rem, 5vw, 3.6rem);
        line-height: 1.06;
        letter-spacing: -0.02em;
        max-width: 14ch;
    }

    .lead {
        margin: 0 0 28px;
        color: #5f6780;
        font-size: clamp(1rem, 1.6vw, 1.12rem);
        line-height: 1.65;
        max-width: 52ch;
    }

    .hero-actions,
    .cta-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
    }

    .primary-button,
    .secondary-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        font-size: 0.95rem;
        font-weight: 800;
        text-decoration: none;
        padding: 0.9rem 1.35rem;
        transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
    }

    .primary-button {
        background: #3345ff;
        color: white;
        box-shadow: 0 14px 26px rgba(51, 69, 255, 0.22);
    }

    .primary-button:hover {
        background: #2635df;
    }

    .secondary-button {
        border: 1px solid rgba(51, 69, 255, 0.28);
        background: rgba(255, 255, 255, 0.72);
        color: #24306f;
    }

    .secondary-button:hover {
        background: white;
        border-color: rgba(51, 69, 255, 0.45);
    }

    .secondary-button.light {
        border-color: rgba(255, 255, 255, 0.35);
        background: rgba(255, 255, 255, 0.12);
        color: white;
    }

    .secondary-button.light:hover {
        background: rgba(255, 255, 255, 0.2);
    }

    .hero-stats {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        margin: 40px 0 0;
        padding: 0;
        list-style: none;
    }

    .hero-stats li {
        display: grid;
        gap: 4px;
        padding: 16px 18px;
        border: 1px solid rgba(217, 222, 234, 0.95);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.78);
        box-shadow: 0 12px 30px rgba(22, 28, 45, 0.06);
    }

    .hero-stats strong {
        color: #090f2d;
        font-size: 0.92rem;
    }

    .hero-stats span {
        color: #687086;
        font-size: 0.82rem;
        line-height: 1.45;
    }

    .hero-visual {
        position: relative;
        min-height: 420px;
    }

    .visual-panel {
        position: relative;
        height: 100%;
        min-height: 420px;
        display: grid;
        place-items: center;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.72);
        border-radius: 8px;
        background:
            radial-gradient(circle at 42% 38%, rgba(255, 255, 255, 0.95), transparent 24%),
            linear-gradient(145deg, #eef1f6 0%, #d6dce6 48%, #f8fafc 100%);
        box-shadow: 0 28px 90px rgba(22, 28, 45, 0.12);
    }

    .visual-panel::before {
        content: "";
        position: absolute;
        inset: auto -12% -20% 16%;
        height: 46%;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.8);
        filter: blur(22px);
        transform: rotate(-10deg);
    }

    .visual-content {
        position: relative;
        width: min(420px, 80%);
        aspect-ratio: 1;
        display: grid;
        place-items: center;
    }

    .glass-cube {
        position: relative;
        width: min(260px, 58vw);
        aspect-ratio: 1;
        border-radius: 18px;
        background:
            linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(75, 96, 255, 0.3)),
            radial-gradient(circle at 26% 22%, rgba(255, 255, 255, 0.95), transparent 26%),
            linear-gradient(45deg, rgba(69, 80, 255, 0.82), rgba(135, 190, 255, 0.35));
        box-shadow:
            inset 26px 24px 50px rgba(255, 255, 255, 0.45),
            inset -30px -34px 60px rgba(46, 55, 190, 0.34),
            0 38px 60px rgba(57, 65, 139, 0.24);
        transform: rotate(-14deg) skew(4deg);
    }

    .glass-cube::before,
    .glass-cube::after,
    .glass-cube span {
        content: "";
        position: absolute;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.5);
        filter: blur(3px);
    }

    .glass-cube::before {
        width: 58%;
        height: 18px;
        left: 16%;
        top: 16%;
        transform: rotate(14deg);
    }

    .glass-cube::after {
        width: 22px;
        height: 62%;
        right: 18%;
        top: 18%;
        background: rgba(37, 54, 255, 0.2);
    }

    .glass-cube span:nth-child(1) {
        width: 36%;
        height: 28px;
        right: 13%;
        bottom: 26%;
        background: rgba(33, 52, 255, 0.3);
        transform: rotate(-25deg);
    }

    .glass-cube span:nth-child(2) {
        width: 18px;
        height: 32%;
        left: 23%;
        bottom: 18%;
    }

    .glass-cube span:nth-child(3) {
        width: 48%;
        height: 1px;
        right: 8%;
        top: 46%;
        background: rgba(255, 255, 255, 0.65);
    }

    .floating-card {
        position: absolute;
        display: grid;
        gap: 6px;
        padding: 14px 16px;
        border: 1px solid rgba(255, 255, 255, 0.85);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.92);
        box-shadow: 0 18px 40px rgba(22, 28, 45, 0.12);
        backdrop-filter: blur(8px);
    }

    .card-one {
        top: 14%;
        right: 8%;
    }

    .card-two {
        left: 8%;
        bottom: 14%;
        grid-auto-flow: column;
        align-items: center;
        gap: 10px;
    }

    .card-label {
        color: #5f6780;
        font-size: 0.76rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.03em;
    }

    .card-value {
        color: #090f2d;
        font-size: 1.35rem;
        font-weight: 800;
    }

    .card-dot {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #3345ff;
        box-shadow: 0 0 0 6px rgba(51, 69, 255, 0.18);
    }

    .features {
        padding: 0 clamp(24px, 5vw, 64px) clamp(64px, 8vw, 96px);
        max-width: 1280px;
        margin: 0 auto;
        width: 100%;
    }

    .features-intro {
        margin-bottom: 28px;
    }

    .features-intro h2 {
        margin: 0;
        color: #090f2d;
        font-size: clamp(1.6rem, 3vw, 2.2rem);
        line-height: 1.15;
        max-width: 22ch;
    }

    .feature-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
    }

    .feature-card {
        padding: 28px 26px;
        border: 1px solid rgba(217, 222, 234, 0.95);
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.86);
        box-shadow: 0 18px 44px rgba(22, 28, 45, 0.07);
    }

    .feature-card h3 {
        margin: 0 0 10px;
        color: #090f2d;
        font-size: 1.05rem;
    }

    .feature-card p {
        margin: 0;
        color: #687086;
        font-size: 0.94rem;
        line-height: 1.6;
    }

    .cta-band {
        padding: 0 clamp(24px, 5vw, 64px) clamp(48px, 6vw, 72px);
    }

    .cta-inner {
        max-width: 1280px;
        margin: 0 auto;
        padding: clamp(32px, 5vw, 48px);
        border-radius: 8px;
        background: linear-gradient(135deg, #2f3fe8 0%, #3345ff 52%, #4f63ff 100%);
        box-shadow: 0 24px 60px rgba(51, 69, 255, 0.28);
        text-align: center;
    }

    .cta-inner h2 {
        margin: 0 0 10px;
        color: white;
        font-size: clamp(1.5rem, 3vw, 2rem);
    }

    .cta-inner p {
        margin: 0 auto 24px;
        max-width: 48ch;
        color: rgba(255, 255, 255, 0.86);
        line-height: 1.6;
    }

    .cta-actions {
        justify-content: center;
    }

    .site-footer {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        padding: 24px clamp(24px, 5vw, 64px) 32px;
        border-top: 1px solid rgba(217, 222, 234, 0.8);
    }

    .site-footer p {
        margin: 0;
        color: #687086;
        font-size: 0.86rem;
    }

    @media (max-width: 960px) {
        .hero {
            grid-template-columns: 1fr;
        }

        .hero-visual {
            order: -1;
            min-height: 300px;
        }

        .visual-panel {
            min-height: 300px;
        }

        h1 {
            max-width: none;
        }

        .hero-stats {
            grid-template-columns: 1fr;
        }

        .feature-grid {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 560px) {
        .site-header {
            padding-inline: 20px;
        }

        .header-nav .nav-link {
            display: none;
        }

        .hero,
        .features,
        .cta-band {
            padding-inline: 20px;
        }

        .floating-card {
            display: none;
        }

        .glass-cube {
            width: 180px;
        }
    }
</style>
