"use client";
import Link from "next/link";
import { z } from "zod";

const myComponentSchema = z.object({
  children: z.string(),
  handleSetDropdownValue: z.custom<HandleSetDropdownValueType>(),
  toChange: z.string(),
  whichDropdownIsOpen: z.string(),
  value: z.string(),
  paramTitle: z.string(),
});

type MyComponentProps = z.infer<typeof myComponentSchema>;

export const DropDownItem = ({
  children,
  handleSetDropdownValue,
  toChange,
  whichDropdownIsOpen,
  value,
  paramTitle,
}: MyComponentProps) => {
  const handleSetUrl = () => {
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set(paramTitle, value);
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    return newUrl;
  };

  return (
    <li
      onClick={() => {
        handleSetDropdownValue(toChange, children, whichDropdownIsOpen);
      }}
      className="dropdown__item"
    >
      <Link className="dropdown__link" href={handleSetUrl()}>
        - {children}
      </Link>
    </li>
  );
};
