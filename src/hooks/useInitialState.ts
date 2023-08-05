type initialStateType = {
  [key: string]: boolean;
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

export const useInitialState = (data: DataType[]) => {
  const initialState: initialStateType = data.reduce(
    (acc: initialStateType, current) => {
      acc[current.clickFunctionIsOpen] = false;
      return acc;
    },
    {}
  );

  return { initialState };
};
