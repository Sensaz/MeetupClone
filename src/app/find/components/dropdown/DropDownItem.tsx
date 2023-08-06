interface MyComponentProps {
  children: string;
  handleSetDropdownValue: (
    toChange: string,
    value: string,
    whichDropdownIsOpen: string
  ) => void;
  toChange: string;
  whichDropdownIsOpen: string;
}

const DropDownItem = ({
  children,
  handleSetDropdownValue,
  toChange,
  whichDropdownIsOpen,
}: MyComponentProps) => {
  return (
    <li
      onClick={() =>
        handleSetDropdownValue(toChange, children, whichDropdownIsOpen)
      }
      className="dropdown__item"
    >
      - {children}
    </li>
  );
};

export default DropDownItem;
