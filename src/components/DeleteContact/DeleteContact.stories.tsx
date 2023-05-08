import type { Meta, StoryObj } from "@storybook/react";
import { DeleteContact } from "./DeleteContact";
import { contactsData } from "data";

const meta = {
  title: "Components/Delete Contact Modal",
  component: DeleteContact,
  tags: ["components"],
} satisfies Meta<typeof DeleteContact>;

export default meta;

type Story = StoryObj<typeof meta>;

export const deleteContact: Story = {
  args: {
    contact: contactsData.variant1[0],
  },
};
