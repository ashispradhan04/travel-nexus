export const APP_NAME = 'Travel Nexus';
export const APP_BRAND = 'Dataction';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
} as const;

export const FEATURES = [
  {
    title: 'Aggregated fares across 200+ airlines',
    description: 'Amadeus, Sabre, GDS, LCC, and NDC in one search',
    iconType: 'flight' as const,
  },
  {
    title: 'Policy compliance built in',
    description: 'Auto-enforce travel budgets and approval workflows',
    iconType: 'shield' as const,
  },
  {
    title: 'Real-time approval routing',
    description: 'Out-of-policy requests auto-routed to managers',
    iconType: 'route' as const,
  },
] as const;

export const STATS = [
  { value: '200+', label: 'Airlines aggregated' },
  { value: '94%', label: 'Avg policy compliance' },
  { value: '₹62K', label: 'Avg saved vs retail' },
] as const;
