import { lazy } from 'react';

import {
  Outlet,
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router';

import { Background } from '@/components/Background';
import { Layout } from '@/components/Layout';
import { ensurePublicSets } from '@/queries/usePublicSets';
import { Menu } from '@/components/Menu';

const Home = lazy(() =>
  import('./pages/Home').then((module) => ({ default: module.Home }))
);

const rootRoute = createRouteConfig({
  component: () => (
    <div>
      <Background>
        <Menu />
        <div className="mt-[64px] h-full overflow-scroll">
          <Layout>
            <Outlet />
          </Layout>
        </div>
      </Background>
    </div>
  ),
});

const indexRoute = rootRoute.createRoute({
  path: '/',
  component: Home,
  loader: ensurePublicSets,
  id: 'Home',
});

const searchRoute = rootRoute.createRoute({
  path: '/search',
  component: Home,
  id: 'Search',
});

const createRoute = rootRoute.createRoute({
  path: '/create',
  component: Home,
  id: 'Create',
});

const profileRoute = rootRoute.createRoute({
  path: '/profile',
  component: Home,
  id: 'Profile',
});

const routeConfig = rootRoute.addChildren([
  indexRoute,
  searchRoute,
  createRoute,
  profileRoute,
]);

export const router = createReactRouter({ routeConfig });

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router;
  }
}
