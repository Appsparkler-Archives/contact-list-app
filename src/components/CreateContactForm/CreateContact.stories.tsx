import type { Meta, StoryObj } from "@storybook/react";
import { CreateContactForm } from "./CreateContactForm";

const meta = {
  title: "Components/Contact Form/Create Contact Form",
  component: CreateContactForm,
  tags: ["app"],
} satisfies Meta<typeof CreateContactForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const createContactForm: Story = {
  args: {},
};
