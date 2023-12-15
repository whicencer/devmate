import {useTranslation} from "react-i18next";
import styles from "./NotFound.module.scss";
import {Link} from "react-router-dom";

export const NotFound = () => {
  const {t} = useTranslation("404");

  return (
    <div className={styles.NotFound}>
      <h2>404</h2>
      <p>{t("This page does not exist...")}</p>
      <Link to="/">{t("Go back to the main page")}</Link>
    </div>
  );
};