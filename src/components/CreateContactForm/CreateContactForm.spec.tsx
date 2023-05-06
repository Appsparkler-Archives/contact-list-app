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
import React, { useCallback, useEffect, useState } from "react";
import { TCreateContactFormFC } from "types/components/CreateContactForm";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { IContactFormData, IStandardSelectFieldChangeHandler } from "types";
import { StandardSelectField } from "components/StandardSelectField/StandardSelectField";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer, { act } from "react-test-renderer";

const CreateContactFormOpened = () => {
  const contact: IContactFormData = {
    name: "",
    mobile: "",
    gender: "male",
    type: "personal",
  };

  const handleMount = useCallback(async () => {
    // eslint-disable-next-line
    const addButton = screen.getByRole("button", { name: /add/ });
    if (addButton) {
      expect(addButton).toBeTruthy();
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => {
        fireEvent.click(addButton);
      });
    }
  }, []);

  useEffect(() => {
    handleMount();
  }, [handleMount]);

  return (
    <CreateContactForm
      onCreate={function (contact: IContactFormData): void {
        throw new Error("Function not implemented.");
      }}
      onCancel={function (): void {
        throw new Error("Function not implemented.");
      }}
      contact={contact}
    />
  );
};

describe("testing renderer", () => {
  test("abc", async () => {
    const { update } = renderer.create(<div>Hello</div>);
  });
});

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const CreateContactForm: TCreateContactFormFC = ({
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
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {/* Create Contact Form Fields */}
        <Box gap={2} flexDirection={"column"} display={"flex"}>
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
      </Dialog>
    </React.Fragment>
  );
};

describe("CreateContactForm - snapshots", () => {
  const contact: IContactFormData = {
    name: "",
    mobile: "",
    email: "",
    address: "",
    gender: "female",
    type: "personal",
    company: "",
  };

  const props = {
    contact: contact,
    onCreate: jest.fn(),
    onCancel: jest.fn(),
  };

  it("closed modal snapsnhot", () => {
    const { baseElement } = render(<CreateContactForm {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it("open modal snapsnhot", async () => {
    const { baseElement } = render(<CreateContactForm {...props} />);
    const addButton = screen.getByRole("button", { name: /add/ });
    expect(addButton).toBeTruthy();
    fireEvent.click(addButton);
    expect(baseElement).toMatchSnapshot();
  });
});
