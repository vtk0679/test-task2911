import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";

import s from "./Controls.module.css";
import { apiGetOptions } from "services/apiService";
import { useEffect, useState } from "react";

export default function Controls({ setField: setMainField, setHoveredList }) {
  const [field, setField] = useState("");
  const [options, setOptions] = useState(null);

  useEffect(() => {
    const opt = apiGetOptions();

    opt.then((res) => {
      setOptions(
        Object.keys(res).map((key) => ({ value: res[key].field, option: key }))
      );
    });
  }, []);

  const handleChange = (event) => {
    setField(event.target.value);
  };

  const onSubmit = () => {
    setMainField(field);
    setHoveredList([]);
  };

  return (
    <div className={s.controls}>
      <div className={s.select}>
        <FormControl fullWidth>
          <InputLabel id="label">Mode</InputLabel>
          <Select
            labelId="label"
            id="demo-simple-select"
            value={field}
            label="Age"
            onChange={handleChange}
            sx={{ marginX: 1 }}
            autoWidth
          >
            {options &&
              options.map(({ value, option }) => (
                <MenuItem key={option} value={value}>
                  {option}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <Button
        sx={{ width: 100 }}
        variant="contained"
        className={s.button}
        onClick={onSubmit}
      >
        Start
      </Button>
    </div>
  );
}
