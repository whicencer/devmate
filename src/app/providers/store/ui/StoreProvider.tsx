import { FC } from "react";
import {Provider} from "react-redux";
import {store} from "../config/storeConfig";

export const StoreProvider = (Component: FC) => () => {
  return (
      <Provider store={store}>
        <Component />
      </Provider>
  );
};