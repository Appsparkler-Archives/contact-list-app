import { IContactForm } from "types";

export type TContactFormFC = React.FC<{
  contact: IContactForm;
  onChange: (contactData: IContactForm) => void;
}>;
