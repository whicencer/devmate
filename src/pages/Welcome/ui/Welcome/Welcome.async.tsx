import { lazy } from "react";

export const WelcomePageAsync = lazy(async () => await import("./Welcome.tsx"));
