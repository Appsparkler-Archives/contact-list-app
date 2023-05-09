import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { TContactListAccordionFC } from "types";
import { DeleteContact } from "components/DeleteContact/DeleteContact";
import { ViewContactModal } from "components/ViewContactModal/ViewContactModal";
import { EditContactForm } from "components/EditContactForm/EditContactForm";

export const ContactListAccordion: TContactListAccordionFC = ({
  contacts,
  onDelete,
  onEdit,
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
              <ViewContactModal contact={contact} />
              <EditContactForm onEdit={onEdit} contactToEdit={contact} />
              <DeleteContact contact={contact} onDelete={onDelete} />
            </Box>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
