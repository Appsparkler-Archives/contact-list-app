import renderer from "react-test-renderer";
import { standardSelectFieldOptions } from "data";
import { noop } from "lodash/fp";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { StandardSelectField } from "./StandardSelectField";
import "@testing-library/jest-dom";

afterEach(cleanup);

describe("SelectField FC", () => {
  it("should match snapshot", async () => {
    const component = renderer.create(
      <StandardSelectField
        id="standard-select-field"
        options={standardSelectFieldOptions}
        selectedOption={standardSelectFieldOptions[0].value}
        onChange={noop}
        label={"Gender"}
      />
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("onChange event handler is called with selected value", async () => {
    const handleChange = jest.fn();
    render(
      <StandardSelectField
        id={"standard-select-field"}
        options={standardSelectFieldOptions}
        selectedOption={standardSelectFieldOptions[0].value}
        onChange={handleChange}
        label={"Gender"}
      />
    );
    expect(screen.getByLabelText(/Gender/)).toBeTruthy();
    const femaleMenuItem = screen.getByRole("button");
    fireEvent.mouseDown(femaleMenuItem);
    const maleMenuItem = screen.getByText("Male");
    expect(maleMenuItem).toBeVisible();
    fireEvent.click(maleMenuItem);
    expect(handleChange).toBeCalledWith("male");
  });
});
