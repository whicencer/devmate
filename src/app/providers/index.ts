import compose from "../../utils/compose";
import AuthProvider from "./AuthProvider";
import { RecoilProvider } from "./RecoilProvider";
import { SuspenseProvider } from "./SuspenseProvider";
import { ThemeProvider } from "./ThemeProvider";

export const withProviders = compose(RecoilProvider, SuspenseProvider, ThemeProvider, AuthProvider);