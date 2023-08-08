type objectType = {
  [key: string]: string;
};

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
  paramTitle: string;
  color?: boolean;
  content: SelectOption[];
};

export const generateSelectValueMap = (inputObject: SortSetup[]) => {
  const result: { [paramTitle: string]: objectType } = {};

  inputObject.forEach(({ content, paramTitle }) => {
    const valueMap: objectType = {};
    content.forEach(({ value, selectText }) => {
      valueMap[value] = selectText;
    });

    result[paramTitle] = valueMap;
  });

  return result;
};
