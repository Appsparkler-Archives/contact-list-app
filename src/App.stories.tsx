import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./App";
import { contactsData } from "data";
import { IAppProps, IContactFormData } from "types";
import { useCallback, useState } from "react";
import {
  fill,
  findIndex,
  indexOf,
  pipe,
  replace,
  set,
  update,
} from "lodash/fp";

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
    contacts: contactsData.variant1,
  },
};

export const Demo = () => {
  const [contacts, setContacts] = useState<IContactFormData[]>([]);

  const handleCreate: IAppProps["onCreate"] = useCallback((contact) => {
    setContacts((prevContacts) => [contact, ...prevContacts]);
  }, []);

  const editContact: IAppProps["onEdit"] = useCallback(
    (editedContact) => {
      const indexOfContactToEdit = findIndex<IContactFormData>(
        (contact) => contact.id === editedContact.id
      )(contacts);
      const updatedContacts = [...contacts];
      updatedContacts[indexOfContactToEdit] = editedContact;
      setContacts(updatedContacts);
    },
    [contacts]
  );

  return (
    <App
      contacts={contacts}
      onCreate={handleCreate}
      onEdit={editContact}
      onDelete={function (contactIdToDelete: string): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
};
