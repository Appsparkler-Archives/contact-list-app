import { render } from "@testing-library/react";
import { ContactListAccordion } from "./ContactListAccordion";

describe("ContactListAccordion Snapshot Tests", () => {
  test("snapshot 1", () => {
    const { container } = render(<ContactListAccordion />);
    expect(container).toMatchSnapshot();
  });
});
