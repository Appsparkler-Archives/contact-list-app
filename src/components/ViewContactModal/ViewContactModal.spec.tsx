import { fireEvent, render, screen } from "@testing-library/react";
import { ViewContactModal } from "./ViewContactModal";
import { contactsData } from "data";

const contact = contactsData.variant1[0];

describe("ViewContactModal", () => {
  it("renders correctly when closed", () => {
    const { container } = render(<ViewContactModal contact={contact} />);
    expect(container).toMatchSnapshot();
  });

  it("renders correctly when open", () => {
    const { baseElement } = render(<ViewContactModal contact={contact} />);
    clickOnTriggerButton();
    expect(baseElement).toMatchSnapshot();
  });
});

function clickOnTriggerButton() {
  fireEvent.click(screen.getByRole("button"));
}
