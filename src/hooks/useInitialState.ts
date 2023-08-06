type initialStateType = {
  [key: string]: boolean | string;
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
  clickFunctionIsValue: string;
  content: SelectOption[];
};

export const useInitialState = (data: DataType[]) => {
  const initialState: initialStateType = data.reduce(
    (acc: initialStateType, current) => {
      acc[current.clickFunctionIsValue] = current.title;
      acc[current.clickFunctionIsOpen] = false;
      return acc;
    },
    {}
  );

  return { initialState };
};
