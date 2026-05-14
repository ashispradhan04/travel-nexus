import { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Header } from '../components/common/Header';
import { SearchResults } from '../components/features/SearchResults';

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const query = useMemo(() => {
    return {
      from: searchParams.get('from') ?? 'BOM',
      to: searchParams.get('to') ?? 'DXB',
      date: searchParams.get('date') ?? 'Mon, 24 Mar 2026',
      passengers: Number(searchParams.get('passengers') ?? '2'),
      travelClass: searchParams.get('travelClass') ?? 'Economy'
    };
  }, [searchParams]);

  return (
    <div className="app">
      <Header activeTab="flights" />
      <main className="app__main">
        <div className="app__container">
          <SearchResults
            searchParams={query}
            onNewSearch={() => navigate('/')}
          />
        </div>
      </main>
    </div>
  );
}
