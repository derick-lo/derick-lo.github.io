import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { Login } from '../pages/login/login';
import { ErrorPage } from '../pages/error-page/error-page';
import { Mobile } from '../components/layout/mobile';
import { Home } from '../pages/home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary: ErrorPage,
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'login',
        Component: Login,
      },
    ],
  },
  {
    path: 'mobile',
    ErrorBoundary: ErrorPage,
    Component: Mobile,
    children: [
      {
        index: true,
      },
    ],
  },
]);
