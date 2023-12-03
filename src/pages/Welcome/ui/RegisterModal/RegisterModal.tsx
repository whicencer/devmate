import {RegisterForm} from "../../../../widgets/RegisterForm";

interface RegisterModalProps {
  swapModals: () => void;
}

export const RegisterModal = ({ swapModals }: RegisterModalProps) => {
  return (
      <>
        <h2>Get started</h2>
        <p>Create your account now</p>
        <RegisterForm />

        {/* If user already have an account and click on Login link - current (this) modal window is going to close */}
        <p style={{fontSize: 14, marginTop: 10}}>Have an account? <a onClick={swapModals}>Login</a></p>
      </>
  );
}