import React from "react";
import { IContactFormData } from "./data";

export interface IAppProps {
  contacts: IContactFormData[];
  onCreate: (newContact: IContactFormData) => void;
  onEdit: (editedContact: IContactFormData) => void;
  onDelete: (contactIdToDelete: IContactFormData["id"]) => void;
}

export type TAppFC = React.FC<IAppProps>;
