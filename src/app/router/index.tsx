import { createBrowserRouter } from "react-router-dom";
import { Welcome } from "../../pages/Welcome";
import Feed from "../../pages/Feed";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/feed',
    element: <Feed />
  }
]);