import { useState, useCallback } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: null | {
    name: string;
    email: string;
    organization: string;
  };
}

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });

  const login = useCallback(() => {
    setAuthState({
      isAuthenticated: true,
      user: {
        name: 'John',
        email: 'john@acmecorp.com',
        organization: 'Acme Corp',
      },
    });
  }, []);

  const logout = useCallback(() => {
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  }, []);

  return {
    isAuthenticated: authState.isAuthenticated,
    user: authState.user,
    login,
    logout,
  };
}
