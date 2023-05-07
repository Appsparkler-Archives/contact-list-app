import { render } from "@testing-library/react";
import { ContactListAccordion } from "./ContactListAccordion";
import { IContactFormData } from "types";
import { contactsData } from "data";

describe("ContactListAccordion Snapshot Tests", () => {
  test("snapshot 1", () => {
    const { container } = render(
      <ContactListAccordion
        contacts={contactsData.variant1}
        onEdit={function (editedContactData: IContactFormData): void {
          throw new Error("Function not implemented.");
        }}
        onDelete={function (deletedContactId: string): void {
          throw new Error("Function not implemented.");
        }}
        onView={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
