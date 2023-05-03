import type { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "./ContactForm";

const meta = {
  title: "Components/Contact Form",
  component: ContactForm,
  tags: ["components"],
} satisfies Meta<typeof ContactForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const contactForm: Story = {
  args: {
    contact: {
      gender: "male",
      mobile: "+91-719-8101-355",
      name: "John Smith",
      type: "business",
      address: "Fathimapur",
      company: "PS",
      email: "appsparkler@gmail.com",
    },
    // contacts,
  },
};
