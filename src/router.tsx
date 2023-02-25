import { lazy } from 'react';

import { Outlet, RootRoute, Route, Router } from '@tanstack/react-router';

import { Background } from '@/components/Background';
import { Layout } from '@/components/Layout';
import { ensurePublicSets } from '@/queries/usePublicSets';
import { Menu } from '@/components/Menu';

const Home = lazy(() =>
  import('./pages/Home').then((module) => ({ default: module.Home }))
);

const rootRoute = new RootRoute({
  component: () => (
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
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
  loader: ensurePublicSets,
  id: 'Home',
});

const searchRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/search',
  component: Home,
  id: 'Search',
});

const createRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/create',
  component: Home,
  id: 'Create',
});

const profileRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: Home,
  id: 'Profile',
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  searchRoute,
  createRoute,
  profileRoute,
]);

export const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface RegisterRouter {
    router: typeof router;
  }
}
