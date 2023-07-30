"use client";

import { createContext, useState, ReactNode, useCallback } from "react";

type IGlobalContextProps = {
  showLoginPopUp: boolean;
  showRegisterPopUp: boolean;
  handleToggleLoginPopUp: () => void;
  handleToggleRegisterPopUp: () => void;
};

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<IGlobalContextProps>({
  showLoginPopUp: false,
  showRegisterPopUp: false,
  handleToggleLoginPopUp: () => {},
  handleToggleRegisterPopUp: () => {},
});

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [showLoginPopUp, setShowLoginPopUp] = useState(false);
  const [showRegisterPopUp, setShowRegisterPopUp] = useState(false);

  const handleToggleLoginPopUp = useCallback(() => {
    setShowLoginPopUp((prev) => !prev);
  }, []);
  const handleToggleRegisterPopUp = useCallback(() => {
    setShowRegisterPopUp((prev) => !prev);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        showLoginPopUp,
        showRegisterPopUp,
        handleToggleLoginPopUp,
        handleToggleRegisterPopUp,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
