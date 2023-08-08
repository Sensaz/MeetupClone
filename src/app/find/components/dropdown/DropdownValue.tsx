"use client";

import { useEffect, useState } from "react";

type Props = {
  searchData: string | undefined;
  dynamicValue: string;
};

export default function DropdownValue({ searchData, dynamicValue }: Props) {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setValue(dynamicValue);
  }, [dynamicValue]);
  useEffect(() => {
    setValue(searchData || dynamicValue);
  }, []);
  return <div>{value}</div>;
}
