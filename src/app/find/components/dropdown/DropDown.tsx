import classNames from "classnames";
import { DropDownItem } from "./DropDownItem";
import DropdownValue from "./DropdownValue";
import "@/style/find/dropdown.sass";
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { z } from "zod";

const dropDownSchema = z.object({
  nearMeetupSorts: z.custom<SortSetup[]>(),
  clickObj: z.custom<KeyValueMap<Void>>(),
  isOpenObj: z.custom<KeyValueMap<BooleanOrString>>(),
  paramData: z.custom<KeyValueMap<KeyValueMap<string>>>(),
  handleSetDropdownValue: z.custom<HandleSetDropdownValueType>(),
});

type DropDownType = z.infer<typeof dropDownSchema>;

export const DropDown = ({
  nearMeetupSorts,
  clickObj,
  isOpenObj,
  paramData,
  handleSetDropdownValue,
}: DropDownType) => {
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
      const search = z.string().parse(searchParams.get(paramTitle) || "");
      const data = z.string().parse(paramData[paramTitle][search]);
      const currentValue = z
        .string()
        .parse(data || isOpenObj[clickFunctionIsValue]);
      const dropdownIsOpen = z.boolean().parse(isOpenObj[clickFunctionIsOpen]);
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
