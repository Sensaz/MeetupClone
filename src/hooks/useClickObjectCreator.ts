import { Dispatch, SetStateAction } from "react";

type setStateType = Dispatch<SetStateAction<KeyValueMap<BooleanOrString>>>;

export const useClickObjectCreator = (
  data: SortSetup[],
  setState: setStateType
) => {
  const clickObj = data.reduce((acc, current) => {
    acc[current.clickFunctionName] = () =>
      ((key: string) => {
        setState((prevState) => ({
          ...Object.fromEntries(
            Object.keys(prevState).map((key) =>
              key.includes("Sort") ? [key, false] : [key, prevState[key]]
            )
          ),
          [key]: !prevState[key],
        }));
      })(current.clickFunctionIsOpen);
    return acc;
  }, {} as KeyValueMap<Void>);

  return { clickObj };
};
