import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";

import s from "./Controls.module.css";
import { apiGetOptions } from "../../services/apiService";
import { useEffect, useState } from "react";

export default function Controls() {
  const [options, setOptions] = useState(null);
  //   const options = apiGetOptions();

  useEffect(() => {
    const opt = apiGetOptions();
    opt.then((res) => setOptions(res));
  }, []);

  return (
    <div className={s.controls}>
      <div className={s.select}>
        <FormControl fullWidth>
          <InputLabel id="label">Age</InputLabel>
          <Select
            labelId="label"
            id="demo-simple-select"
            // value={10}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Button variant="contained" className={s.button}>
        Contained
      </Button>
    </div>
  );
}
