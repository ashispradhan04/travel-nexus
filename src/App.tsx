// filepath: src/App.tsx
import { Header } from './components/Header';
import { SearchForm } from './components/SearchForm';
import { RecentSearches } from './components/RecentSearches';
import { FrequentRoutes } from './components/FrequentRoutes';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="app__main">
        <div className="app__container">
          {/* Greeting Section */}
          <div className="app__greeting">
            <p className="app__greeting-label">GOOD MORNING, JOHN</p>
            <div className="app__greeting-content">
              <h1 className="app__greeting-title">Where are you flying to today?</h1>
              <p className="app__greeting-subtitle">
                Corporate travel · Acme Corp policy applies · Approvals auto-routed to Sarah Chen
              </p>
            </div>
          </div>
          
          {/* Tab Switcher */}
          <div className="app__tabs">
            <button className="app__tab app__tab--active">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 7.45 20.55 7 20 7H4C3.45 7 3 7.45 3 8V16C3 16.55 3.45 17 4 17H20C20.55 17 21 16.55 21 16ZM12 4.5C14.34 4.5 16.5 6.66 16.5 9C16.5 11.34 14.34 13.5 12 13.5C9.66 13.5 7.5 11.34 7.5 9C7.5 6.66 9.66 4.5 12 4.5ZM12 15.5C14.21 15.5 16 14.21 16 12.5V11.5H8V12.5C8 14.21 9.79 15.5 12 15.5Z" fill="currentColor"/>
              </svg>
              Flight
            </button>
            <button className="app__tab">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13C8.66 13 10 11.66 10 10C10 8.34 8.66 7 7 7C5.34 7 4 8.34 4 10C4 11.66 5.34 13 7 13ZM19 7H11V14H3V5H1V20H3V17H21V20H23V11C23 8.79 21.21 7 19 7Z" fill="currentColor"/>
              </svg>
              Hotels
            </button>
            <button className="app__tab">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
              </svg>
              Rail
            </button>
            <button className="app__tab">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" fill="currentColor"/>
              </svg>
              Cars
            </button>
          </div>
          
          {/* Search Form */}
          <SearchForm />
          
          {/* Recent Searches */}
          <RecentSearches />
          
          {/* Frequent Routes */}
          <FrequentRoutes />
        </div>
      </main>
    </div>
  );
}

export default App;