import { IContactFormData } from "types";

export interface TContactFormFCProps {
  onSubmit: (contact: IContactFormData) => void;
  formType: "Create" | "Edit";
  onCancel: () => void;
  //
  TriggerButton: React.FC<{
    onClick: React.MouseEventHandler<HTMLButtonElement>;
  }>;
  contact: IContactFormData;
}

export type TContactFormFC = React.FC<TContactFormFCProps>;
