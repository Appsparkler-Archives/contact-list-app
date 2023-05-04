import renderer from "react-test-renderer";
import { IContactFormData } from "types/data/contactForm";
import { clone, noop } from "lodash/fp";
import { ContactForm } from "./ContactForm";
import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const handleCancel = jest.fn();
const handleSubmit = jest.fn();

const createContactDefaultData: IContactFormData = {
  gender: "female",
  mobile: "",
  name: "",
  type: "personal",
  address: "",
  company: "",
  email: "",
};

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

  test("it should update the name field when changed", async () => {
    render(
      <ContactForm
        contact={createContactDefaultData}
        formTitle="Create Contact"
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        submitBtnTitle={"Create"}
      />
    );

    const nameField = screen.getByLabelText(/Name/);
    expect(nameField).toBeTruthy();
    fireEvent.change(nameField, {
      target: { value: "Aakash" },
    });
    expect(nameField).toHaveValue("Aakash");
  });

  test("it should call onSubmit with contact-form-data when the form is submitted", async () => {
    render(
      <ContactForm
        contact={clone(createContactDefaultData)}
        submitBtnTitle={"Create"}
        formTitle={"Create Contact"}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    );
    const updatedContact: IContactFormData = {
      name: "John Smith",
      mobile: "+91-333-333-443",
      company: "PS",
      address: "UK",
      gender: "male",
      type: "business",
      email: "jonh.smith@dxc.com",
    };
    const nameField = screen.getByLabelText(/Name/);
    fireEvent.change(nameField, { target: { value: updatedContact.name } });

    const mobileField = screen.getByLabelText(/Mobile/);
    fireEvent.change(mobileField, { target: { value: updatedContact.mobile } });
    const addressField = screen.getByLabelText(/Address/);
    fireEvent.change(addressField, {
      target: { value: updatedContact.address },
    });

    const companyField = screen.getByLabelText(/Company/);
    fireEvent.change(companyField, {
      target: { value: updatedContact.company },
    });

    const genderSelectField = screen.getByRole("button", { name: /Female/ });
    fireEvent.mouseDown(genderSelectField);
    fireEvent.click(screen.getByText("Male"));

    const typeSelectField = screen.getByRole("button", { name: /Type/ });
    fireEvent.mouseDown(typeSelectField);
    fireEvent.click(screen.getByText("Business"));

    // update email field and press enter
    const emailField = screen.getByLabelText(/Email/);
    // eslint-disable-next-line testing-library/no-unnecessary-act
    act(() => {
      userEvent.type(emailField, `${updatedContact.email}[Enter]`);
    });
    expect(handleSubmit).toHaveBeenCalledWith(updatedContact);

    // click on submit to call handleSubmit appropriately
    const createButton = screen.getByRole("button", { name: "Create" });
    fireEvent.click(createButton);
    expect(handleSubmit).toHaveBeenCalledWith(updatedContact);
  });
});
