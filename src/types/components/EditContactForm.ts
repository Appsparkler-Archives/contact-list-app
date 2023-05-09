import { IContactFormData } from "types/data";

export type TEditContactFormFC = React.FC<{
  onEdit: (editedContactData: IContactFormData) => void;
  contactToEdit: IContactFormData;
}>;
