import { Box, TextField, Typography } from "@mui/material";
import "./App.css";
import { CreateContactForm } from "components/CreateContactForm/CreateContactForm";
import { IContactFormData } from "types";
import { ContactList } from "components/ContactList";
import { contacts } from "data";

export function App() {
  const createContact: IContactFormData = {
    gender: "female",
    mobile: "",
    name: "",
    type: "personal",
    address: "",
    company: "",
    email: "",
  };
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Typography variant="h4">Contacts</Typography>
      <TextField placeholder="Search..." sx={{ borderRadius: 10 }} />
      <Typography variant={"h6"} mt={3}>
        <em>No Contacts Added...</em>
      </Typography>

      <ContactList contacts={contacts} />

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
}

export default App;
