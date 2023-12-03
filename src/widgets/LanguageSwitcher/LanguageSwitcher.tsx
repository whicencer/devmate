import {classNames} from "../../helpers/classNames/classNames"
import styles from "./LanguageSwitcher.module.scss";
import {useTranslation} from "react-i18next";

interface LanguageSwitcherProps {
  className?: string
}

export const LOCAL_STORAGE_LANGUAGE_KEY = "lang";

export const LanguageSwitcher = ({className = ""}: LanguageSwitcherProps) => {
  const {t, i18n} = useTranslation();
  const translateHandler = () => {
    const lng = i18n.language === "ru" ? "en" : "ru";
    void i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
  };

  return (
      <h4 onClick={translateHandler} className={classNames(styles.LanguageSwitcher, [className])}>
        {t("LANGUAGE")}
      </h4>
  );
};
