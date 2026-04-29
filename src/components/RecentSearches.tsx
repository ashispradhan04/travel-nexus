// filepath: src/components/RecentSearches.tsx
import './RecentSearches.css';

interface RecentSearch {
  id: string;
  from: string;
  to: string;
  fromCode: string;
  toCode: string;
  date: string;
  travelers: string;
  class: string;
  price: string;
  badge: 'policy' | 'approval' | null;
}

const recentSearches: RecentSearch[] = [
  {
    id: '1',
    from: 'Mumbai',
    to: 'Dubai',
    fromCode: 'BOM',
    toCode: 'DXB',
    date: 'Mon 24 Mar',
    travelers: '1 adult',
    class: 'Economy',
    price: 'from ₹28.2K',
    badge: 'policy',
  },
  {
    id: '2',
    from: 'New York',
    to: 'London',
    fromCode: 'JFK',
    toCode: 'LHR',
    date: 'Tue 25 Mar',
    travelers: '2 adults',
    class: 'Business',
    price: 'from ₹50.1K',
    badge: 'approval',
  },
  {
    id: '3',
    from: 'Tokyo',
    to: 'Seoul',
    fromCode: 'NRT',
    toCode: 'ICN',
    date: 'Wed 26 Mar',
    travelers: '1 adult',
    class: 'First Class',
    price: 'from ₹75.3K',
    badge: 'policy',
  },
];

export function RecentSearches() {
  return (
    <div className="recent-searches">
      <div className="recent-searches__header">
        <h3 className="recent-searches__title">RECENT SEARCHES</h3>
        <button className="recent-searches__clear">Clear all</button>
      </div>
      
      <div className="recent-searches__list">
        {recentSearches.map((search) => (
          <div key={search.id} className="recent-searches__item">
            <div className="recent-searches__airline">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 7.45 20.55 7 20 7H4C3.45 7 3 7.45 3 8V16C3 16.55 3.45 17 4 17H20C20.55 17 21 16.55 21 16ZM12 4.5C14.34 4.5 16.5 6.66 16.5 9C16.5 11.34 14.34 13.5 12 13.5C9.66 13.5 7.5 11.34 7.5 9C7.5 6.66 9.66 4.5 12 4.5ZM12 15.5C14.21 15.5 16 14.21 16 12.5V11.5H8V12.5C8 14.21 9.79 15.5 12 15.5Z" fill="currentColor"/>
              </svg>
            </div>
            
            <div className="recent-searches__info">
              <div className="recent-searches__route">
                <span className="recent-searches__city">{search.from}</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.99 11L3 15L6.99 19V16H14V14H6.99V11ZM21 9L17.01 5V8H10V10H17.01V13L21 9Z" fill="currentColor"/>
                </svg>
                <span className="recent-searches__city">{search.to}</span>
                {search.badge === 'policy' && (
                  <span className="recent-searches__badge recent-searches__badge--policy">
                    Policy
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="currentColor"/>
                    </svg>
                  </span>
                )}
                {search.badge === 'approval' && (
                  <span className="recent-searches__badge recent-searches__badge--approval">
                    Approval needed
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                    </svg>
                  </span>
                )}
              </div>
              <span className="recent-searches__details">
                {search.date} • {search.travelers} • {search.class} • {search.fromCode} → {search.toCode}
              </span>
            </div>
            
            <div className="recent-searches__price">
              <span>{search.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;