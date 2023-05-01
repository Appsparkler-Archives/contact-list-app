import { ContactList } from "./ContactList.spec";
import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@mui/material";

const meta = {
  title: "Components/Contact List",
  component: ContactList,
  tags: ["components"],
} satisfies Meta<typeof ContactList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    contacts: [
      {
        id: "7cb1248c-983a-4207-a59f-40bfa1fae564",
        name: "Ali Connors",
        imgUrl:
          "https://plus.unsplash.com/premium_photo-1671641797679-3b680a7d2109?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
        company: "SurveyHeart",
      },
      {
        id: "b4fc7a3e-3522-4292-b05d-5edbdffcf3ac",
        name: "Ansi Sharma...",
        imgUrl:
          "https://images.unsplash.com/photo-1625621435205-2d09ed661a71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
        company: "Societe Generale",
      },
    ],
  },
};

export const exmaple2 = () => <Typography>Hello WOrld</Typography>;
