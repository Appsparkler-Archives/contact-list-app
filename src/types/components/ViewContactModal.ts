import { IContactFormData } from "types/data";

export type TViewContactModalFC = React.FC<{ contact: IContactFormData }>;

export type TContactInfoItem = React.FC<{
  info?: string;
  icon: React.ReactElement;
}>;
