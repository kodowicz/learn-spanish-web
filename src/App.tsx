import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactLocation, Router, Outlet } from '@tanstack/react-location';

import './index.css';

const queryClient = new QueryClient();

const location = new ReactLocation();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={[{ path: '/', element: 'Home!' }]}>
        <Outlet />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
