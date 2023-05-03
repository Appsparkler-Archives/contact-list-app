import type { Meta, StoryObj } from "@storybook/react";
import { StandardSelectField } from "./StandardSelectField";
import { standardSelectFieldOptions } from "data";

const meta = {
  title: "Components/Standard Select Field",
  component: StandardSelectField,
  tags: ["components"],
} satisfies Meta<typeof StandardSelectField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const standardSelectField: Story = {
  args: {
    id: "standard-select-field-id",
    label: "Gender",
    options: standardSelectFieldOptions,
    selectedOption: standardSelectFieldOptions[0].value,
  },
};
