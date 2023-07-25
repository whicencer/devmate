import { motion } from "framer-motion";
import styles from "./styles.module.scss";
import { textAnimation } from "./animations";
import { RegisterModal } from "./components/RegisterModal";
import { LoginModal } from "./components/LoginModal";
import { ModalProvider } from "./context/ModalContext";
import { HeaderStart } from "./components/HeaderStart";

export const Welcome = () => {
  return (
    <ModalProvider>
      <>
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

        {/* Modals */}
        <RegisterModal />
        <LoginModal />
      </>
    </ModalProvider>
  );
};