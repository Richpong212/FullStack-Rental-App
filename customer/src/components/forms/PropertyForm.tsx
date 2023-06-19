import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./formStyles.scss";
import TextField from "@mui/material/TextField";

const PropertyForm = () => {
  // State to store the selected category
  const [category, setCategory] = useState("");

  // Event handler for category select change
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <div className="container property__form">
      <div className="container propertyform__content">
        <div className="row">
          <div className="col-md col-lg col-sm">
            <div className="maintype">
              <div className="type">
                <h3>Category</h3>
              </div>
              <div className="ml-5 type__info">
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    category
                  </InputLabel>
                  {/* Select component for category */}
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="category"
                    onChange={handleChange}
                    className="propertyform__input"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
            <div className="col-md col-lg col-sm">
              <div className="maintype">
                <div className="type">
                  <h3>Property Details</h3>
                </div>
                <div className="ml-5 property__info">
                  {/* Property details form */}
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <div>
                      {/* Text fields for property details */}
                      <TextField
                        required
                        id="standard-required"
                        label="Required"
                        variant="standard"
                        placeholder="Title"
                        type="text"
                      />
                      <TextField
                        id="standard-disabled"
                        label="Required"
                        variant="standard"
                        placeholder="Location"
                        type="text"
                      />
                      <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                      />
                      <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="standard"
                      />
                      <TextField
                        id="standard-number"
                        label="Number"
                        type="number"
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="standard"
                      />
                      <TextField
                        id="standard-search"
                        label="Search field"
                        type="search"
                        variant="standard"
                      />
                      <TextField
                        id="standard-helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        helperText="Some important text"
                        variant="standard"
                      />
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyForm;
