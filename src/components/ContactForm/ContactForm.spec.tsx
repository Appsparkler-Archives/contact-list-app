import renderer from "react-test-renderer";
import { IContactFormData } from "types/data/contactForm";
import { noop } from "lodash/fp";
import { ContactForm } from "./ContactForm";

describe("ContactForm component", () => {
  test("match snapshot", async () => {
    const contact: IContactFormData = {
      name: "",
      gender: "male",
      mobile: "",
      type: "business",
    };
    const component = renderer.create(
      <ContactForm
        contact={contact}
        submitBtnTitle={"Edit"}
        formTitle={"Edit Contact"}
        onSubmit={noop}
        onCancel={noop}
      />
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
