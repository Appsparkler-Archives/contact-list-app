import { Box, Chip, TextField, Typography } from "@mui/material";
import "./App.css";
import { CreateContactForm } from "components/CreateContactForm/CreateContactForm";
import { IContactFormData } from "types";
import { ContactList } from "components/ContactList";
import { TAppFC } from "data/app";
import { useMemo } from "react";
import { noop } from "lodash/fp";

export const App: TAppFC = ({ contacts }) => {
  const createContact: IContactFormData = {
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
      <Box
        display="flex"
        flexDirection={"row"}
        gap={2}
        justifyContent={"center"}
        p={2}
      >
        <Chip
          onClick={noop}
          label="21 female"
          variant="outlined"
          size="small"
        />
        <Chip label="12 male" variant="outlined" size="small" />
        <Chip label="10 personal" variant="outlined" size="small" />
        <Chip label="5 business" variant="outlined" size="small" />
      </Box>

      {/* contacts */}
      {showContacts ? (
        <ContactList contacts={contacts} />
      ) : (
        <Typography variant={"h6"} mt={3}>
          <em>No Contacts Added...</em>
        </Typography>
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
