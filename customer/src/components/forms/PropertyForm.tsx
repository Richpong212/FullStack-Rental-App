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
  const [input, setInput] = useState("");

  // Event handler for category select change
  const handleChange = (event: SelectChangeEvent) => {
    setInput(event.target.value as string);
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
                    value={input}
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
                        label="Title"
                        variant="standard"
                        placeholder="Title"
                        type="text"
                      />
                      <TextField
                        id="standard-disabled"
                        label="Location"
                        variant="standard"
                        placeholder="Location"
                        type="text"
                      />
                    </div>
                    <div>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Bathroom
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={input}
                          onChange={handleChange}
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={input}>Yes</MenuItem>
                          <MenuItem value={input}>No</MenuItem>
                        </Select>
                      </FormControl>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          Bedroom
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={input}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={input}>Yes</MenuItem>
                          <MenuItem value={input}>No</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Parking
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={input}
                          onChange={handleChange}
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={input}>Yes</MenuItem>
                          <MenuItem value={input}>No</MenuItem>{" "}
                        </Select>
                      </FormControl>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 120 }}
                      >
                        <InputLabel id="demo-simple-select-filled-label">
                          Pets
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={input}
                          onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={33}>Yes</MenuItem>
                          <MenuItem value={20}>No</MenuItem>
                        </Select>
                      </FormControl>
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
