"use client";

import React, { ReactNode, useContext, useMemo } from "react";
import { Button } from "../Button";

import { GlobalContext } from "@/app/GlobalContextProvider";

type AuthButtonProps = {
  children: ReactNode;
  theme?: string;
  className?: string;
  auth: string;
};

type ShowAuthType = {
  [key: string]: () => void;
};

export const AuthButton = ({
  children,
  theme,
  className,
  auth,
}: AuthButtonProps) => {
  const { handleToggleLoginPopUp, handleToggleRegisterPopUp } =
    useContext(GlobalContext);

  const SHOW_AUTH: ShowAuthType = useMemo(
    () => ({
      login: handleToggleLoginPopUp,
      register: handleToggleRegisterPopUp,
    }),
    []
  );

  return (
    <Button click={SHOW_AUTH[auth]} className={className} theme={theme}>
      {children}
    </Button>
  );
};
