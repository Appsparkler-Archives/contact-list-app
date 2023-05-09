import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ContactForm } from "components/ContactForm/ContactForm";
import { TContactFormFCProps, TEditContactFormFC } from "types";

const TriggerButton: TContactFormFCProps["TriggerButton"] = ({ onClick }) => (
  <IconButton aria-label="edit" onClick={onClick} color="secondary">
    <Edit />
  </IconButton>
);

export const EditContactForm: TEditContactFormFC = ({
  contactToEdit,
  onEdit,
}) => {
  return (
    <ContactForm
      onSubmit={onEdit}
      formType={"Edit"}
      TriggerButton={TriggerButton}
      contact={contactToEdit}
    />
  );
};
