import type { Meta, StoryObj } from "@storybook/react";
import { CreateContactForm } from "./CreateContactForm";

const meta = {
  title: "Components/Create Contact Form",
  component: CreateContactForm,
  tags: ["components"],
} satisfies Meta<typeof CreateContactForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const createContactForm: Story = {
  args: {
    contact: {
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
