import { lazy } from 'react';

import {
  Outlet,
  createReactRouter,
  createRouteConfig,
} from '@tanstack/react-router';

import { Background } from '@/components/Background';
import { Layout } from './components/Layout';

const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));

const rootRoute = createRouteConfig({
  component: () => (
    <>
      <Background>
        <Layout>
          <Outlet />
        </Layout>
      </Background>
    </>
  )
});

const indexRoute = rootRoute.createRoute({
  path: '/',
  component: Home,
});

const routeConfig = rootRoute.addChildren([indexRoute]);

export const router = createReactRouter({ routeConfig });