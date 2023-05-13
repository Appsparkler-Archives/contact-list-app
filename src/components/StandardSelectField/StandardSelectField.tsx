import { TStandardSelectFieldFC } from "types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export const StandardSelectField: TStandardSelectFieldFC = ({
  selectedOption,
  options,
  label,
  name,
  id,
}) => {
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel required id={id}>
        {label}
      </InputLabel>
      <Select<string>
        labelId={id}
        label={label}
        required
        name={name}
        defaultValue={selectedOption}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
