import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import { withProviders } from "./providers";
import "./styles/index.scss";

const App = () => {
  
  return <RouterProvider router={router()} />;
}

export default withProviders(App);