import { fireEvent, screen } from "@testing-library/react";

export function changeTextField(label: RegExp, value: string) {
  fireEvent.change(screen.getByLabelText(label), {
    target: { value },
  });
}
