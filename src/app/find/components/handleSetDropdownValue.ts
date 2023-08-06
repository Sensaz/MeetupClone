type PrevValueType = {
  [key: string]: boolean | string;
};

export const handleSetDropdownValue = (
  setState: React.Dispatch<React.SetStateAction<PrevValueType>>,
  toChange: string,
  value: string,
  whichDropdownIsOpen: string
) => {
  setState((prevValue) => ({
    ...prevValue,
    [toChange]: value,
    [whichDropdownIsOpen]: false,
  }));
};
