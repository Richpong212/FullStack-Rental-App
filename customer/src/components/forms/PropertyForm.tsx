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
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

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
                {/* Select component for category */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    category
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    label="category"
                    onChange={handleChange}
                    className="propertyform__input"
                  >
                    {/* Menu items for category options */}
                    <MenuItem value={"Ten"}>Ten</MenuItem>
                    <MenuItem value={"Twenty"}>Twenty</MenuItem>
                    <MenuItem value={"Thirty"}>Thirty</MenuItem>
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
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <TextField
                        id="standard-disabled"
                        label="Location"
                        variant="standard"
                        placeholder="Location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
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
