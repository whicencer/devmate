import compose from "../../helpers/compose/compose.ts";
import { RecoilProvider } from "./RecoilProvider";
import { SuspenseProvider } from "./SuspenseProvider";
import {ThemeProvider} from "./ThemeProvider/ui/ThemeProvider.tsx";
import ToastifyProvider from "./ToastifyProvider";

export const withProviders = compose(RecoilProvider, SuspenseProvider, ThemeProvider, ToastifyProvider);