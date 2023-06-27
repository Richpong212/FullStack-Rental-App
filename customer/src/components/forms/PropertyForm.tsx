/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { ChangeEvent, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./formStyles.scss";
import TextField from "@mui/material/TextField";
import { Button, InputBase } from "@mui/material";

const PropertyForm = () => {
  // State to store the selected category
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [pets, setPets] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [owner, setOwner] = useState("");
  const [images, setImages] = useState<string[]>([]);

  // Event handler for category select change
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  // Event handler for pets select change
  const handleChangePets = (event: SelectChangeEvent) => {
    setPets(event.target.value as string);
  };

  // Event handler for images select change
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const imageArray: string[] = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages(imageArray);
    }
  };

  // handle upload
  const handleUpload = () => {
    // Implement the logic to handle image upload
    // Access the selected images using the 'images' state array
    console.log(images);
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
              {/* Pets */}
              <div className="maintype">
                <div className="type">
                  <h3>Pets</h3>
                </div>
                <div className="ml-5 type__info">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Pets</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={pets}
                      label="pets"
                      onChange={handleChangePets}
                      className="propertyform__input"
                    >
                      {/* Menu items for category options */}
                      <MenuItem value={"Yes"}>Yes</MenuItem>
                      <MenuItem value={"No"}>No</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              {/* end Pets */}
              {/* Description */}
              <div className="maintype">
                <div className="type">
                  <h3>Description</h3>
                </div>
                <div className="ml-5 type__info">
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </FormControl>
                </div>
              </div>
              {/*End Description  */}
              {/* Price */}
              <div className="maintype">
                <div className="type">
                  <h3>Price</h3>
                </div>
                <div className="ml-5 type__info">
                  <FormControl fullWidth>
                    <TextField
                      id="standard-disabled"
                      label="Price"
                      variant="standard"
                      placeholder="Price"
                      type="number"
                      inputProps={{ min: "0" }}
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </FormControl>
                </div>
              </div>
              {/*End Price */}
              {/* Owner */}
              <div className="maintype">
                <div className="type">
                  <h3>Owner</h3>
                </div>
                <div className="ml-5 type__info">
                  <FormControl fullWidth>
                    <TextField
                      id="standard-disabled"
                      label="Owner Name"
                      variant="standard"
                      placeholder="owner name"
                      type="text"
                      value={owner}
                      onChange={(e) => setOwner(e.target.value)}
                    />
                  </FormControl>
                </div>
              </div>
              {/*End Owner */}
              {/* Upload Images */}
              <div className="maintype">
                <div className="type">
                  <h3>Upload Images</h3>
                </div>
                <div className="ml-5 type__info">
                  <FormControl fullWidth>
                    <input
                      id="images"
                      type="file"
                      multiple
                      onChange={handleImageChange}
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                    <label htmlFor="images">
                      <Button variant="contained" component="span">
                        Select Images
                      </Button>
                    </label>
                    {images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        style={{
                          width: "200px",
                          height: "auto",
                          marginTop: "10px",
                        }}
                      />
                    ))}
                  </FormControl>
                  <Button
                    className="globalbuttonstyles mt-3"
                    onClick={handleUpload}
                    disabled={images.length === 0}
                  >
                    Upload
                  </Button>
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
