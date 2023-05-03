import { Box, Button, TextField, Typography } from "@mui/material";
import { TContactFormFC } from "types/components/ContactForm";
import { noop } from "lodash/fp";
import { StandardSelectField } from "components/StandardSelectField/StandardSelectField";
import { useCallback, useState } from "react";
import { IContactFormData } from "types";

export const ContactForm: TContactFormFC = ({
  contact,
  submitBtnTitle,
  formTitle,
  onClickSubmit = noop,
  onClickCancel = noop,
}) => {
  const [contactData, setContactData] = useState<IContactFormData>(contact);

  const handleSubmit = useCallback<
    React.FormEventHandler<HTMLFormElement>
  >(() => {}, []);

  return (
    <form onSubmit={handleSubmit}>
      <Box gap={2} flexDirection={"column"} display={"flex"}>
        <Typography variant="h5">{formTitle}</Typography>
        <TextField
          fullWidth
          label="Name"
          variant="standard"
          value={contactData.name}
          required
        />
        <TextField
          fullWidth
          label="Mobile"
          variant="standard"
          value={contactData.mobile}
          required
        />
        <TextField
          fullWidth
          label="Email"
          variant="standard"
          value={contactData.email}
        />
        <StandardSelectField
          options={[
            { name: "Female", value: "female" },
            { name: "Male", value: "male" },
          ]}
          id="contact-field--gender"
          label="Gender"
          onChange={noop}
          selectedOption={contactData.gender}
        />
        <StandardSelectField
          options={[
            { name: "Personal", value: "personal" },
            { name: "Business", value: "business" },
          ]}
          id="contact-field--type"
          label="Type"
          onChange={noop}
          selectedOption={contactData.type}
        />
        <TextField
          fullWidth
          label="Company"
          variant="standard"
          value={contactData.company}
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
