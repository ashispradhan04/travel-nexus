import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../components/common/LoginHeader';
import { FEATURES, STATS } from '../constants';
import { FeatureType } from '../types';
import '../styles/components/LoginPage.css';

type SocialProvider = 'google' | 'microsoft';

type LoginPageProps = {
  onLogin: () => void;
};

function FeatureIcon({ type }: { type: FeatureType }) {
  switch (type) {
    case 'flight':
      return (
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
          <path d="M4 16L20 8L14 14L12 22L8 16L4 16Z" fill="currentColor" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
          <path d="M12 2L4 5V11C4 16.55 8.64 21.74 12 22C15.36 21.74 20 16.55 20 11V5L12 2Z" fill="currentColor" />
          <path d="M9 11.5L11 14.5L15 9" stroke="var(--light)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'route':
      return (
        <svg viewBox="0 0 24 24" fill="none" width="20" height="20" aria-hidden="true">
          <path d="M5 6H19" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="5" cy="6" r="2" fill="currentColor" />
          <circle cx="19" cy="6" r="2" fill="currentColor" />
          <path d="M12 6V18" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="12" cy="18" r="2" fill="currentColor" />
        </svg>
      );
  }
}

function SocialIcon({ provider }: { provider: SocialProvider }) {
  if (provider === 'google') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M17.64 9.2c0-.64-.06-1.26-.18-1.86H9v3.52h4.84c-.21 1.16-.84 2.14-1.8 2.8v2.32h2.92c1.72-1.58 2.68-3.96 2.68-6.78z" fill="#4285F4" />
        <path d="M9 18c2.43 0 4.48-.8 5.97-2.18l-2.92-2.32c-.8.54-1.82.86-3.05.86-2.35 0-4.34-1.59-5.05-3.74H.95v2.34C2.44 15.9 5.45 18 9 18z" fill="#34A853" />
        <path d="M3.95 10.62A5.41 5.41 0 0 1 3.5 9c0-.62.11-1.22.3-1.78V4.88H.95A8.99 8.99 0 0 0 0 9c0 1.46.36 2.83.95 4.12l2.99-2.5z" fill="#FBBC05" />
        <path d="M9 3.58c1.32 0 2.5.45 3.43 1.34l2.57-2.58C13.48.95 11.43 0 9 0 5.45 0 2.44 2.1.95 4.88l2.99 2.34C4.66 5.17 6.65 3.58 9 3.58z" fill="#EA4335" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" fill="#F05022" />
      <rect x="13" y="3" width="8" height="8" fill="#7CBB00" />
      <rect x="3" y="13" width="8" height="8" fill="#00A4EF" />
      <rect x="13" y="13" width="8" height="8" fill="#FFB900" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
      <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9A2.5 2.5 0 0 1 14.5 17h-9A2.5 2.5 0 0 1 3 14.5v-9Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4.5 5.75l5.5 4.25 5.5-4.25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
      <rect x="4" y="9" width="12" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 9V7a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" aria-hidden="true">
      <path d="M1 10s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="2.5" fill="currentColor" />
    </svg>
  );
}

function FeatureCard({ title, description, iconType }: { title: string; description: string; iconType: FeatureType }) {
  return (
    <article className="feature-card">
      <div className="feature-card__icon">
        <FeatureIcon type={iconType} />
      </div>
      <div className="feature-card__content">
        <p className="feature-card__title">{title}</p>
        <p className="feature-card__description">{description}</p>
      </div>
    </article>
  );
}

function SocialSignInButton({ provider, label }: { provider: SocialProvider; label: string }) {
  return (
    <button className="social-signin-button" type="button">
      <span className="social-signin-button__icon">
        <SocialIcon provider={provider} />
      </span>
      <span>{label}</span>
    </button>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="login-page__stat-card">
      <p className="login-page__stat-value">{value}</p>
      <p className="login-page__stat-label">{label}</p>
    </div>
  );
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin();
    navigate('/', { replace: true });
  };

  const features = FEATURES;

  const stats = STATS;

  return (
    <div className="login-page">
      <LoginHeader />

      <main className="login-page__main">
        <section className="login-page__promo">
          <span className="login-page__eyebrow">DA-TRAVEL-NEXUS · CORPORATE TRAVEL</span>
          <div className="login-page__hero-copy">
            <h1 className="login-page__hero-title">
              Travel that works <span>for your business.</span>
            </h1>
            <p className="login-page__hero-description">
              End-to-end corporate travel management. Book, approve, and track — all within your company policy.
            </p>
          </div>

          <div className="login-page__features">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                iconType={feature.iconType}
              />
            ))}
          </div>

          <div className="login-page__divider" />

          <div className="login-page__stats">
            {stats.map((stat) => (
              <StatCard key={stat.value} value={stat.value} label={stat.label} />
            ))}
          </div>
        </section>

        <section className="login-page__panel">
          <div className="login-panel">
            <div className="login-panel__header">
              <h2 className="login-panel__title">
                Sign in to <span>Nexus</span>
              </h2>
              <p className="login-panel__subtitle">Use your corporate account or company SSO to continue.</p>
            </div>

            <div className="login-panel__social-group">
              <SocialSignInButton provider="google" label="Continue with Google Workspace" />
              <SocialSignInButton provider="microsoft" label="Continue with Microsoft 365" />
            </div>

            <div className="login-panel__section-divider">
              <span>or sign in with email</span>
            </div>

            <form className="login-panel__form" onSubmit={handleSubmit}>
              <div className="login-panel__field-group">
                <label className="login-panel__field-label" htmlFor="work-email">
                  WORK EMAIL
                </label>
                <div className="login-panel__input-row">
                  <div className="login-panel__input-icon">
                    <EmailIcon />
                  </div>
                  <input
                    id="work-email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="login-panel__input"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="login-panel__field-group">
                <label className="login-panel__field-label" htmlFor="password">
                  PASSWORD
                </label>
                <div className="login-panel__input-row">
                  <div className="login-panel__input-icon">
                    <LockIcon />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="login-panel__input"
                    autoComplete="current-password"
                  />
                  <button className="login-panel__visibility-button" type="button" aria-label="Show password">
                    <EyeIcon />
                  </button>
                </div>
              </div>

              <div className="login-panel__actions-row">
                <label className="login-panel__checkbox-label">
                  <input className="login-panel__checkbox-input" type="checkbox" />
                  <span>Remember this device</span>
                </label>
                <button className="login-panel__text-button" type="button">
                  Forgot password?
                </button>
              </div>

              <button className="login-panel__submit-button" type="submit">
                Sign in securely
              </button>
            </form>

            <p className="login-panel__footnote">
              New to Dataction?{' '}
              <button type="button" className="login-panel__link-button">
                Request access
              </button>{' '}
              · Your IT admin provisions accounts.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
