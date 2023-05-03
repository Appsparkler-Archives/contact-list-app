import renderer from "react-test-renderer";
import { TStandardSelectFieldFC } from "types/components/StandardSelectField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { standardSelectFieldOptions } from "data";
import { noop } from "lodash/fp";

const SelectField: TStandardSelectFieldFC = ({
  selectedOption,
  onChange,
  options,
  label,
}) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        value={selectedOption}
        onChange={onChange}
        label="Age"
        required
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <em>{option.name}</em>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

describe("SelectField FC", () => {
  it("should match snapshot", async () => {
    const component = renderer.create(
      <SelectField
        options={standardSelectFieldOptions}
        selectedOption={standardSelectFieldOptions[0].value}
        onChange={noop}
        label={"Gender"}
      />
    );
    const snapshot = component.toJSON();
    expect(snapshot).toMatchSnapshot();
  });
});
