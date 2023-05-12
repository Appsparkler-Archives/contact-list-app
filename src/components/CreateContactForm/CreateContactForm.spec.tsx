import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import { CreateContactForm } from "./CreateContactForm";
import { IContactFormData } from "types";
import { getDefaultCreateContact } from "data";
import { changeTextField, clickOnFirstCreateButton } from "test-utils";

jest.useFakeTimers();

const onCreate = jest.fn();
const contact: IContactFormData = getDefaultCreateContact();
const ContactFormRenderer = () => <CreateContactForm onCreate={onCreate} />;

describe("ContactForm - Snapshot Tests", () => {
  it("renders correctly when modal is closed", () => {
    const { container } = render(<ContactFormRenderer />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly when modal is opened", () => {
    const { baseElement } = render(<ContactFormRenderer />);
    clickOnTriggerButton();
    expect(baseElement).toMatchSnapshot();
  });
});

afterEach(cleanup);

describe("ContactForm - Functional Tests", () => {
  it("opens Dialog when TriggerButton is clicked", () => {
    render(<ContactFormRenderer />);
    clickOnTriggerButton();
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("closes dialog when close button is clicked", async () => {
    render(<ContactFormRenderer />);
    clickOnTriggerButton();
    clickOnCloseButton();
    act(() => {
      jest.runAllTimers();
    });
    expect(screen.queryByText(/create contact/i)).not.toBeInTheDocument();
  });

  it("closes Dialog when cancel button is clicked", () => {
    render(<ContactFormRenderer />);
    expect(screen.queryByText(/create contact/i)).not.toBeInTheDocument();
    clickOnTriggerButton();
    expect(screen.getByText(/create contact/i)).toBeInTheDocument();
    clickOnCancelButton();
    act(() => {
      jest.runAllTimers();
    });
    expect(screen.queryByText(/create contact/i)).not.toBeInTheDocument();
  });

  it("calls onSubmit function with form data when form is submitted", () => {
    const updatedContact: IContactFormData = {
      ...contact,
      //
      name: "Jhon Doe",
      email: "johndoe@example.com",
      company: "Google",
      address: "UK",
      mobile: "9999",
      //
    };
    render(<ContactFormRenderer />);
    clickOnTriggerButton();
    changeTextField(/Name/i, updatedContact.name);
    changeTextField(/Email/i, String(updatedContact.email));
    changeTextField(/Mobile/i, String(updatedContact.mobile));
    changeTextField(/Company/i, String(updatedContact.company));
    changeTextField(/Address/i, String(updatedContact.address));
    clickOnFirstCreateButton();
    expect(onCreate).toHaveBeenCalled();
  });
});

function clickOnTriggerButton() {
  fireEvent.click(screen.getByRole("button"));
}

function clickOnCloseButton() {
  const closeButton = screen.getByRole("button", { name: /close/i });
  fireEvent.click(closeButton);
}

function clickOnCancelButton() {
  fireEvent.click(screen.getByRole("button", { name: /cancel/i }));
}
