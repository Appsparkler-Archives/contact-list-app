import { Box, Button, TextField, Typography } from "@mui/material";
import { CreateContactForm } from "components/CreateContactForm/CreateContactForm";
import { IContactFormData } from "types";
import { TAppFC } from "data/app";
import { useMemo } from "react";
import { FiltersChip } from "components/FilterChip/FiltersChip";
import { ContactListAccordion } from "components/ContactListAccordion/ContactListAccordion";
import { PersonAddAlt1 as PersonAddAlt1Icon } from "@mui/icons-material";
import { ContactForm } from "components/ContactForm/ContactForm";

export const App: TAppFC = ({ contacts }) => {
  const createContact: IContactFormData = {
    id: "",
    gender: "female",
    mobile: "",
    name: "",
    type: "personal",
    address: "",
    company: "",
    email: "",
  };

  const showContacts: boolean = useMemo(
    () => contacts.length > 0,
    [contacts.length]
  );

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      p={2}
      height={"100vh"}
      sx={{ backgroundColor: "grey.50", position: "relative" }}
      gap={2}
    >
      <Typography variant="h4">Contacts</Typography>
      <TextField
        placeholder="Search..."
        sx={{ backgroundColor: "background.paper" }}
      />
      {contacts.length > 0 && <FiltersChip contacts={contacts} />}
      <Box display={"flex"}>
        <ContactForm
          contact={createContact}
          onSubmit={function (contact: IContactFormData): void {
            throw new Error("Function not implemented.");
          }}
          formType={"Create"}
          onCancel={function (): void {
            throw new Error("Function not implemented.");
          }}
          TriggerButton={({ onClick }) => (
            <Button onClick={onClick} startIcon={<PersonAddAlt1Icon />}>
              Add New Contact
            </Button>
          )}
        />
      </Box>
      <Box>
        {/* <Button variant="text" onClick={}>
          <PersonAddAlt1Icon /> Add New Contact
        </Button> */}
      </Box>
      <ContactListAccordion
        contacts={contacts}
        onEdit={function (editedContactData: IContactFormData): void {
          throw new Error("Function not implemented.");
        }}
        onDelete={function (deletedContactId: string): void {
          throw new Error("Function not implemented.");
        }}
        onView={function (): void {
          throw new Error("Function not implemented.");
        }}
      />

      {/* last element */}
      {/* <Box position={"absolute"} right={16} bottom={16}>
        <CreateContactForm
          onCreate={function (contact: IContactFormData): void {
            throw new Error("Function not implemented.");
          }}
          onCancel={function (): void {
            throw new Error("Function not implemented.");
          }}
          contact={createContact}
        />
      </Box> */}
    </Box>
  );
};

export default App;
