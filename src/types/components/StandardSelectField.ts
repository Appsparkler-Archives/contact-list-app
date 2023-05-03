import React from "react";

export interface IStandSelectFieldOptionItem {
  key: string | number;
  value: string | number;
}

export type TStandardSelectFieldFC = React.FC<{
  options: IStandSelectFieldOptionItem[];
  selectedOptions: string | number;
  onChange: (newValue: IStandSelectFieldOptionItem) => void;
}>;
