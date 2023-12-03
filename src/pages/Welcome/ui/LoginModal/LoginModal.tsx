import {LoginForm} from "../../../../widgets/LoginForm";

interface LoginModalProps {
  swapModals: () => void;
}

export const LoginModal = ({ swapModals }: LoginModalProps) => {
  return (
      <>
        <h2>Sign in</h2>
        <p>Login to your account</p>
        <LoginForm />

        {/* If user do not have an account yet - on Sign up link click current modal window is going to close */}
        <p style={{fontSize: 14, marginTop: 10}}>Don&apos;t have an account? <a onClick={swapModals}>Sign up</a></p>
      </>
  );
};