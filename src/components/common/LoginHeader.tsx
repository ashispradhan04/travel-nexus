import '../../styles/components/LoginHeader.css';

export function LoginHeader() {
  return (
    <header className="login-header">
      <div className="login-header__brand">
        <span className="login-header__brand-mark" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="var(--evergreen)" />
            <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="var(--vitality)" />
            <path d="M12 16L16 12L20 16L16 20L12 16Z" fill="var(--evergreen)" />
          </svg>
        </span>
        <span className="login-header__brand-name">Dataction</span>
      </div>

      <nav className="login-header__actions">
        <button className="login-header__link" type="button">
          Privacy policy
        </button>
        <button className="login-header__link" type="button">
          Terms of use
        </button>
        <button className="login-header__support" type="button">
          <span className="login-header__support-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          Contact support
        </button>
      </nav>
    </header>
  );
}

export default LoginHeader;
