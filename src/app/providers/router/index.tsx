import { Welcome } from '../../../pages/Welcome';
import {Feed} from '../../../pages/Feed';
import {ErrorPage} from '../../../pages/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = () => {
  return createBrowserRouter([
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
};