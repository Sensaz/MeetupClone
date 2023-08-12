"use client";

import React, { ReactNode, useContext, useMemo } from "react";
import { Button } from "../Button";
import { GlobalContext } from "@/app/GlobalContextProvider";
import { z } from "zod";

const authButtonSchema = z.object({
  children: z.custom<ReactNode>(),
  theme: z.string().optional(),
  className: z.string().optional(),
  auth: z.enum(["login", "register"]),
});

type AuthButtonProps = z.infer<typeof authButtonSchema>;

export const AuthButton = ({
  children,
  theme,
  className,
  auth,
}: AuthButtonProps) => {
  const { handleToggleLoginPopUp, handleToggleRegisterPopUp } =
    useContext(GlobalContext);

  const SHOW_AUTH: KeyValueMap<Void> = useMemo(
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
