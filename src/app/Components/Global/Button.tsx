"use client";

import { z } from "zod";
import { ReactNode } from "react";
import classNames from "classnames";

const themesShema = z.record(z.string());

type ThemesType = z.infer<typeof themesShema>;

const THEMES: ThemesType = {
  normal: "",
  primary: "is-primary",
};

const PARSE_THEMES: KeyValueMap<string> = themesShema.parse(THEMES);

type ThemesEnum = keyof typeof THEMES;

const buttonTypeSchema = z.object({
  children: z.custom<ReactNode>(),
  theme: z.custom<ThemesEnum>().optional(),
  className: z.string().optional(),
  click: z.function().returns(z.void()).optional(),
});

type ButtonType = z.infer<typeof buttonTypeSchema>;

export const Button = ({
  children,
  theme = "normal",
  className = "",
  click = () => {},
}: ButtonType) => {
  return (
    <button
      onClick={click}
      className={classNames("nes-btn", PARSE_THEMES[theme], className)}
    >
      {children}
    </button>
  );
};
