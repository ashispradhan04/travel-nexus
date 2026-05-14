export interface Route {
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

export type FeatureType = 'flight' | 'shield' | 'route';

export type SocialProvider = 'google' | 'microsoft';

export type TabType = 'flights' | 'hotels' | 'rail' | 'cars';

export type BadgeType = 'policy' | 'approval' | 'economy' | null;

export interface Feature {
  title: string;
  description: string;
  iconType: FeatureType;
}

export interface Stat {
  value: string;
  label: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: null | {
    name: string;
    email: string;
    organization: string;
  };
}

export interface HeaderProps {
  activeTab?: TabType;
}

export interface SearchFormProps {
  className?: string;
}

export interface LoginPageProps {
  onLogin: () => void;
}
