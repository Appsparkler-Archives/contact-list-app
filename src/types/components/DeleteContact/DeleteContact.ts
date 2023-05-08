import React from "react";
import { IContactFormData } from "types/data";

export type TDeleteContactDialogFC = React.FC<{
  open: boolean;
  contact: IContactFormData;
  onClose: () => void;
  onDelete: (contactIdToDelete: string) => void;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
}>;

export type TDeleteContactModalFC = React.FC<{
  contact: IContactFormData;
  onDelete: (contactIdToDelete: string) => void;
}>;
