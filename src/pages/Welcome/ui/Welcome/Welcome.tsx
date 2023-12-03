import { motion } from "framer-motion";
import styles from "./Welcome.module.scss";
import { textAnimation } from "../../animations.ts";
import { HeaderStart } from "../HeaderStart/HeaderStart";

export const Welcome = () => {
  return (
    <div className={styles.home}>
      <HeaderStart />
      <motion.div
          initial='hidden'
          whileInView='visible'
          className={styles.homeContent}
      >
        <motion.h1 variants={textAnimation}>Join&nbsp;
          <span className={styles.coloredTitle1}>DevMate</span>&nbsp;
          and <span className={styles.coloredTitle2}>grow together</span>
        </motion.h1>
        <motion.p custom={.5} variants={textAnimation}>DevMate is a platform where you can learn and practice programming languages,
          get help and share experience</motion.p>
      </motion.div>
    </div>
  );
};