import { contactsData } from "data";
import { find } from "lodash/fp";
import { IContactFormData } from "types";
import { updateContactsWithEditedContact } from "./updateContactsWithEditedContact";

describe("updateContactsWithEditedContact", () => {
  const contacts = [...contactsData.variant1];

  it("should updade the contact", () => {
    const editedContact: IContactFormData = {
      ...contacts[1],
      gender: "male",
      mobile: "999311828282",
      name: "ABCD DEFGH",
      type: "personal",
      address: "ABCD EFGHT",
      company: "HDJHFEIHFEU",
      email: "ajdkfjkadsfj@ajdfkajf.com",
    };

    const updatedContactList =
      updateContactsWithEditedContact(editedContact)(contacts);
    const foundUpdatedContactInList = find<IContactFormData>(
      (contact) => contact.id === editedContact.id
    )(updatedContactList);

    expect(foundUpdatedContactInList).toMatchObject(editedContact);
  });
});
