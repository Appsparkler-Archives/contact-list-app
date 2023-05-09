import { PersonAddAlt1 as PersonAddAlt1Icon } from "@mui/icons-material";
import { Button } from "@mui/material";
import { ContactForm } from "components/ContactForm/ContactForm";
import { useCallback, useMemo } from "react";
import { getDefaultCreateContact } from "data";
import { TContactFormFCProps, TCreateContactFormFC } from "types";

const TriggerButton: TContactFormFCProps["TriggerButton"] = ({ onClick }) => (
  <Button onClick={onClick} startIcon={<PersonAddAlt1Icon />}>
    Add New Contact
  </Button>
);

export const CreateContactForm: TCreateContactFormFC = ({ onCreate }) => {
  const contact = useMemo(() => getDefaultCreateContact(), []);

  const handleSubmit: TContactFormFCProps["onSubmit"] = useCallback(
    (createdContact) => {
      onCreate(createdContact);
    },
    [onCreate]
  );

  return (
    <ContactForm
      formType={"Create"}
      onSubmit={handleSubmit}
      TriggerButton={TriggerButton}
      contact={contact}
    />
  );
};
