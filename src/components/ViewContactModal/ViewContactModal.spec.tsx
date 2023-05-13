import { act, fireEvent, render, screen } from "@testing-library/react";
import { ViewContactModal } from "./ViewContactModal";
import { contactsData } from "data";

jest.useFakeTimers();

const mockContact = contactsData.variant1[0];

describe("ViewContactModal - Snapshot Tests", () => {
  it("renders correctly when closed", () => {
    const { container } = render(<ViewContactModal contact={mockContact} />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly when open", () => {
    const { baseElement } = render(<ViewContactModal contact={mockContact} />);
    clickOnTriggerButton();
    expect(baseElement).toMatchSnapshot();
  });
});

describe("ViewContactModal", () => {
  test("should open modal when read button is clicked", () => {
    render(<ViewContactModal contact={mockContact} />);
    fireEvent.click(screen.getByLabelText("read"));
    expect(screen.getByText("View Contact")).toBeInTheDocument();
  });

  test("should close modal when close button is clicked", () => {
    render(<ViewContactModal contact={mockContact} />);
    fireEvent.click(screen.getByLabelText("read"));
    fireEvent.click(screen.getByLabelText("close"));
    act(() => {
      jest.runAllTimers();
    });
    expect(screen.queryByText("View Contact")).not.toBeInTheDocument();
  });

  test("should display contact info when modal is opened", () => {
    render(<ViewContactModal contact={mockContact} />);
    fireEvent.click(screen.getByLabelText("read"));
    expect(screen.getByText(mockContact.name)).toBeInTheDocument();
    expect(screen.getByText(mockContact.mobile)).toBeInTheDocument();
    expect(screen.getByText(String(mockContact.email))).toBeInTheDocument();
    expect(screen.getByText(String(mockContact.address))).toBeInTheDocument();
    expect(screen.getByText(String(mockContact.company))).toBeInTheDocument();
    expect(screen.getByText(mockContact.type)).toBeInTheDocument();
  });

  test("should display avatar with correct color based on gender", () => {
    render(<ViewContactModal contact={mockContact} />);
    fireEvent.click(screen.getByLabelText("read"));
    const avatar = screen.getByLabelText("gender male");
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveStyle(`background-color: #2196f3;`); // blue color for male
  });

  test("should not display contact info item if it is not provided", () => {
    const mockContactWithoutEmail = { ...mockContact, email: undefined };
    render(<ViewContactModal contact={mockContactWithoutEmail} />);
    fireEvent.click(screen.getByLabelText("read"));
    expect(
      screen.queryByText(String(mockContactWithoutEmail.email))
    ).not.toBeInTheDocument();
  });
});

function clickOnTriggerButton() {
  fireEvent.click(screen.getByRole("button"));
}
