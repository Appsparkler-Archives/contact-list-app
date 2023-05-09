import type { Meta, StoryObj } from "@storybook/react";
import { EditContactForm } from "./EditContactForm";
import { contactsData } from "data";

const meta = {
  title: "Components/Edit Contact Form",
  component: EditContactForm,
  tags: ["app"],
} satisfies Meta<typeof EditContactForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const editContactForm: Story = {
  args: {
    contactToEdit: contactsData.variant1[0],
  },
};
