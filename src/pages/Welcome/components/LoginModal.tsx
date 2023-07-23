import { LoginForm } from "../../../components/LoginForm";
import { Modal } from "../../../shared/ui/Modals";
import { useTypedModalContext } from "../hooks/useTypedModalContext";

export const LoginModal = () => {
  const { loginModalOpen, setLoginModalOpen, setRegisterModalOpen } = useTypedModalContext();

  const swapModals = () => {
    setLoginModalOpen(false);
    setRegisterModalOpen(true);
  }

  return (
    <Modal width='450px' setIsOpen={setLoginModalOpen} isOpen={loginModalOpen}>
      <h2>Sign in</h2>
      <p>Login to your account</p>
      <LoginForm />

      {/* If user do not have an account yet - on Sign up link click current modal window is going to close */}
      <p style={{fontSize: 14, marginTop: 10}}>Don&apos;t have an account? <a onClick={swapModals}>Sign up</a></p>
    </Modal>
  );
};