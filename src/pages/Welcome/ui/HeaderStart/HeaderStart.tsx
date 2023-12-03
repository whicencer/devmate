import {useState} from "react";
import styles from "./HeaderStart.module.scss";
import { Button } from "../../../../shared/ui/Button";
import ChangeTheme from "../../../../widgets/ChangeTheme";
import {Modal} from "../../../../shared/ui/Modals";
import {LoginModal} from "../LoginModal/LoginModal";
import {RegisterModal} from "../RegisterModal/RegisterModal.tsx";
import {useTranslation} from "react-i18next";

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
        <Modal isOpen={registerModal} onClose={() => setRegisterModal(false)}>
          <RegisterModal swapModals={swapModals} />
        </Modal>
        <Modal isOpen={loginModal} onClose={() => setLoginModal(false)}>
          <LoginModal swapModals={swapModals} />
        </Modal>
      </div>
  );
};