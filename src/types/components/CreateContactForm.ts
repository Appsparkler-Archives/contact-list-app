import { IContactFormData } from "types/data";

export type TCreateContactFormFC = React.FC<{
  onCreate: (contact: IContactFormData) => void;
}>;
