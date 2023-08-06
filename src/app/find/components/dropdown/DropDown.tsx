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
  clickFunctionIsValue: string;
  content: SelectOption[];
};

interface Props {
  nearMeetupSorts: SortSetup[];
  clickObj: { [key: string]: () => void };
  isOpenObj: { [key: string]: boolean | string };
  handleSetDropdawnValue: (toChange: string, value: string) => void;
}

const DropDown = ({
  nearMeetupSorts,
  clickObj,
  isOpenObj,
  handleSetDropdawnValue,
}: Props) => {
  const dropdownList = nearMeetupSorts.map(
    ({
      id,
      title,
      content,
      clickFunctionName,
      clickFunctionIsOpen,
      clickFunctionIsValue,
    }) => {
      return (
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
            {isOpenObj[clickFunctionIsValue]}
          </button>
          {isOpenObj[clickFunctionIsOpen] && (
            <ul className="dropdown__menu">
              {content.map(({ id, selectText }) => (
                <DropDownItem
                  handleSetDropdawnValue={handleSetDropdawnValue}
                  toChange={clickFunctionIsValue}
                  key={id}
                >
                  {selectText}
                </DropDownItem>
              ))}
            </ul>
          )}
        </div>
      );
    }
  );

  return <div className="dropdown__wrapper">{dropdownList}</div>;
};

export default DropDown;
