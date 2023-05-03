import { TSelectChangeEventHandler, TStandardSelectFieldFC } from "types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useCallback } from "react";

export const StandardSelectField: TStandardSelectFieldFC = ({
  selectedOption,
  onChange,
  options,
  label,
  id,
}) => {
  const handleChange = useCallback<TSelectChangeEventHandler>(
    ({ target: { value } }) => {
      onChange(value);
    },
    [onChange]
  );
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel id={id}>{label}</InputLabel>
      <Select<string>
        labelId={id}
        value={selectedOption}
        onChange={handleChange}
        label={label}
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
