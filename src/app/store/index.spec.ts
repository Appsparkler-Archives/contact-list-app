import { store } from ".";
import { contactsActions } from "features/contacts/contactsSlice";
import { IContactFormData } from "types";
import { cleanup } from "@testing-library/react";
import { find } from "lodash/fp";

afterEach(cleanup);

describe("store and reducer", () => {
  const dispatch = store.dispatch;

  it("should have initial data", () => {
    expect(store.getState().contacts.length).toBe(3);
  });

  it("should create", () => {
    const contactToCreate: IContactFormData = {
      gender: "female",
      id: "m-1",
      mobile: "9999",
      name: "Zoomba Man",
      type: "business",
      address: "Pandora",
      company: "Home Tree",
      email: "pandora@gmai.com",
    };
    dispatch(contactsActions.create(contactToCreate));
    expect(store.getState().contacts.length).toBe(4);
  });

  it("should edit", () => {
    const contacts = store.getState().contacts;
    const contact2Edit: IContactFormData = {
      ...contacts[1],
      name: "weuweuwewu",
      mobile: "999383838383",
      gender: "male",
      type: "business",
      address: "NewLand",
      company: "jeijfijfiej",
      email: "jkjskjf@jaksdjf.com",
    };
    dispatch(contactsActions.edit(contact2Edit));
    const updatedContacts = store.getState().contacts;
    const findResult = find(
      (contact) => contact.id === contact2Edit.id,
      updatedContacts
    );
    expect(findResult).not.toBeNull();
    expect(findResult).toEqual(contact2Edit);
  });

  it("should delete", () => {
    const contacts = store.getState().contacts;
    dispatch(contactsActions.delete(contacts[0].id));
    expect(store.getState().contacts.length).toBe(3);
  });
});
