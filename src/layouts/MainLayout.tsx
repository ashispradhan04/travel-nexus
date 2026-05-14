import { Outlet } from 'react-router-dom';
import { Header } from '../components/common/Header';

export function MainLayout() {
  return (
    <div className="app">
      <Header activeTab="flights" />
      <main className="app__main">
        <div className="app__container">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default MainLayout;
