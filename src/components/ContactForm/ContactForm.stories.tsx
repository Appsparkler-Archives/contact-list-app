import type { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "./ContactForm";
import Fab from "@mui/material/Fab";
import { Add, Edit as EditIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const meta = {
  title: "Components/Contact Form",
  component: ContactForm,
  tags: ["components"],
} satisfies Meta<typeof ContactForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const createContactForm: Story = {
  args: {
    formType: "Create",
    TriggerButton: ({ onClick }) => (
      <Fab color="primary" aria-label="add" onClick={onClick}>
        <Add />
      </Fab>
    ),
    contact: {
      id: "m-1",
      gender: "female",
      type: "personal",
      mobile: "",
      name: "",
      address: "",
      company: "",
      email: "",
    },
  },
};

export const editContactForm: Story = {
  args: {
    formType: "Edit",
    TriggerButton: ({ onClick }) => (
      <IconButton aria-label="edit" onClick={onClick} color="secondary">
        <EditIcon />
      </IconButton>
    ),
    contact: {
      id: "m-1",
      gender: "male",
      mobile: "+91-719-8101-355",
      name: "John Smith",
      type: "business",
      address: "Fathimapur",
      company: "PS",
      email: "appsparkler@gmail.com",
    },
  },
};
