import { Box, TextField, Typography } from "@mui/material";
import { TAppFC } from "types";
import { FiltersChip } from "components/FilterChip/FiltersChip";
import { ContactListAccordion } from "components/ContactListAccordion/ContactListAccordion";
import { CreateContactForm } from "components/CreateContactForm/CreateContactForm";

export const App: TAppFC = ({ contacts, onCreate, onEdit, onDelete }) => {
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
      <Box>
        <CreateContactForm onCreate={onCreate} />
      </Box>
      <ContactListAccordion
        contacts={contacts}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Box>
  );
};

export default App;
