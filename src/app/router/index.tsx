import { Welcome } from '../../pages/Welcome';
import Feed from '../../pages/Feed';
import ErrorPage from '../../pages/ErrorPage';
import { Navigate, createBrowserRouter } from 'react-router-dom';

export const router = (isLogged: boolean) => {
  console.log(isLogged);

  return createBrowserRouter([
    {
      path: '/',
      element: !isLogged ? <Welcome /> : <Navigate to='/feed' />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/feed',
      element: isLogged ? <Feed /> : <Navigate to='/' />,
      errorElement: <ErrorPage />,
    }
  ]);
};