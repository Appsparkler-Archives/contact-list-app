import { IContactFormData } from "types";
import { fireEvent, render, screen } from "@testing-library/react";
import renderer, { act } from "react-test-renderer";
import userEvent from "@testing-library/user-event";
import { CreateContactForm } from "./CreateContactForm";

const contact: IContactFormData = {
  id: "ct-1",
  name: "",
  mobile: "",
  email: "",
  address: "",
  gender: "female",
  type: "personal",
  company: "",
};

const props = {
  contact: contact,
  onCreate: jest.fn(),
  onCancel: jest.fn(),
};

describe("testing renderer", () => {
  test("abc", async () => {
    const { update } = renderer.create(<div>Hello</div>);
  });
});

describe("CreateContactForm - snapshots", () => {
  it("closed modal snapsnhot", () => {
    const { baseElement } = render(<CreateContactForm {...props} />);
    expect(baseElement).toMatchSnapshot();
  });

  it("open modal snapsnhot", async () => {
    const { baseElement } = render(<CreateContactForm {...props} />);
    openModal();
    expect(baseElement).toMatchSnapshot();
  });
});

describe("ContactForm tests", () => {
  test("it should update the name field when changed", async () => {
    render(<CreateContactForm {...props} />);

    openModal();

    const nameField = screen.getByLabelText(/Name/);
    expect(nameField).toBeTruthy();
    fireEvent.change(nameField, {
      target: { value: "Jhon" },
    });
    expect(nameField).toHaveValue("Jhon");
  });

  test("it should call onSubmit with contact-form-data when the form is submitted", async () => {
    render(<CreateContactForm {...props} />);
    openModal();
    const updatedContact: IContactFormData = {
      id: "ct-1",
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
    fireEvent.change(mobileField, {
      target: { value: updatedContact.mobile },
    });
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
    expect(props.onCreate).toHaveBeenCalledWith(updatedContact);

    // click on submit to call handleSubmit appropriately
    const createButton = screen.getByRole("button", { name: "Create" });
    fireEvent.click(createButton);
    expect(props.onCreate).toHaveBeenCalledWith(updatedContact);

    // click on cancel should call the onCancel
    const cancelButton = screen.getByRole("button", { name: /Cancel/ });
    fireEvent.click(cancelButton);
    expect(props.onCancel).toHaveBeenCalled();
  });
});

function openModal() {
  const addButton = screen.getByRole("button", { name: /add/ });
  expect(addButton).toBeTruthy();
  fireEvent.click(addButton);
}
