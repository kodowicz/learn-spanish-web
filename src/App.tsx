import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RouterProvider,
} from '@tanstack/react-router';

import './index.css';
import { router } from './router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
