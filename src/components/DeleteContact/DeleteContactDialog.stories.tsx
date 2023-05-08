import type { Meta, StoryObj } from "@storybook/react";
import { DeleteContactDialog } from "./DeleteContactDialog";
import { contactsData } from "data";

const meta = {
  title: "Components/Delete Contact/Delete Contact Dialog",
  component: DeleteContactDialog,
  tags: ["components"],
} satisfies Meta<typeof DeleteContactDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const deleteContact: Story = {
  args: {
    contact: contactsData.variant1[0],
    open: true,
  },
};
