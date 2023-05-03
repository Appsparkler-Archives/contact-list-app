import { IContactForm } from "types";

export type TContactFormFC = React.FC<{
  contact: IContactForm;
  submitBtnTitle: string;
  formTitle: string;

  // event handlers
  onClickSubmit: (contactData: IContactForm) => void;
  onClickCancel: () => void;
}>;
