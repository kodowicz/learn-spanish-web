import { createBrowserRouter, Outlet } from 'react-router-dom';
import { Background } from '@/components/Background';
import { Layout } from '@/components/Layout';
import { Menu } from '@/components/Menu';

const Home = async () => {
  const { Home } = await import('./pages/Home');

  return { Component: Home };
};

const ViewSet = async () => {
  const { ViewSet } = await import('./pages/ViewSet');

  return { Component: ViewSet };
};

const Authentication = async () => {
  const { Authentication } = await import('./pages/Authentication');

  return { Component: Authentication };
};

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
        lazy: Home,
      },
      {
        path: '/search',
        lazy: Home,
      },
      {
        path: '/create',
        lazy: Home,
      },
      {
        path: '/profile',
        lazy: Home,
      },
      {
        path: '/sign-in',
        lazy: Authentication,
      },
      {
        path: '/sets/:id',
        lazy: ViewSet,
      },
    ],
  },
]);
