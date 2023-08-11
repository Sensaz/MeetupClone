import classNames from "classnames";
import { DropDownItem } from "./DropDownItem";
import DropdownValue from "./DropdownValue";
import "@/style/find/dropdown.sass";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useMemo } from "react";

type Props = {
  nearMeetupSorts: SortSetup[];
  clickObj: KeyValueMap<Void>;
  isOpenObj: KeyValueMap<BooleanOrString>;
  paramData: KeyValueMap<KeyValueMap<string>>;
  handleSetDropdownValue: HandleSetDropdownValueType;
};

export const DropDown = ({
  nearMeetupSorts,
  clickObj,
  isOpenObj,
  paramData,
  handleSetDropdownValue,
}: Props) => {
  const dropdownList = nearMeetupSorts.map(
    ({
      id,
      title,
      content,
      clickFunctionName,
      clickFunctionIsOpen,
      clickFunctionIsValue,
      paramTitle,
      color,
    }) => {
      const searchParams: ReadonlyURLSearchParams = useSearchParams();
      const search: string = searchParams.get(paramTitle) || "";
      const data: string = paramData[paramTitle][search];
      const currentValue: string =
        data || (isOpenObj[clickFunctionIsValue] as string);
      const dropdownIsOpen: boolean = isOpenObj[clickFunctionIsOpen] as boolean;
      const result = useMemo(
        () => (
          <div
            id={id}
            className={classNames("dropdown", {
              "dropdown--open": dropdownIsOpen,
            })}
          >
            <button
              className={classNames(
                "dropdown__button",
                "nes-select",
                "is-dark",
                {
                  "dropdown__button--selected":
                    currentValue !== title ||
                    (data !== title && !!data) ||
                    color,
                }
              )}
              onClick={clickObj[clickFunctionName]}
            >
              <DropdownValue searchData={data} dynamicValue={currentValue} />
            </button>
            {dropdownIsOpen && (
              <ul className="dropdown__menu">
                {content.map(({ id, selectText, value }) => (
                  <DropDownItem
                    handleSetDropdownValue={handleSetDropdownValue}
                    toChange={clickFunctionIsValue}
                    whichDropdownIsOpen={clickFunctionIsOpen}
                    value={value}
                    paramTitle={paramTitle}
                    key={id}
                  >
                    {selectText}
                  </DropDownItem>
                ))}
              </ul>
            )}
          </div>
        ),
        [dropdownIsOpen, currentValue]
      );
      return result;
    }
  );

  return <div className="dropdown__wrapper">{dropdownList}</div>;
};
