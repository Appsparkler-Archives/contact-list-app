import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { contactsData } from "data";
import { remove } from "lodash/fp";
import { IContactFormData } from "types";
import { updateContactsWithEditedContact } from "utils";

const initialState: IContactFormData[] = contactsData.variant1;

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<IContactFormData>) => {
      state.unshift(action.payload);
    },
    edit: (state, action: PayloadAction<IContactFormData>) => {
      state = updateContactsWithEditedContact(action.payload)([...state]);
      return state;
    },
    delete: (state, action: PayloadAction<string>) => {
      const removeContact = remove<IContactFormData>(
        (contact) => contact.id === action.payload
      );
      state = removeContact([...state]);
      return state;
    },
  },
});

export const {
  actions: contactsActions,
  reducer: contactsReducer,
  name: contactsName,
} = contactsSlice;
