import { memo } from "react";
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
  console.log("rerender");
  return (
    <li
      onClick={() => {
        handleSetDropdownValue(toChange, children, whichDropdownIsOpen);
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set(paramTitle, value);

        const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
        window.history.pushState({ path: newUrl }, "", newUrl);
      }}
      className="dropdown__item"
    >
      - {children}
    </li>
  );
};
