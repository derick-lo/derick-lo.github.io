import { createBrowserRouter, redirect } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { Login } from '../pages/login/login';
import { ErrorPage } from '../pages/error-page/error-page';
import { isMobile } from '../utils/platfrom';

export const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary: ErrorPage,
    loader: () => {
      if (isMobile()) {
        throw redirect('/mobile');
      }
    },
    children: [
      {
        index: true,
        Component: Layout,
      },
      {
        path: '/login',
        Component: Login,
      },
    ],
  },
  {
    path: '/mobile',
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
      },
    ],
  },
]);
