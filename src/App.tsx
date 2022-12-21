import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ReactLocation,
  Router,
  Outlet
} from '@tanstack/react-location';
import { motion } from 'framer-motion';

import './index.css';

const queryClient = new QueryClient();

const location = new ReactLocation();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router location={location} routes={[{path: '/', element: 'Home!'}]}>
        <motion.div
          className="m-40 h-32 w-32 bg-purple-500"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ['0%', '0%', '50%', '50%', '0%']
          }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        />
        <Outlet />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
