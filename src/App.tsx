import { lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactLocation, Router, Outlet } from '@tanstack/react-location';

import './index.css';
import { Background } from '@/components/Background';
import { Layout } from './components/Layout';

const queryClient = new QueryClient();

const location = new ReactLocation();

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Background>
        <Layout>
          <Router location={location} routes={[{ path: '/', element: <Home /> }]}>
            <Outlet />
          </Router>
        </Layout>
      </Background>
    </QueryClientProvider>
  );
}

export default App;
