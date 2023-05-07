import { Box, Button, TextField, Typography } from "@mui/material";
import { CreateContactForm } from "components/CreateContactForm/CreateContactForm";
import { IContactFormData } from "types";
import { ContactList } from "components/ContactList";
import { TAppFC } from "data/app";
import { useMemo } from "react";
import { FiltersChip } from "components/FilterChip/FiltersChip";

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
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant="h4">Contacts</Typography>

      <TextField placeholder="Search..." sx={{ borderRadius: 10 }} />

      {/* info */}
      <FiltersChip contacts={contacts} />

      {/* contacts */}
      {showContacts ? (
        <ContactList contacts={contacts} />
      ) : (
        <Box display="flex" flexDirection={"column"} justifyContent={"center"}>
          <Typography
            color="secondary"
            textAlign={"center"}
            fontSize={16}
            mt={3}
          >
            <em>No contacts added!!</em>
          </Typography>
        </Box>
      )}

      {/* last element */}
      <Box position={"fixed"} right={16} bottom={16}>
        <CreateContactForm
          onCreate={function (contact: IContactFormData): void {
            throw new Error("Function not implemented.");
          }}
          onCancel={function (): void {
            throw new Error("Function not implemented.");
          }}
          contact={createContact}
        />
      </Box>
    </Box>
  );
};

export default App;
