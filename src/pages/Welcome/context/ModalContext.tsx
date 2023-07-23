import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = ({ children }: { children: React.ReactElement }) => {
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{
      registerModalOpen,
      setRegisterModalOpen,
      loginModalOpen,
      setLoginModalOpen
    }}>
      {children}
    </ModalContext.Provider>
  );
}