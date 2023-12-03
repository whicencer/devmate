import {LoginForm} from "../../../../widgets/LoginForm";
import {useTranslation} from "react-i18next";

interface LoginModalProps {
  swapModals: () => void;
}

export const LoginModal = ({ swapModals }: LoginModalProps) => {
  const {t} = useTranslation();

  return (
      <>
        <h2>{t("Sign in")}</h2>
        <p>{t("Login to your account")}</p>
        <LoginForm />

        {/* If user do not have an account yet - on Sign up link click current modal window is going to close */}
        <p style={{fontSize: 14, marginTop: 10}}>{t("Don't have an account?")} <a onClick={swapModals}>{t("Sign up")}</a></p>
      </>
  );
};