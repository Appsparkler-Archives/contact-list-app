import {
  AppBar,
  Box,
  Button,
  Dialog,
  Fab,
  IconButton,
  Slide,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import { TCreateContactFormFC } from "types/components/CreateContactForm";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { IContactFormData, IStandardSelectFieldChangeHandler } from "types";
import { StandardSelectField } from "components/StandardSelectField/StandardSelectField";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CreateContactForm: TCreateContactFormFC = ({
  contact,
  onCreate,
  onCancel,
}) => {
  const [contactData, setContactData] = useState<IContactFormData>(contact);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = useCallback<React.FormEventHandler<HTMLFormElement>>(
    (event) => {
      event.preventDefault();
      onCreate(contactData);
      handleClose();
    },
    [contactData, onCreate]
  );

  const handleCancel = useCallback<
    React.MouseEventHandler<HTMLButtonElement>
  >(() => {
    onCancel();
  }, [onCancel]);

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
    <React.Fragment>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <form onSubmit={handleSubmit}>
          <AppBar sx={{ position: "relative" }}>
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
                Create Contact
              </Typography>
              <Button autoFocus color="inherit" type="submit">
                create
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
              >
                Cancel
              </Button>

              <Button variant="contained" size="large" type="submit">
                Create
              </Button>
            </Box>
          </Box>
        </form>
      </Dialog>
    </React.Fragment>
  );
};
