// filepath: src/components/features/SearchResults.tsx
import { useState } from 'react';
import '../../styles/components/SearchResults.css';

interface FlightResult {
  id: string;
  airline: {
    code: string;
    name: string;
    flightNumber: string;
  };
  departure: {
    time: string;
    code: string;
    city: string;
  };
  arrival: {
    time: string;
    code: string;
    city: string;
  };
  duration: string;
  price: number;
  currency: string;
  fareClass: string;
  operatedBy: string;
  totalFor: string;
  savings: string;
  fareType: string;
  badges: string[];
  isBestValue?: boolean;
  isPolicyCompliant?: boolean;
}

interface SearchResultsProps {
  searchParams: {
    from: string;
    to: string;
    date: string;
    passengers: number;
    travelClass: string;
  };
  onNewSearch: () => void;
}

export function SearchResults({ searchParams, onNewSearch }: SearchResultsProps) {
  const [selectedFlight, setSelectedFlight] = useState<string | null>(null);

  // Mock flight data
  const flights: FlightResult[] = [
    {
      id: '1',
      airline: { code: '6E', name: 'IndiGo', flightNumber: '6E-1401' },
      departure: { time: '06:15', code: 'BOM', city: 'Mumbai' },
      arrival: { time: '08:45', code: 'DXB', city: 'Dubai' },
      duration: '3h 30m',
      price: 32450,
      currency: '$',
      fareClass: 'Economy • Saver',
      operatedBy: 'Operated by IndiGo',
      totalFor: '$64,900 total for 2',
      savings: 'Save $4,200 vs avg',
      fareType: 'Hold 24h free',
      badges: ['1× carry-on', 'No checked bag', 'Non-refundable', 'Date change $3,000', 'Web check-in'],
      isBestValue: true,
      isPolicyCompliant: true,
    },
    {
      id: '2',
      airline: { code: 'AI', name: 'Air India', flightNumber: 'AI-202' },
      departure: { time: '08:00', code: 'BOM', city: 'Mumbai' },
      arrival: { time: '10:30', code: 'DXB', city: 'Dubai' },
      duration: '3h 30m',
      price: 54500,
      currency: '$',
      fareClass: 'Business • Flex',
      operatedBy: 'Operated by Air India',
      totalFor: '$109,000 total for 2',
      savings: 'Save $5,500 vs avg',
      fareType: 'Hold 24h free',
      badges: ['1× carry-on', 'No checked bag', 'Non-refundable', 'Date change $3,000', 'Web check-in'],
      isPolicyCompliant: true,
    },
    {
      id: '3',
      airline: { code: 'SG', name: 'SpiceJet', flightNumber: 'SG-301' },
      departure: { time: '07:30', code: 'BOM', city: 'Mumbai' },
      arrival: { time: '10:00', code: 'DXB', city: 'Dubai' },
      duration: '3h 30m',
      price: 24000,
      currency: '$',
      fareClass: 'Economy • Basic',
      operatedBy: 'Operated by SpiceJet',
      totalFor: '$48,000 total for 2',
      savings: 'Save $3,000 vs avg',
      fareType: 'Hold 24h free',
      badges: ['1× carry-on', 'No checked bag', 'Non-refundable', 'Date change $3,000', 'Web check-in'],
      isPolicyCompliant: false,
    },
    {
      id: '4',
      airline: { code: 'VY', name: 'Vistara', flightNumber: 'VY-505' },
      departure: { time: '09:45', code: 'BOM', city: 'Mumbai' },
      arrival: { time: '12:15', code: 'DXB', city: 'Dubai' },
      duration: '3h 30m',
      price: 38000,
      currency: '$',
      fareClass: 'Economy • Family',
      operatedBy: 'Operated by Vistara',
      totalFor: '$76,000 total for 2',
      savings: 'Save $6,000 vs avg',
      fareType: 'Hold 24h free',
      badges: ['1× carry-on', 'No checked bag', 'Non-refundable', 'Date change $3,000', 'Web check-in'],
      isPolicyCompliant: false,
    }
  ];

  const handleSelectFlight = (flightId: string) => {
    setSelectedFlight(flightId);
  };

  return (
    <div className="search-results">
      <div className="search-results__container">

      {/* Search Criteria */}
      <div className="search-results__criteria">
        <div className="search-results__criteria-row">
          <div className="search-results__criteria-card">
            <span className="search-results__criteria-label">FROM</span>
            <span className="search-results__criteria-value">
              {searchParams.from === 'BOM' ? 'Mumbai' : searchParams.from === 'DXB' ? 'Dubai' : searchParams.from}
            </span>
            <span className="search-results__criteria-sub">
              {searchParams.from} • {searchParams.from === 'BOM' ? 'Chhatrapati Shivaji Intl' : searchParams.from === 'DXB' ? 'Dubai International' : 'Airport'}
            </span>
          </div>
          <div className="search-results__criteria-card">
            <span className="search-results__criteria-label">TO</span>
            <span className="search-results__criteria-value">
              {searchParams.to === 'BOM' ? 'Mumbai' : searchParams.to === 'DXB' ? 'Dubai' : searchParams.to}
            </span>
            <span className="search-results__criteria-sub">
              {searchParams.to} • {searchParams.to === 'BOM' ? 'Chhatrapati Shivaji Intl' : searchParams.to === 'DXB' ? 'Dubai International' : 'Airport'}
            </span>
          </div>
          <div className="search-results__criteria-card">
            <span className="search-results__criteria-label">DEPART</span>
            <span className="search-results__criteria-value">{searchParams.date}</span>
            <span className="search-results__criteria-sub">One-way • return date</span>
          </div>
          <div className="search-results__criteria-card">
            <span className="search-results__criteria-label">CABIN</span>
            <span className="search-results__criteria-value">{searchParams.passengers} Adults</span>
            <span className="search-results__criteria-sub">{searchParams.travelClass} • policy active</span>
          </div>
          <button className="search-results__search-btn" onClick={onNewSearch}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
            </svg>
            Search Flights
          </button>
        </div>

        <div className="search-results__status">
          <div className="search-results__status-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor"/>
            </svg>
            <span>Prices updated 2 min ago</span>
          </div>
          <div className="search-results__status-item">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V8C21 7.45 20.55 7 20 7H4C3.45 7 3 7.45 3 8V16C3 16.55 3.45 17 4 17H20C20.55 17 21 16.55 21 16ZM12 4.5C14.34 4.5 16.5 6.66 16.5 9C16.5 11.34 14.34 13.5 12 13.5C9.66 13.5 7.5 11.34 7.5 9C7.5 6.66 9.66 4.5 12 4.5ZM12 15.5C14.21 15.5 16 14.21 16 12.5V11.5H8V12.5C8 14.21 9.79 15.5 12 15.5Z" fill="currentColor"/>
            </svg>
            <span>24 results · 6 airlines</span>
          </div>
          <div className="search-results__status-item search-results__status-item--highlight">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
            </svg>
            <span>14 policy-compliant fares</span>
          </div>
        </div>
      </div>

      <div className="search-results__content">
        {/* Filters Sidebar */}
        <aside className="search-results__filters">
          <div className="search-results__filters-header">
            <span className="search-results__filters-title">Filters</span>
            <button className="search-results__filters-reset">Reset all</button>
          </div>

          <div className="search-results__filter-group">
            <h3 className="search-results__filter-title">Price per person</h3>
            <div className="search-results__price-range">
              <div className="search-results__price-input">
                <span className="search-results__price-value">$18,000</span>
                <span className="search-results__price-label">Min</span>
              </div>
              <div className="search-results__price-input">
                <span className="search-results__price-value">$40,000</span>
                <span className="search-results__price-label">Max</span>
              </div>
            </div>
            <div className="search-results__price-slider">
              <div className="search-results__price-track">
                <div className="search-results__price-fill"></div>
              </div>
            </div>
          </div>

          <div className="search-results__filter-group">
            <h3 className="search-results__filter-title">Stops</h3>
            <div className="search-results__filter-options">
              <label className="search-results__filter-option search-results__filter-option--selected">
                <input type="checkbox" checked readOnly />
                <span>Non-stop</span>
              </label>
              <label className="search-results__filter-option search-results__filter-option--selected">
                <input type="checkbox" checked readOnly />
                <span>1 stop</span>
              </label>
              <label className="search-results__filter-option">
                <input type="checkbox" readOnly />
                <span>2+ stops</span>
              </label>
            </div>
          </div>

          <div className="search-results__filter-group">
            <h3 className="search-results__filter-title">Cabin class</h3>
            <div className="search-results__filter-options">
              <label className="search-results__filter-option search-results__filter-option--selected">
                <input type="checkbox" checked readOnly />
                <span>Economy</span>
              </label>
              <label className="search-results__filter-option search-results__filter-option--selected">
                <input type="checkbox" checked readOnly />
                <span>Premium Economy</span>
              </label>
              <label className="search-results__filter-option">
                <input type="checkbox" readOnly />
                <span>Business</span>
              </label>
            </div>
          </div>

          <div className="search-results__filter-group">
            <h3 className="search-results__filter-title">Fare conditions</h3>
            <div className="search-results__filter-options">
              <label className="search-results__filter-option search-results__filter-option--selected">
                <input type="checkbox" checked readOnly />
                <span>Date change allowed</span>
              </label>
              <label className="search-results__filter-option">
                <input type="checkbox" readOnly />
                <span>Checked bag incl.</span>
              </label>
            </div>
          </div>
        </aside>

        {/* Results */}
        <main className="search-results__results">
          {flights.map((flight) => (
            <article key={flight.id} className={`search-results__flight-card ${flight.isBestValue ? 'search-results__flight-card--best-value' : ''}`}>
              {flight.isBestValue && (
                <div className="search-results__flight-card-highlight">
                  <span className="search-results__flight-card-highlight-tag">BEST VALUE</span>
                  <span className="search-results__flight-card-highlight-text">WITHIN CORPORATE TRAVEL POLICY · ECONOMY · MAX $55,000</span>
                  <span className="search-results__flight-card-highlight-note">Best balance of price, duration & fare conditions</span>
                </div>
              )}

              <div className="search-results__flight-card-body">
                <div className="search-results__flight-card-section search-results__flight-card-section--airline">
                  <div className="search-results__airline-code">{flight.airline.code}</div>
                  <div className="search-results__airline-info">
                    <span className="search-results__airline-name">{flight.airline.name}</span>
                    <span className="search-results__flight-number">{flight.airline.flightNumber}</span>
                    <span className="search-results__flight-class">{flight.fareClass}</span>
                    <span className="search-results__operated-by">{flight.operatedBy}</span>
                  </div>
                </div>

                <div className="search-results__flight-card-section search-results__flight-card-section--schedule">
                  <div className="search-results__flight-schedule-row">
                    <div className="search-results__flight-schedule-block">
                      <span className="search-results__time">{flight.departure.time}</span>
                      <span className="search-results__code">{flight.departure.code}</span>
                    </div>
                    <div className="search-results__flight-path">
                      <div className="search-results__path-line"></div>
                      <div className="search-results__plane-icon">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V21.5L11.5 20.5L15 21.5V20.5L13 19V13.5L21 16Z" fill="currentColor"/>
                        </svg>
                      </div>
                    </div>
                    <div className="search-results__flight-schedule-block">
                      <span className="search-results__time">{flight.arrival.time}</span>
                      <span className="search-results__code">{flight.arrival.code}</span>
                    </div>
                  </div>
                  <span className="search-results__flight-duration">{flight.duration}</span>
                </div>

                <div className="search-results__flight-card-section search-results__flight-card-section--price">
                  <div className="search-results__price">
                    <span className="search-results__price-amount">{flight.currency}{flight.price.toLocaleString()}</span>
                    <span className="search-results__price-per-person">per person</span>
                  </div>
                  <span className="search-results__price-total">{flight.totalFor}</span>
                  <span className="search-results__savings">{flight.savings}</span>
                </div>

                <div className="search-results__flight-card-section search-results__flight-card-section--actions">
                  <button
                    className={`search-results__select-btn ${selectedFlight === flight.id ? 'search-results__select-btn--selected' : ''}`}
                    onClick={() => handleSelectFlight(flight.id)}
                  >
                    {selectedFlight === flight.id ? 'Selected' : 'Select Fare'}
                  </button>
                  <button className="search-results__details-btn">View fare details</button>
                  <span className="search-results__fare-type">{flight.fareType}</span>
                </div>
              </div>
            </article>
          ))}
        </main>
      </div>
      </div>
    </div>
  );
}