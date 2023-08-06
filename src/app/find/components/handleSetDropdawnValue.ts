type PrevValueType = {
  [key: string]: boolean | string;
};

export const handleSetDropdawnValue = (
  setState: React.Dispatch<React.SetStateAction<PrevValueType>>,
  toChange: string,
  value: string
) => {
  setState((prevValue) => ({
    ...prevValue,
    [toChange]: value,
  }));
};
