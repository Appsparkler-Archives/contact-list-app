import React from "react";
import { IContactFormData } from "types";

export type TContactListAccordionFC = React.FC<{
  contacts: IContactFormData[];
  onEdit: (editedContactData: IContactFormData) => void;
  onDelete: (deletedContactId: string) => void;
  onView: () => void;
}>;
