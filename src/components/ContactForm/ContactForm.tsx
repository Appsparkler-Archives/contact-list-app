import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useCallback, useMemo } from "react";
import {
  IContactFormData,
  IStandardSelectFieldChangeHandler,
  TContactFormFC,
} from "types";
import { StandardSelectField } from "components/StandardSelectField/StandardSelectField";
import { Close as CloseIcon } from "@mui/icons-material";
import { FullScreenModalTransition } from "components/FullScreenModalTransition/FullScreenModalTransition";

export const ContactForm: TContactFormFC = ({
  contact: contactData,
  formType,
  TriggerButton,
  onSubmit,
  onCancel,
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      onSubmit(contactData);
      handleClose();
    },
    [contactData, handleClose, onSubmit]
  );

  const handleCancel = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    handleClose();
    onCancel();
  }, [handleClose, onCancel]);

  const handleChangeTextField = useCallback<
    React.ChangeEventHandler<HTMLInputElement>
  >(({ target: { name, value } }) => {
    // setContactData((oldContactData) => ({
    //   ...oldContactData,
    //   [name]: value,
    // }));
  }, []);

  const handleChangeSelectField =
    useCallback<IStandardSelectFieldChangeHandler>((name, value) => {
      // setContactData((oldContactData) => ({
      //   ...oldContactData,
      //   [name]: value,
      // }));
    }, []);

  const colorType: "primary" | "secondary" = useMemo(
    () => (formType === "Create" ? "primary" : "secondary"),
    [formType]
  );

  return (
    <React.Fragment>
      <TriggerButton onClick={handleClickOpen} />
      <Dialog
        fullScreen
        open={open}
        onClose={handleCancel}
        TransitionComponent={FullScreenModalTransition}
      >
        <form onSubmit={handleSubmit}>
          <AppBar color={colorType} sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {formType} Contact
              </Typography>
              <Button autoFocus color="inherit" type="submit">
                {formType}
              </Button>
            </Toolbar>
          </AppBar>
          {/* Create Contact Form Fields */}
          <Box gap={2} p={2} flexDirection={"column"} display={"flex"}>
            <TextField
              fullWidth
              label="Name"
              variant="standard"
              name="name"
              defaultValue={contactData.name}
              onChange={handleChangeTextField}
              required
            />
            <TextField
              fullWidth
              label="Mobile"
              variant="standard"
              name="mobile"
              // value={contactData.mobile}
              onChange={handleChangeTextField}
              defaultValue={contactData.mobile}
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
            <TextField
              fullWidth
              label="Address"
              variant="standard"
              value={contactData.address}
              onChange={handleChangeTextField}
              name="address"
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
              <Button
                type="button"
                size="large"
                variant="outlined"
                onClick={handleCancel}
                color={colorType}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color={colorType}
                size="large"
                type="submit"
              >
                {formType}
              </Button>
            </Box>
          </Box>
        </form>
      </Dialog>
    </React.Fragment>
  );
};
