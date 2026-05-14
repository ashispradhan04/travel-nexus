import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SearchResultsPage from '../pages/SearchResultsPage';

export function AppRouter() {
  const { isAuthenticated, login } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <LoginPage onLogin={login} />
            )
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/results"
          element={
            isAuthenticated ? <SearchResultsPage /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="*"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
