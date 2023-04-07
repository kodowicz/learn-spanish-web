import { lazy } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Background } from '@/components/Background';
import { Layout } from '@/components/Layout';
import { ensurePublicSets } from '@/queries/usePublicSets';
import { Menu } from '@/components/Menu';

const Home = lazy(() =>
  import('./pages/Home').then((module) => ({ default: module.Home }))
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Background>
          <Menu />
          <div className="mt-[54px] h-full overflow-scroll md:mt-[80px]">
            <Layout>
              <Outlet />
            </Layout>
          </div>
        </Background>
      </div>
    ),
    children: [
      {
        path: '/',
        element: <Home />,
        loader: ensurePublicSets,
      },
      {
        path: '/search',
        element: <Home />,
      },
      {
        path: '/create',
        element: <Home />,
      },
      {
        path: '/profile',
        element: <Home />,
      },
    ],
  },
]);
