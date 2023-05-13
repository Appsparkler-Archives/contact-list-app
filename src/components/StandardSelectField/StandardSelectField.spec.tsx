import renderer from "react-test-renderer";
import { standardSelectFieldOptions } from "data";
import { cleanup } from "@testing-library/react";
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
        label={"Gender"}
        name="gender"
      />
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
