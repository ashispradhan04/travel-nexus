# Travel Nexus - Enterprise Project Structure

## Overview
This document outlines the enterprise-level folder structure implemented for the Travel Nexus project. The structure follows React/TypeScript best practices for scalable, maintainable applications.

## Folder Structure

```
travel-nexus/
├── public/                    # Static public assets
├── src/
│   ├── assets/               # Static assets (images, fonts, icons)
│   ├── components/           # Reusable UI components
│   │   ├── common/          # Shared/reusable components
│   │   ├── features/        # Feature-specific components
│   │   └── index.ts         # Barrel exports
│   ├── constants/           # Application constants
│   ├── hooks/               # Custom React hooks
│   ├── layouts/             # Layout components
│   ├── pages/               # Page/route components
│   ├── router/              # Routing configuration
│   │   └── guards/         # Route guards (auth protection)
│   ├── styles/              # All CSS files
│   │   ├── globals/        # Global styles, variables, resets
│   │   └── components/     # Component-specific styles
│   ├── types/               # TypeScript interfaces/types
│   ├── utils/               # Utility functions
│   ├── index.ts             # Main barrel export
│   ├── App.tsx              # Root component
│   └── main.tsx             # Application entry point
├── index.html                # HTML entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Folder Responsibilities

### `/src/assets/`
**Purpose:** Store static assets that are imported directly into the application.
- Images (logos, icons, backgrounds)
- Font files
- JSON data files
- Any other static resources

---

### `/src/components/`
**Purpose:** Contains all reusable UI components, organized by reusability level.

#### `/src/components/common/`
**Purpose:** Highly reusable components used across multiple features/pages.
- **Header.tsx** - Main navigation header with tabs
- **LoginHeader.tsx** - Simplified header for login page
- Components here should be generic and not tied to specific business logic

#### `/src/components/features/`
**Purpose:** Components specific to particular features or business logic.
- **SearchForm.tsx** - Flight search form
- **RecentSearches.tsx** - Recent flight searches list
- **FrequentRoutes.tsx** - Frequent routes display
- These components may contain business-specific logic

#### `/src/components/index.ts`
**Purpose:** Barrel file for clean imports.
```typescript
export * from './common';
export * from './features';
```

---

### `/src/constants/`
**Purpose:** Application-wide constants and configuration values.
- **index.ts** - Route paths, feature lists, stats, app metadata
- Prevents magic strings/numbers in code
- Single source of truth for constant values

```typescript
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
} as const;

export const FEATURES = [...];
export const STATS = [...];
```

---

### `/src/hooks/`
**Purpose:** Custom React hooks for reusable stateful logic.
- **useAuth.ts** - Authentication state management
- Encapsulates complex logic away from components
- Makes components more readable and testable

```typescript
export function useAuth() {
  // Authentication logic
  return { isAuthenticated, user, login, logout };
}
```

---

### `/src/layouts/`
**Purpose:** Layout components that wrap pages with consistent structure.
- **MainLayout.tsx** - Main app layout with header and outlet
- Separates layout concerns from page content
- Makes it easy to add different layouts (auth layout, admin layout, etc.)

---

### `/src/pages/`
**Purpose:** Route-level components that represent full pages.
- **HomePage.tsx** - Main dashboard page
- **LoginPage.tsx** - Login/sign-in page
- Each page composes components from `/components/`
- Pages handle route-specific logic and data fetching

---

### `/src/router/`
**Purpose:** Centralized routing configuration.

#### `/src/router/index.tsx`
**Purpose:** Main router configuration with auth-based routing.
```typescript
export function AppRouter() {
  // Returns BrowserRouter with all routes
}
```

#### `/src/router/guards/`
**Purpose:** Route guard components for protecting routes.
- **AuthGuard.tsx** - Protects routes based on authentication state
- Can be extended with role-based guards, permission guards, etc.

---

### `/src/styles/`
**Purpose:** All CSS files organized by scope.

#### `/src/styles/globals/`
**Purpose:** Global styles applied across the entire application.
- **index.css** - CSS variables (design tokens), resets, base typography
- **App.css** - Styles for App component, greeting section, tab switcher

#### `/src/styles/components/`
**Purpose:** Component-specific CSS files.
- Header.css, LoginHeader.css, SearchForm.css, etc.
- Each component has its own CSS file for better maintainability
- Follows BEM-like naming convention

---

### `/src/types/`
**Purpose:** TypeScript interfaces and type definitions.
- **index.ts** - All shared interfaces and types
- Centralizes type definitions for better maintainability
- Makes it easy to find and update types

```typescript
export interface Route { ... }
export type FeatureType = 'flight' | 'shield' | 'route';
export interface AuthState { ... }
```

---

### `/src/utils/`
**Purpose:** Pure utility functions with no side effects.
- **formatters.ts** - Date/price formatting functions
- Helpers for common operations
- Easily testable and reusable

```typescript
export function formatPrice(price: number): string { ... }
export function formatDate(date: Date): string { ... }
```

---

### `/src/index.ts`
**Purpose:** Main barrel export file for the entire `src/` directory.
```typescript
export * from './types';
export * from './constants';
export * from './utils/formatters';
export * from './components';
```

---

## Key Changes Made

### Before (Flat Structure)
```
src/
├── components/
│   ├── Header.tsx
│   ├── Header.css
│   ├── LoginHeader.tsx
│   └── ... (all components mixed)
├── pages/
│   ├── HomePage.tsx
│   └── LoginPage.tsx
├── App.css
├── index.css
└── (no organization)
```

### After (Enterprise Structure)
```
src/
├── components/
│   ├── common/          # Reusable components
│   ├── features/        # Feature-specific components
│   └── index.ts         # Clean exports
├── styles/
│   ├── globals/         # Global styles
│   └── components/      # Component styles
├── hooks/               # Custom hooks
├── types/               # TypeScript types
├── constants/           # App constants
├── utils/               # Utility functions
├── router/              # Routing logic
└── layouts/             # Layout components
```

---

## Import Path Examples

### Before
```typescript
import { Header } from '../components/Header';
import './Header.css';
```

### After
```typescript
import { Header } from '../components/common/Header';
import '../../styles/components/Header.css';

// Or using barrel exports
import { Header } from '../components';
```

---

## Benefits of This Structure

1. **Scalability** - Easy to add new features without cluttering
2. **Maintainability** - Clear separation of concerns
3. **Testability** - Isolated modules are easier to test
4. **Reusability** - Common components clearly identified
5. **Developer Experience** - Predictable file locations
6. **Enterprise-Ready** - Follows industry best practices
7. **Type Safety** - Centralized TypeScript definitions
8. **Consistent Styling** - Organized CSS with design tokens

---

## Build Verification

✅ Project builds successfully with `npm run build`
- TypeScript compilation: Passed
- Vite bundling: Passed
- All imports resolved correctly

---

## Future Enhancements

When scaling the project, consider adding:
- `/src/services/` - API calls and external service integrations
- `/src/store/` or `/src/state/` - State management (Redux, Zustand, etc.)
- `/src/context/` - React context providers
- `/src/api/` - API route definitions and clients
- `/src/test/` - Test utilities and setup
- `/src/config/` - Environment-specific configurations
