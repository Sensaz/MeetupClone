"use client";
import { z } from "zod";
import { createContext, useState, ReactNode, useCallback } from "react";

const contextVoidSchema = z.function().returns(z.void());

const iglobalContextSchema = z.object({
  showLoginPopUp: z.boolean(),
  showRegisterPopUp: z.boolean(),
  handleToggleLoginPopUp: contextVoidSchema,
  handleToggleRegisterPopUp: contextVoidSchema,
});

type IGlobalContextProps = z.infer<typeof iglobalContextSchema>;

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
