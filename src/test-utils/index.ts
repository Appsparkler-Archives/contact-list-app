import { fireEvent, screen } from "@testing-library/react";

export function changeTextField(label: RegExp, value: string) {
  fireEvent.change(screen.getByLabelText(label), {
    target: { value },
  });
}

export function clickOnFirstCreateButton() {
  fireEvent.click(screen.getAllByRole("button", { name: /Create/i })[0]);
}
