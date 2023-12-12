import {useState} from "react";
import styles from "./HeaderStart.module.scss";
import { Button } from "../../../../shared/ui/Button";
import ChangeTheme from "../../../../widgets/ChangeTheme";
import {useTranslation} from "react-i18next";
import {SignupModal} from "../../../../features/signUp";
import {LoginModal} from "../../../../features/authByUsername";

export const HeaderStart = () => {
  const {t} = useTranslation("welcome");

  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const swapModals = () => {
    setRegisterModal(!registerModal);
    setLoginModal(!loginModal);
  };

  return (
      <div className={styles.header}>
        <h2>DevMate</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button style={{ marginRight: 25 }} onClick={() => setRegisterModal(true)}>{t("Get started")}</Button>
          <ChangeTheme />
        </div>
        <SignupModal swapModals={swapModals} isOpen={registerModal} onClose={() => setRegisterModal(false)} />
        <LoginModal swapModals={swapModals} isOpen={loginModal} onClose={() => setLoginModal(false)} />
      </div>
  );
};