import { IContactFormData } from "types";

export type TContactFormFC = React.FC<{
  onSubmit: (contact: IContactFormData) => void;
  formType: "Create" | "Edit";
  onCancel: () => void;
  //
  TriggerButton: React.FC<{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }>;
  contact: IContactFormData;
}>;
