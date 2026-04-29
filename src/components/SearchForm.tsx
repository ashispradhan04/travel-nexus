// filepath: src/components/SearchForm.tsx
import './SearchForm.css';

interface SearchFormProps {
  className?: string;
}

export function SearchForm({ className }: SearchFormProps) {
  return (
    <div className={`search-form ${className || ''}`}>
      {/* Trip Type & Travelers Row */}
      <div className="search-form__filters">
        <div className="search-form__trip-type">
          <button className="search-form__trip-btn search-form__trip-btn--active">One-way</button>
          <button className="search-form__trip-btn">Round-trip</button>
          <button className="search-form__trip-btn">Multi-city</button>
        </div>
        
        <div className="search-form__travelers">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
          </svg>
          <span>1 adult • Economy</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor"/>
          </svg>
        </div>
        
        <div className="search-form__policy">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill="currentColor"/>
          </svg>
          <span>Corporate policy on</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      {/* Search Fields Row */}
      <div className="search-form__fields">
        <div className="search-form__field search-form__field--from">
          <span className="search-form__field-label">FROM</span>
          <span className="search-form__field-value">Mumbai</span>
          <span className="search-form__field-sub">BOM • Chhatrapati Shivaji Intl</span>
        </div>
        
        <button className="search-form__swap-btn" aria-label="Swap locations">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.99 11L3 15L6.99 19V16H14V14H6.99V11ZM21 9L17.01 5V8H10V10H17.01V13L21 9Z" fill="currentColor"/>
          </svg>
        </button>
        
        <div className="search-form__field search-form__field--to">
          <span className="search-form__field-label">TO</span>
          <span className="search-form__field-value">Dubai</span>
          <span className="search-form__field-sub">DXB • Dubai International</span>
        </div>
        
        <div className="search-form__field search-form__field--depart">
          <span className="search-form__field-label">DEPART</span>
          <span className="search-form__field-value">Mon, 24 Mar 2026</span>
          <span className="search-form__field-sub">Monday • 3 days away</span>
        </div>
        
        <div className="search-form__field search-form__field--return">
          <span className="search-form__field-label search-form__field-label--muted">RETURN</span>
          <span className="search-form__field-value search-form__field-value--muted">Add return date</span>
          <span className="search-form__field-sub search-form__field-sub--muted">Switch to round-trip</span>
        </div>
      </div>
      
      {/* Policy & Search Row */}
      <div className="search-form__actions">
        <div className="search-form__policy-info">
          <span>Policy cap:</span>
          <span className="search-form__policy-class">Economy · ₹55,000</span>
          <span className="search-form__policy-badge">
            Label
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
            </svg>
          </span>
        </div>
        
        <button className="search-form__search-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="currentColor"/>
          </svg>
          Search Flights
        </button>
      </div>
    </div>
  );
}

export default SearchForm;