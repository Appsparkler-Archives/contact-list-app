import type { Meta, StoryObj } from "@storybook/react";
import { ContactList } from "./ContactList";
import { contactsData } from "data";

const meta = {
  title: "Components/Contact List",
  component: ContactList,
  tags: ["components"],
} satisfies Meta<typeof ContactList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const contactList: Story = {
  args: {
    contacts: contactsData.variant1,
  },
};
