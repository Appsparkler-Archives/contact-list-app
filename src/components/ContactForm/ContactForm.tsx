import { Box, Button, TextField, Typography } from "@mui/material";
import { TContactFormFC } from "types/components/ContactForm";
import { noop } from "lodash/fp";
import { StandardSelectField } from "components/StandardSelectField/StandardSelectField";
import { useCallback, useState } from "react";
import { IContactFormData, IStandardSelectFieldChangeHandler } from "types";

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

  const handleChangeTextField = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(({ target: { name, value } }) => {
    setContactData((oldContactData) => ({
      ...oldContactData,
      [name]: value,
    }));
  }, []);

  const handleChangeSelectField =
    useCallback<IStandardSelectFieldChangeHandler>((name, value) => {
      setContactData((oldContactData) => ({
        ...oldContactData,
        [name]: value,
      }));
    }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Box gap={2} flexDirection={"column"} display={"flex"}>
        <Typography variant="h5">{formTitle}</Typography>
        <TextField
          fullWidth
          label="Name"
          variant="standard"
          name="name"
          value={contactData.name}
          onChange={handleChangeTextField}
          required
        />
        <TextField
          fullWidth
          label="Mobile"
          variant="standard"
          name="mobile"
          value={contactData.mobile}
          onChange={handleChangeTextField}
          required
        />
        <TextField
          fullWidth
          label="Email"
          variant="standard"
          value={contactData.email}
          onChange={handleChangeTextField}
          name="email"
        />
        <StandardSelectField
          options={[
            { name: "Female", value: "female" },
            { name: "Male", value: "male" },
          ]}
          id="contact-field--gender"
          label="Gender"
          onChange={handleChangeSelectField}
          selectedOption={contactData.gender}
          name="gender"
        />
        <StandardSelectField
          options={[
            { name: "Personal", value: "personal" },
            { name: "Business", value: "business" },
          ]}
          id="contact-field--type"
          label="Type"
          onChange={handleChangeSelectField}
          selectedOption={contactData.type}
          name="type"
        />
        <TextField
          fullWidth
          label="Company"
          variant="standard"
          value={contactData.company}
          name="company"
          onChange={handleChangeTextField}
        />
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          mt={3}
        >
          <Button size="large" variant="outlined">
            CANCEL
          </Button>
          <Button variant="contained" size="large" type="submit">
            {submitBtnTitle}
          </Button>
        </Box>
      </Box>
    </form>
  );
};
