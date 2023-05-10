import { act, fireEvent, render, screen } from "@testing-library/react";
import { DeleteContact } from "./DeleteContact";
import { IContactFormData } from "types";
import { contactsData } from "data";

const contact2Delete: IContactFormData = contactsData.variant1[0];
const handleDelete = jest.fn();
jest.useFakeTimers();

describe("DeleteContact Snapshots", () => {
  it("renders closed modal correctly", () => {
    const { container } = renderDeleteContactComponent();
    expect(container).toMatchSnapshot();
  });

  it("renders open modal correctly", () => {
    const { baseElement } = renderDeleteContactComponent();
    clickOnDeleteIconButton();
    expect(baseElement).toMatchSnapshot();
  });
});

describe("DeleteCOntact - functional tests", () => {
  it("calls onDelete when delete button is clicked", () => {
    renderDeleteContactComponent();
    clickOnDeleteIconButton();
    clickOnYesDeleteButton();
    act(() => {
      jest.runAllTimers();
    });
    expect(handleDelete).toHaveBeenCalled();
  });
});

function renderDeleteContactComponent(): { container: any; baseElement: any } {
  return render(
    <DeleteContact contact={contact2Delete} onDelete={handleDelete} />
  );
}

function clickOnDeleteIconButton() {
  const deleteButton = screen.getByLabelText(/delete/);
  fireEvent.click(deleteButton);
}

function clickOnYesDeleteButton() {
  const yesDeleteButton = screen.getByText("Yes, delete");
  fireEvent.click(yesDeleteButton);
}
