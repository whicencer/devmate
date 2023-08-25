import { createBrowserRouter } from 'react-router-dom';
import { Welcome } from '../../pages/Welcome';
import Feed from '../../pages/Feed';
import ErrorPage from '../../pages/ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/feed',
    element: <Feed />,
    errorElement: <ErrorPage />,
  }
]);