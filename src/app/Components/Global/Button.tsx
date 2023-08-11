"use client";

import { ReactNode } from "react";
import classNames from "classnames";

type ButtonType = {
  children: ReactNode;
  theme?: string;
  className?: string;
  click?: Void;
};

const THEMES: KeyValueMap<string> = {
  normal: "",
  primary: "is-primary",
};

export const Button = ({
  children,
  theme = "normal",
  className = "",
  click = () => null,
}: ButtonType) => {
  return (
    <button
      onClick={click}
      className={classNames("nes-btn", THEMES[theme], className)}
      type="button"
    >
      {children}
    </button>
  );
};
