import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./App";
import { contacts } from "data";

const meta = {
  title: "App",
  component: App,
  tags: ["app"],
} satisfies Meta<typeof App>;

export default meta;

type Story = StoryObj<typeof meta>;

export const withoutContacts: Story = {
  args: {
    contacts: [],
  },
};

export const withContacts: Story = {
  args: {
    contacts,
  },
};
