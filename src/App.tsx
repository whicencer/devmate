/* eslint-disable react-refresh/only-export-components */
import { useAuth } from "./app/hooks/useAuth";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router";
import { withProviders } from "./app/providers";

const App = () => {
  const { isAuth } = useAuth();
  
  return <RouterProvider router={router(isAuth)} />;
}

export default withProviders(App);