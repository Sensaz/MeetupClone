import { Dispatch, SetStateAction } from "react";
import { z } from "zod";

const dataSchema = z.custom<SortSetup[]>();
const setStateSchema =
  z.custom<Dispatch<SetStateAction<KeyValueMap<BooleanOrString>>>>();
type DataType = z.infer<typeof dataSchema>;
type SetStateType = z.infer<typeof setStateSchema>;

export const useClickObjectCreator = (
  data: DataType,
  setState: SetStateType
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
