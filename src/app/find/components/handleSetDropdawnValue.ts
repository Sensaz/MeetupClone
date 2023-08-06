type PrevValueType = {
  [key: string]: boolean | string;
};

export const handleSetDropdawnValue = (
  setState: React.Dispatch<React.SetStateAction<PrevValueType>>,
  toChange: string,
  value: string,
  whichDropdawnIsOpen: string
) => {
  setState((prevValue) => ({
    ...prevValue,
    [toChange]: value,
    [whichDropdawnIsOpen]: false,
  }));
};
