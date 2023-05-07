import type { Meta, StoryObj } from "@storybook/react";
import { ContactListAccordion } from "./ContactListAccordion";
import { contactsData } from "data";

const meta = {
  title: "Components/Contact List Accordion",
  component: ContactListAccordion,
  tags: ["components"],
} satisfies Meta<typeof ContactListAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const contactListAccordion: Story = {
  args: {
    contacts: contactsData.variant1,
  },
};
