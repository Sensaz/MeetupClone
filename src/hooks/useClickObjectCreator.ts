import { Dispatch, SetStateAction } from "react";

type clickObjType = {
  [key: string]: () => void;
};

type SelectOption = {
  id: number;
  selectText: string;
  value: string;
};

type DataType = {
  id: string;
  title: string;
  clickFunctionName: string;
  clickFunctionIsOpen: string;
  content: SelectOption[];
};

type StateType = {
  [key: string]: boolean;
};

type setStateType = Dispatch<SetStateAction<StateType>>;

export const useClickObjectCreator = (
  data: DataType[],
  setState: setStateType
) => {
  const clickObj: clickObjType = data.reduce((acc: clickObjType, current) => {
    acc[current.clickFunctionName] = () =>
      ((key: string) => {
        setState((prevState) => ({
          ...Object.fromEntries(
            Object.keys(prevState).map((key) => [key, false])
          ),
          [key]: !prevState[key],
        }));
      })(current.clickFunctionIsOpen);
    return acc;
  }, {});

  return { clickObj };
};
