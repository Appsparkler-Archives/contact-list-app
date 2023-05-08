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
  name,
  id,
}) => {
  const handleChange = useCallback<TSelectChangeEventHandler>(
    ({ target: { value, name } }) => {
      onChange(name, value);
    },
    [onChange]
  );
  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel required id={id}>
        {label}
      </InputLabel>
      <Select<string>
        labelId={id}
        onChange={handleChange}
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
