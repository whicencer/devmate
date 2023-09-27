import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastifyProvider = (Component: React.FC) => () => {
  return (
    <>
      <Component />
      <ToastContainer position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default ToastifyProvider;