import {RegisterForm} from "../../../../widgets/RegisterForm";
import {useTranslation} from "react-i18next";

interface RegisterModalProps {
  swapModals: () => void;
}

export const RegisterModal = ({ swapModals }: RegisterModalProps) => {
  const {t} = useTranslation();

  return (
      <>
        <h2>{t("Get started")}</h2>
        <p>{t("Create your account now")}</p>
        <RegisterForm />

        {/* If user already have an account and click on Login link - current (this) modal window is going to close */}
        <p style={{fontSize: 14, marginTop: 10}}>{t("Have an account?")} <a onClick={swapModals}>{t("Sign in")}</a></p>
      </>
  );
}