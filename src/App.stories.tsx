import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./App";
import { contactsData } from "data";
import { IAppProps, IContactFormData } from "types";
import { useCallback, useState } from "react";
import { updateContactsWithEditedContact } from "utils";
import { remove } from "lodash/fp";

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

  const handleDelete: IAppProps["onDelete"] = useCallback((contactToDelete) => {
    const removeContactFromList = remove<IContactFormData>(
      (contact) => contact.id === contactToDelete
    );
    setContacts((prevContacts) => removeContactFromList(prevContacts));
  }, []);

  const editContact: IAppProps["onEdit"] = useCallback(
    (editedContact) => {
      const updatedContactList =
        updateContactsWithEditedContact(editedContact)(contacts);
      setContacts(updatedContactList);
    },
    [contacts]
  );

  return (
    <App
      contacts={contacts}
      onCreate={handleCreate}
      onEdit={editContact}
      onDelete={handleDelete}
    />
  );
};
