import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  ChromeReaderMode as ChromeReaderModeIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { ContactForm } from "components/ContactForm/ContactForm";
import { TContactListAccordionFC } from "types";
import { DeleteContact } from "components/DeleteContact/DeleteContact";

export const ContactListAccordion: TContactListAccordionFC = ({
  contacts,
  onDelete,
  onEdit,
  onView,
}) => {
  return (
    <div>
      {contacts.map((contact) => (
        <Accordion>
          <AccordionSummary aria-controls={contact.id} id={contact.id}>
            <Box display={"flex"} flexDirection={"column"}>
              <Typography variant="h6">{contact.name}</Typography>
              <Typography sx={{ color: "text.secondary" }} variant="subtitle1">
                {contact.company}
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Box
              display="flex"
              flexDirection={"row"}
              justifyContent={"space-between"}
            >
              <IconButton aria-label="read" color="primary">
                <ChromeReaderModeIcon />
              </IconButton>
              <ContactForm
                onSubmit={onEdit}
                formType={"Edit"}
                onCancel={function (): void {
                  throw new Error("Function not implemented.");
                }}
                TriggerButton={({ onClick }) => (
                  <IconButton
                    aria-label="edit"
                    onClick={onClick}
                    color="secondary"
                  >
                    <EditIcon />
                  </IconButton>
                )}
                contact={contact}
              />
              <DeleteContact contact={contact} onDelete={onDelete} />
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
