"use client";

import { createContext, useState, ReactNode, useCallback } from "react";

type IGlobalContextProps = {
  showLoginPopUp: boolean;
  showRegisterPopUp: boolean;
  handleToggleLoginPopUp: Void;
  handleToggleRegisterPopUp: Void;
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
  const [showLoginPopUp, setShowLoginPopUp] = useState<boolean>(false);
  const [showRegisterPopUp, setShowRegisterPopUp] = useState<boolean>(false);

  const handleToggleLoginPopUp: Void = useCallback(() => {
    setShowLoginPopUp((prev) => !prev);
  }, []);
  const handleToggleRegisterPopUp: Void = useCallback(() => {
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
