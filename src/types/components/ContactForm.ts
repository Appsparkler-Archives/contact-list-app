import { IContactForm } from "types/data/contactForm";

export type TContactFormFC = React.FC<{
  contact: IContactForm;
  onChange: (contactData: IContactForm) => void;
}>;
