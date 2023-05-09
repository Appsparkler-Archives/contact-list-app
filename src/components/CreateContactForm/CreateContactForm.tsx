import { PersonAddAlt1 as PersonAddAlt1Icon } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ContactForm } from "components/ContactForm/ContactForm";
import { uniqueId } from "lodash/fp";
import { useCallback, useMemo } from "react";
import {
  IContactFormData,
  TContactFormFCProps,
  TCreateContactFormFC,
} from "types";

const TriggerButton: TContactFormFCProps["TriggerButton"] = ({ onClick }) => (
  <Button onClick={onClick} startIcon={<PersonAddAlt1Icon />}>
    Add New Contact
  </Button>
);

export const CreateContactForm: TCreateContactFormFC = () => {
  const contact = useMemo(() => getDefaultCreateContact(), []);
  const handleSubmit: TContactFormFCProps["onSubmit"] =
    useCallback(() => {}, []);
  const handleCancel: TContactFormFCProps["onCancel"] =
    useCallback(() => {}, []);

  return (
    <ContactForm
      formType={"Create"}
      onSubmit={handleSubmit}
      onCancel={handleCancel}
      TriggerButton={TriggerButton}
      contact={contact}
    />
  );
};

const getDefaultCreateContact = (): IContactFormData => ({
  id: uniqueId("contact"),
  gender: "female",
  mobile: "",
  name: "",
  type: "personal",
  address: "",
  company: "",
  email: "",
});
