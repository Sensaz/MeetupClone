import classNames from "classnames";
import DropDownItem from "./DropDownItem";
import "@/style/find/dropdown.sass";

type SelectOption = {
  id: number;
  selectText: string;
  value: string;
};

type SortSetup = {
  id: string;
  title: string;
  clickFunctionName: string;
  clickFunctionIsOpen: string;
  content: SelectOption[];
};

interface Props {
  nearMeetupSorts: SortSetup[];
  clickObj: { [key: string]: () => void };
  isOpenObj: { [key: string]: boolean };
}

const DropDown = ({ nearMeetupSorts, clickObj, isOpenObj }: Props) => {
  const dropdownList = nearMeetupSorts.map(
    ({ id, title, content, clickFunctionName, clickFunctionIsOpen }) => (
      <div
        id={id}
        className={classNames("dropdown", {
          "dropdown--open": isOpenObj[clickFunctionIsOpen],
        })}
      >
        <button
          className="dropdown__button nes-select is-dark"
          onClick={clickObj[clickFunctionName]}
        >
          {title}
        </button>
        {isOpenObj[clickFunctionIsOpen] && (
          <ul className="dropdown__menu">
            {content.map(({ id, selectText }) => (
              <DropDownItem key={id}>{selectText}</DropDownItem>
            ))}
          </ul>
        )}
      </div>
    )
  );

  return <div className="dropdown__wrapper">{dropdownList}</div>;
};

export default DropDown;
