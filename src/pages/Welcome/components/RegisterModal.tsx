import { RegisterForm } from "../../../components/RegisterForm";
import { Modal } from "../../../shared/ui/Modals";
import { useTypedModalContext } from "../hooks/useTypedModalContext";

export const RegisterModal = () => {
  const { setLoginModalOpen, setRegisterModalOpen, registerModalOpen } = useTypedModalContext();

  const swapModals = () => {
    setRegisterModalOpen(false);
    setLoginModalOpen(true);
  }

  return (
    <Modal width='450px' setIsOpen={setRegisterModalOpen} isOpen={registerModalOpen}>
      <h2>Get started</h2>
      <p>Create your account now</p>
      <RegisterForm />
      
      {/* If user already have an account and click on Login link - current (this) modal window is going to close */}
      <p style={{fontSize: 14, marginTop: 10}}>Have an account? <a onClick={swapModals}>Login</a></p>
    </Modal>
  );
};