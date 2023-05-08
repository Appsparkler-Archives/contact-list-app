import React from "react";
import { IContactFormData } from "./data";

export type TAppFC = React.FC<{
  contacts: IContactFormData[];
  onCreate: (newContact: IContactFormData) => void;
  onEdit: (editedContact: IContactFormData) => void;
  onDelete: (contactIdToDelete: IContactFormData["id"]) => void;
}>;
