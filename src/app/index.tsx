import { RouterProvider } from "react-router-dom";
import { router } from "./providers/router";
import { withProviders } from "./providers";
import "./styles/index.scss";
import {LanguageSwitcher} from "../widgets/LanguageSwitcher/LanguageSwitcher.tsx";
import {Suspense} from "react";

const App = () => {
  return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router()} />
          <LanguageSwitcher />
        </Suspense>
      </>
  );
}

export default withProviders(App);