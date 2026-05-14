// filepath: src/components/features/SearchLoading.tsx
import { useState, useEffect } from 'react';
import '../../styles/components/SearchLoading.css';

interface SearchLoadingProps {
  from: string;
  to: string;
  date: string;
  passengers: number;
  travelClass: string;
  onCancel: () => void;
}

export function SearchLoading({ from, to, date, passengers, travelClass, onCancel }: SearchLoadingProps) {
  const [faresFound, setFaresFound] = useState(0);

  // Simulate finding fares over time
  useEffect(() => {
    const interval = setInterval(() => {
      setFaresFound(prev => prev + Math.floor(Math.random() * 5) + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const sources = ['GDS', 'NDC', 'LCC', 'Amadeus', 'Sabre'];

  return (
    <div className="search-loading">
      <div className="search-loading__container">
        <div className="search-loading__card">
          <div className="search-loading__header">
            <div className="search-loading__title-section">
              <h1 className="search-loading__title">Searching {from} → {to}</h1>
              <p className="search-loading__subtitle">
                Checking 200+ airlines • {date} • {passengers} adult{passengers !== 1 ? 's' : ''} • {travelClass}
              </p>
            </div>
            <p className="search-loading__fares-count">
              {faresFound} fares found so far...
            </p>
          </div>

          <div className="search-loading__route">
            <span className="search-loading__airport">{from}</span>
            <div className="search-loading__progress">
              <div className="search-loading__progress-bar">
                <div className="search-loading__progress-fill" style={{ width: `${Math.min((faresFound / 100) * 100, 100)}%` }}></div>
              </div>
              <div className="search-loading__plane">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V21.5L11.5 20.5L15 21.5V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <span className="search-loading__airport">{to}</span>
          </div>

          <div className="search-loading__footer">
            <div className="search-loading__sources">
              <p className="search-loading__sources-label">SOURCES QUERIED</p>
              <div className="search-loading__badges">
                {sources.map(source => (
                  <span key={source} className="search-loading__badge">{source}</span>
                ))}
              </div>
            </div>
            <button className="search-loading__cancel-btn" onClick={onCancel}>
              Cancel search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}