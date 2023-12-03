import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import httpBackend from "i18next-http-backend";
import {LOCAL_STORAGE_LANGUAGE_KEY} from "../../../widgets/LanguageSwitcher/LanguageSwitcher.tsx";

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.use(httpBackend)
.init({
  lng: localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY) as string,
  fallbackLng: "en",
  debug: import.meta.env.DEV,

  interpolation: {
    escapeValue: false // not needed for react as it escapes by default
  }
});

export default i18n;