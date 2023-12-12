import {useTranslation} from "react-i18next";
import {SignupForm} from "../SignupForm/SignupForm";
import {Modal} from "../../../../shared/ui/Modals";
import {Suspense} from "react";
import {SignupFormAsync} from "../SignupForm/SignupForm.async.tsx";

interface SignupModalProps {
  swapModals: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export const SignupModal = ({swapModals, isOpen, onClose}: SignupModalProps) => {
  const {t} = useTranslation();

  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2>{t("Get started")}</h2>
        <p>{t("Create your account now")}</p>
        <Suspense fallback={<div>Loading...</div>}>
          <SignupFormAsync/>
        </Suspense>

        {/* If user already have an account and click on Login link - current (this) modal window is going to close */}
        <p style={{fontSize: 14, marginTop: 10}}>{t("Have an account?")} <a onClick={swapModals}>{t("Sign in")}</a></p>
      </Modal>
  );
};