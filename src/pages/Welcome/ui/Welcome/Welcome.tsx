import { motion } from "framer-motion";
import styles from "./Welcome.module.scss";
import { textAnimation } from "../../animations.ts";
import { HeaderStart } from "../HeaderStart/HeaderStart";
import {useTranslation} from "react-i18next";

const Welcome = () => {
  const {t} = useTranslation("welcome");

  return (
    <div className={styles.home}>
      <HeaderStart />
      <motion.div
          initial='hidden'
          whileInView='visible'
          className={styles.homeContent}
      >
        <motion.h1 variants={textAnimation}>{t("Join")}&nbsp;
          <span className={styles.coloredTitle1}>DevMate</span>&nbsp;
          {t("and")} <span className={styles.coloredTitle2}>{t("grow together")}</span>
        </motion.h1>
        <motion.p custom={.5} variants={textAnimation}>{t("DevMate is a platform where you can learn and practice programming languages, get help and share experience")}</motion.p>
      </motion.div>
    </div>
  );
};

export default Welcome;