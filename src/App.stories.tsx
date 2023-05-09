import type { Meta, StoryObj } from "@storybook/react";
import { App } from "./App";
import { contactsData } from "data";
import { IAppProps, IContactFormData } from "types";
import { useCallback, useState } from "react";
import { updateContactsWithEditedContact } from "utils";
import { remove } from "lodash/fp";
import { Provider } from "react-redux";
import { store } from "app/store";
import { contactsActions } from "features/contacts/contactsSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

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

export const ReduxDemo = () => {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
};

const ConnectedApp = () => {
  const contacts = useAppSelector((state) => state.contacts);

  const dispatch = useAppDispatch();

  const handleCreate: IAppProps["onCreate"] = useCallback(
    (contacts) => {
      dispatch(contactsActions.create(contacts));
    },
    [dispatch]
  );

  const handleEdit: IAppProps["onEdit"] = useCallback(
    (contact2Edit) => {
      dispatch(contactsActions.edit(contact2Edit));
    },
    [dispatch]
  );

  const handleDelete: IAppProps["onDelete"] = useCallback(
    (contactIdToDelete) => {
      dispatch(contactsActions.delete(contactIdToDelete));
    },
    [dispatch]
  );

  return (
    <App
      contacts={contacts}
      onCreate={handleCreate}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};
