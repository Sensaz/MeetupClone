"use client";
import Link from "next/link";

interface MyComponentProps {
  children: string;
  handleSetDropdownValue: (
    toChange: string,
    value: string,
    whichDropdownIsOpen: string
  ) => void;
  toChange: string;
  whichDropdownIsOpen: string;
  value: string;
  paramTitle: string;
}

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
      <Link className="dropdown__link" href={handleSetUrl()}>- {children}</Link>
    </li>
  );
};
