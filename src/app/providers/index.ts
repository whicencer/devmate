import compose from "../../helpers/compose/compose.ts";
import { SuspenseProvider } from "./SuspenseProvider";
import {ThemeProvider} from "./ThemeProvider/ui/ThemeProvider.tsx";
import ToastifyProvider from "./ToastifyProvider";
import {StoreProvider} from "./store/ui/StoreProvider.tsx";

export const withProviders = compose(StoreProvider, SuspenseProvider, ThemeProvider, ToastifyProvider);