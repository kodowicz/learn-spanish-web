import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactLocation, Router, Outlet } from '@tanstack/react-location';

import './index.css';
import { Background } from '@/components/Background';

const queryClient = new QueryClient();

const location = new ReactLocation();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Background>
        <Router location={location} routes={[{ path: '/', element: 'Home!' }]}>
          <Outlet />
        </Router>
      </Background>
    </QueryClientProvider>
  );
}

export default App;
