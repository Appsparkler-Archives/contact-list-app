import React from "react";
import { IContactFormData } from "types/data";

export type TCreateContactFormFC = React.FC<{
  onCreate: (contact: IContactFormData) => void;
  onCancel: () => void;
  //
  contact: IContactFormData;
}>;
