// filepath: src/components/FrequentRoutes.tsx
import './FrequentRoutes.css';

interface Route {
  id: string;
  from: string;
  to: string;
  fromCode: string;
  toCode: string;
  date: string;
  travelers: string;
  class: string;
  price: string;
  badge: 'policy' | 'approval' | 'economy' | null;
}

const frequentRoutes: Route[] = [
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
  {
    id: '4',
    from: 'New York',
    to: 'London',
    fromCode: 'JFK',
    toCode: 'LHR',
    date: 'Fri 28 Mar',
    travelers: '2 adults',
    class: 'Economy Class',
    price: 'from ₹45.8K',
    badge: 'economy',
  },
];

export function FrequentRoutes() {
  return (
    <div className="frequent-routes">
      <div className="frequent-routes__header">
        <h3 className="frequent-routes__title">FREQUENT ROUTES • ACME CORP</h3>
      </div>
      
      <div className="frequent-routes__grid">
        <div className="frequent-routes__row">
          {frequentRoutes.slice(0, 2).map((route) => (
            <div key={route.id} className="frequent-routes__card">
              <div className="frequent-routes__info">
                <div className="frequent-routes__route">
                  <span className="frequent-routes__city">{route.from}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.99 11L3 15L6.99 19V16H14V14H6.99V11ZM21 9L17.01 5V8H10V10H17.01V13L21 9Z" fill="currentColor"/>
                  </svg>
                  <span className="frequent-routes__city">{route.to}</span>
                  {route.badge === 'policy' && (
                    <span className="frequent-routes__badge frequent-routes__badge--policy">
                      Policy
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="currentColor"/>
                      </svg>
                    </span>
                  )}
                  {route.badge === 'approval' && (
                    <span className="frequent-routes__badge frequent-routes__badge--approval">
                      Approval needed
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="currentColor"/>
                      </svg>
                    </span>
                  )}
                </div>
                <span className="frequent-routes__details">
                  {route.date} • {route.travelers} • {route.class} • {route.fromCode} → {route.toCode}
                </span>
                <div className="frequent-routes__price">
                  <span>{route.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="frequent-routes__row">
          {frequentRoutes.slice(2, 4).map((route) => (
            <div key={route.id} className="frequent-routes__card">
              <div className="frequent-routes__info">
                <div className="frequent-routes__route">
                  <span className="frequent-routes__city">{route.from}</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.99 11L3 15L6.99 19V16H14V14H6.99V11ZM21 9L17.01 5V8H10V10H17.01V13L21 9Z" fill="currentColor"/>
                  </svg>
                  <span className="frequent-routes__city">{route.to}</span>
                  {route.badge === 'policy' && (
                    <span className="frequent-routes__badge frequent-routes__badge--policy">
                      Policy
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="currentColor"/>
                      </svg>
                    </span>
                  )}
                  {route.badge === 'economy' && (
                    <span className="frequent-routes__badge frequent-routes__badge--policy">
                      Economy
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="currentColor"/>
                      </svg>
                    </span>
                  )}
                </div>
                <span className="frequent-routes__details">
                  {route.date} • {route.travelers} • {route.class} • {route.fromCode} → {route.toCode}
                </span>
                <div className="frequent-routes__price">
                  <span>{route.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FrequentRoutes;