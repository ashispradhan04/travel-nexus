// filepath: src/components/Header.tsx
import './Header.css';

interface HeaderProps {
  activeTab?: 'flights' | 'hotels' | 'rail' | 'cars';
}

export function Header({ activeTab = 'flights' }: HeaderProps) {
  const tabs = [
    { id: 'flights', label: 'Flights' },
    { id: 'hotels', label: 'Hotels' },
    { id: 'rail', label: 'Rail' },
    { id: 'cars', label: 'Cars' },
  ] as const;

  return (
    <header className="header">
      <div className="header__logo-section">
        <div className="header__logo">
          <svg className="header__logo-mark" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#093227"/>
            <path d="M8 16L16 8L24 16L16 24L8 16Z" fill="#47CD89"/>
            <path d="M12 16L16 12L20 16L16 20L12 16Z" fill="#093227"/>
          </svg>
          <span className="header__brand-name">Travel Nexus</span>
        </div>
        
        <nav className="header__nav">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`header__nav-tab ${activeTab === tab.id ? 'header__nav-tab--active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="header__user-section">
        <span className="header__user-org">Acme Corp · Travel</span>
        
        <button className="header__notification-btn" aria-label="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.36 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.63 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16Z" fill="currentColor"/>
          </svg>
        </button>
        
        <div className="header__avatar">
          <span>A</span>
        </div>
      </div>
    </header>
  );
}

export default Header;