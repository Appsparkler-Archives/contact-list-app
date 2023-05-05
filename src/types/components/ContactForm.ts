import { IContactFormData } from "types";

export type TContactFormFC = React.FC<{
  contact: IContactFormData;
  submitBtnTitle: string;
  formTitle: string;

  // event handlers
  onSubmit: (contactData: IContactFormData) => void;
  onCancel: () => void;
}>;
