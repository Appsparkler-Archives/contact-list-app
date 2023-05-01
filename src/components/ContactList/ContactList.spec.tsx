import renderer from "react-test-renderer";
import { contacts } from "data";
import { ContactList } from "./ContactList";

describe("ContactList", () => {
  test("snapshot test", async () => {
    const component = renderer.create(<ContactList contacts={contacts} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
