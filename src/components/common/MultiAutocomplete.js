import { createFilterOptions } from "@material-ui/lab";
import { Autocomplete, TextField } from "mui-rff";
import { useState } from "react";

const filter = createFilterOptions();

const MultiAutocomplete = (props) => {
  const [values, setValues] = useState([]);
  const { name, options, label } = props;
  return (
    <>
      <Autocomplete
        multiple
        name={name}
        value={values}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setValues({
              title: newValue,
            });
          } else if (newValue && newValue.inputValue) {
            setValues({
              title: newValue.inputValue,
            });
          } else {
            setValues(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              label: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={options}
        getOptionLabel={(option) => {
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        renderOption={(option) => option.title}
        freeSolo
        renderInput={(params) => (
          <TextField name={name} {...params} label={label} variant="outlined" />
        )}
      />
    </>
  );
};

export default MultiAutocomplete;
