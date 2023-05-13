import type { Meta, StoryObj } from "@storybook/react";
import { ViewContactModal } from "./ViewContactModal";
import { contactsData } from "data";

const meta = {
  title: "Components/View Contact Modal",
  component: ViewContactModal,
  tags: ["components"],
} satisfies Meta<typeof ViewContactModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const viewContactModal: Story = {
  args: {
    contact: contactsData.variant1[0],
  },
};
