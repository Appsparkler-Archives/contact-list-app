import { Box, Button, TextField, Typography } from "@mui/material";
import { TContactFormFC } from "types/components/ContactForm";
import { noop } from "lodash/fp";
import { StandardSelectField } from "components/StandardSelectField/StandardSelectField";

export const ContactForm: TContactFormFC = ({
  contact,
  submitBtnTitle,
  formTitle,
  onClickSubmit = noop,
  onClickCancel = noop,
}) => {
  return (
    <form>
      <Box gap={2} flexDirection={"column"} display={"flex"}>
        <Typography variant="h5">{formTitle}</Typography>
        <TextField
          fullWidth
          label="Name"
          variant="standard"
          value={contact.name}
        />
        <TextField
          fullWidth
          label="Mobile"
          variant="standard"
          value={contact.mobile}
        />
        <TextField
          fullWidth
          label="Email"
          variant="standard"
          value={contact.email}
        />
        <StandardSelectField
          options={[
            { name: "Female", value: "female" },
            { name: "Male", value: "male" },
          ]}
          id="contact-field--gender"
          label="Gender"
          onChange={noop}
          selectedOption={contact.gender}
        />
        <StandardSelectField
          options={[
            { name: "Personal", value: "personal" },
            { name: "Business", value: "business" },
          ]}
          id="contact-field--type"
          label="Type"
          onChange={noop}
          selectedOption={contact.type}
        />
        <TextField
          fullWidth
          label="Company"
          variant="standard"
          value={contact.company}
        />
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
        >
          <Button size="large" variant="outlined">
            CANCEL
          </Button>
          <Button variant="contained" size="large">
            {submitBtnTitle}
          </Button>
        </Box>
      </Box>
    </form>
  );
};
