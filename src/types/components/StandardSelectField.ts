import { SelectChangeEvent } from "@mui/material";
import React from "react";

export interface IStandSelectFieldOptionItem {
  name: string | number;
  value: string;
}

export type TSelectChangeEventHandler<T = string> = (
  event: SelectChangeEvent<T>,
  child: React.ReactNode
) => void;

export type TStandardSelectFieldFC = React.FC<{
  id: string;
  options: IStandSelectFieldOptionItem[];
  selectedOption: string;
  label: string;
  onChange: (newValue: string) => void;
}>;
