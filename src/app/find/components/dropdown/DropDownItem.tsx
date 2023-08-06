interface MyComponentProps {
  children: string;
  handleSetDropdawnValue: (
    toChange: string,
    value: string,
    whichDropdawnIsOpen: string
  ) => void;
  toChange: string;
  whichDropdawnIsOpen: string;
}

const DropDownItem = ({
  children,
  handleSetDropdawnValue,
  toChange,
  whichDropdawnIsOpen,
}: MyComponentProps) => {
  return (
    <li
      onClick={() =>
        handleSetDropdawnValue(toChange, children, whichDropdawnIsOpen)
      }
      className="dropdown__item"
    >
      - {children}
    </li>
  );
};

export default DropDownItem;
