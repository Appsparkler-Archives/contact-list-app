import { SelectChangeEvent } from "@mui/material";
import React from "react";

export interface IStandSelectFieldOptionItem {
  name: string | number;
  value: string | number;
}

export type TStandardSelectFieldFC = React.FC<{
  options: IStandSelectFieldOptionItem[];
  selectedOption: string | number;
  label: string;
  onChange: (event: SelectChangeEvent<any>, child: React.ReactNode) => void;
}>;
