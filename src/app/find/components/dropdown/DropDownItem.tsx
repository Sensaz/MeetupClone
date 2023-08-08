import { useRouter } from "next/navigation";
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

const DropDownItem = ({
  children,
  handleSetDropdownValue,
  toChange,
  whichDropdownIsOpen,
  value,
  paramTitle,
}: MyComponentProps) => {
  const router = useRouter();
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

export default DropDownItem;
