import {AppRouter} from "./providers/router";
import { withProviders } from "./providers";
import "./styles/index.scss";
import {LanguageSwitcher} from "../widgets/LanguageSwitcher/LanguageSwitcher.tsx";
import {Suspense, useEffect} from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../entities/User/model/slice/userSlice.ts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initState());
  }, [dispatch]);

  return (
      <>
        <Suspense fallback={<div>Loading...</div>}>
          <AppRouter />
          <LanguageSwitcher />
        </Suspense>
      </>
  );
}

export default withProviders(App);