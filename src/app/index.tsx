import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import { withProviders } from "./providers";
import "./styles/index.scss";
import {LanguageSwitcher} from "../widgets/LanguageSwitcher/LanguageSwitcher.tsx";

const App = () => {
  return (
      <>
        <RouterProvider router={router()} />
        <LanguageSwitcher />
      </>
  );
}

export default withProviders(App);