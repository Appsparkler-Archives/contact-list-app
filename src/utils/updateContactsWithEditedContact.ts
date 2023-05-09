import { map } from "lodash/fp";
import { IContactFormData } from "types";

export const updateContactsWithEditedContact = (
  contact2Edit: IContactFormData
) =>
  map<IContactFormData, IContactFormData>((contact) =>
    contact2Edit.id === contact.id ? contact2Edit : contact
  );
