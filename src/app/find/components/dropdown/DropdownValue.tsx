"use client";

import { useEffect, useState } from "react";
import { z } from "zod";

const dropDownSchema = z.object({
  searchData: z.string().optional(),
  dynamicValue: z.string(),
});

type DropdownValueType = z.infer<typeof dropDownSchema>;

export default function DropdownValue({
  searchData,
  dynamicValue,
}: DropdownValueType) {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    setValue(dynamicValue);
  }, [dynamicValue]);
  useEffect(() => {
    setValue(searchData || dynamicValue);
  }, []);
  return <div>{value}</div>;
}
