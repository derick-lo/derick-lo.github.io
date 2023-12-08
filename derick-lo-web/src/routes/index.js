import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { Login } from '../pages/login/login';
import { ErrorPage } from '../pages/error-page/error-page';

export const router = createBrowserRouter([
  {
    path: '/',
    ErrorBoundary: ErrorPage,
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
]);
