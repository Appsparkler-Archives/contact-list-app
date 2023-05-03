import renderer from "react-test-renderer";
import { IContactForm } from "types/data/contactForm";
import { noop } from "lodash/fp";
import { ContactForm } from "./ContactForm";

describe("ContactForm component", () => {
  test("match snapshot", async () => {
    const contact: IContactForm = {
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
        onClickSubmit={noop}
        onClickCancel={noop}
      />
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
