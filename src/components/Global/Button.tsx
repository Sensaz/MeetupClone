import { ReactNode } from "react";
import classNames from "classnames";

type THEMESType = {
  [key: string]: string;
};

type ButtonType = {
  children: ReactNode;
  theme?: string;
  className?: string;
  click?: () => void;
};

const THEMES: THEMESType = {
  normal: "",
  primary: "is-primary",
};

export const Button = ({
  children,
  theme = "normal",
  className = "",
  click,
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
