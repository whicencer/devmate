import {AppRouter} from "./providers/router";
import { withProviders } from "./providers";
import "./styles/index.scss";
import {LanguageSwitcher} from "../widgets/LanguageSwitcher/LanguageSwitcher.tsx";
import {Suspense, useEffect} from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../entities/User/model/slice/userSlice.ts";
import Sidebar from "../widgets/Sidebar";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initState());
  }, [dispatch]);

  return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar />
          <div style={{ marginLeft: "22%" }}>
            <AppRouter />
          </div>
          <LanguageSwitcher />
        </Suspense>
      </>
  );
}

export default withProviders(App);