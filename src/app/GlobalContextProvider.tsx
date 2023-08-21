"use client";
import { z } from "zod";
import { createContext, useState, ReactNode, useCallback } from "react";

const contextVoidSchema = z.function().returns(z.void());

const iglobalContextSchema = z.object({
  showLoginPopUp: z.boolean(),
  showRegisterPopUp: z.boolean(),
  showManualRegistration: z.boolean(),
  handleCloseAuthPopUp: contextVoidSchema,
  handleOpenManualRegistrationPopUp: contextVoidSchema,
  handleOpenRegisterPopUp: contextVoidSchema,
  handleOpenLoginPopUp: contextVoidSchema,
});

type IGlobalContextProps = z.infer<typeof iglobalContextSchema>;

type GlobalContextProviderProps = {
  children: ReactNode;
};

export const GlobalContext = createContext<IGlobalContextProps>({
  showLoginPopUp: false,
  showRegisterPopUp: false,
  showManualRegistration: false,
  handleCloseAuthPopUp: () => {},
  handleOpenManualRegistrationPopUp: () => {},
  handleOpenRegisterPopUp: () => {},
  handleOpenLoginPopUp: () => {},
});

export const GlobalContextProvider = ({
  children,
}: GlobalContextProviderProps) => {
  const [showLoginPopUp, setShowLoginPopUp] = useState<boolean>(false);
  const [showRegisterPopUp, setShowRegisterPopUp] = useState<boolean>(false);
  const [showManualRegistration, setShowManualRegistration] =
    useState<boolean>(false);

  const handleOpenLoginPopUp: Void = useCallback(() => {
    setShowLoginPopUp(true);
    setShowRegisterPopUp(false);
    setShowManualRegistration(false);
  }, []);

  const handleOpenRegisterPopUp: Void = useCallback(() => {
    setShowRegisterPopUp(true);
    setShowManualRegistration(false);
    setShowLoginPopUp(false);
  }, []);

  const handleOpenManualRegistrationPopUp: Void = useCallback(() => {
    setShowManualRegistration(true);
    setShowRegisterPopUp(false);
    setShowLoginPopUp(false);
  }, []);

  const handleCloseAuthPopUp: Void = useCallback(() => {
    setShowLoginPopUp(false);
    setShowRegisterPopUp(false);
    setShowManualRegistration(false);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        showLoginPopUp,
        showRegisterPopUp,
        showManualRegistration,
        handleCloseAuthPopUp,
        handleOpenManualRegistrationPopUp,
        handleOpenRegisterPopUp,
        handleOpenLoginPopUp,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
