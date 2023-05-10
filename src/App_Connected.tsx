import { App } from "./App";
import { IAppProps } from "types";
import { useCallback } from "react";
import { contactsActions } from "features/contacts/contactsSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";

export const ConnectedApp: React.FC<{}> = () => {
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
