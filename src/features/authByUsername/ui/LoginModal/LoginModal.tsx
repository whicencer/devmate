import {useTranslation} from "react-i18next";
import {Modal} from "../../../../shared/ui/Modals";
import {Suspense} from "react";
import {LoginFormAsync} from "../LoginForm/LoginForm.async.tsx";

interface LoginModalProps {
  swapModals: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = ({ swapModals, onClose, isOpen }: LoginModalProps) => {
  const {t} = useTranslation();

  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2>{t("Sign in")}</h2>
        <p>{t("Login to your account")}</p>
        <Suspense fallback={<div>Loading...</div>}>
          <LoginFormAsync />
        </Suspense>

        {/* If user do not have an account yet - on Sign up link click current modal window is going to close */}
        <p style={{fontSize: 14, marginTop: 10}}>{t("Don't have an account?")} <a onClick={swapModals}>{t("Sign up")}</a></p>
      </Modal>
  );
};