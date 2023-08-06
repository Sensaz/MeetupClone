interface MyComponentProps {
  children: string;
  handleSetDropdawnValue: (toChange: string, value: string) => void;
  toChange: string;
}

const DropDownItem = ({
  children,
  handleSetDropdawnValue,
  toChange,
}: MyComponentProps) => {
  return (
    <li
      onClick={() => handleSetDropdawnValue(toChange, children)}
      className="dropdown__item"
    >
      - {children}
    </li>
  );
};

export default DropDownItem;
