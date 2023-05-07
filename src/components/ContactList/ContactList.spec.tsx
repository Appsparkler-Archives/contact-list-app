import renderer from "react-test-renderer";
import { contactsData } from "data";
import { ContactList } from "./ContactList";

describe("ContactList", () => {
  test("snapshot test", async () => {
    const component = renderer.create(
      <ContactList contacts={contactsData.variant1} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
