import React, { ChangeEvent, FC, useState } from "react";
import "./propertyform.scss";

interface PropertyFormInput {
  category?: string;
  title?: string;
  description?: string;
  location?: string;
  price?: string;
  image?: string[];
}

const PropertyForm: FC = () => {
  const [input, setInput] = useState<PropertyFormInput>({});

  // handle the input change
  const handleChange = (
    e: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | HTMLInputElement
    >
  ) => {
    const { name, value, type, files }: any = e.target;
    if (type === "file") {
      const uploadedImages = Array.from(files || []).map((file: any) =>
        URL.createObjectURL(file)
      );
      setInput((prevInput) => ({
        ...prevInput,
        [name]: uploadedImages,
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    }
  };

  // handle the form submit
  const handleSubmit = () => {
    console.log(input);
  };

  return (
    <>
      {/* Column for the categories  */}
      <div className=" propertyform__main mb-2 ">
        <div className="container propertyform row mb-2">
          <div className="col-md-6">
            <h6>Categories</h6>
          </div>
          <div className="col-md-6">
            <select
              className="form-select"
              aria-label="Default select example"
              name="category"
              value={input.category || ""}
              onChange={handleChange}
            >
              <option selected>Category</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
      {/* Column for the Title  */}
      <div className=" propertyform__main mb-2 ">
        <div className="container propertyform row mb-2">
          <div className="col-md-6">
            <h6>Title</h6>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Property Title"
              name="title"
              value={input.title || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* Column for the Title  */}
      <div className=" propertyform__main mb-2 ">
        <div className="container propertyform row mb-2">
          <div className="col-md-6">
            <h6>Description</h6>
          </div>
          <div className="col-md-6">
            <textarea
              className="form-control"
              placeholder="Property Description"
              rows={3}
              maxLength={250}
              minLength={3}
              name="description"
              value={input.description || ""}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
      </div>
      {/* Column for the location  */}
      <div className=" propertyform__main mb-2 ">
        <div className="container propertyform row mb-2">
          <div className="col-md-6">
            <h6>Location</h6>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Property Location"
              name="location"
              value={input.location || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* Column for the price  */}
      <div className=" propertyform__main mb-2 ">
        <div className="container propertyform row mb-2">
          <div className="col-md-6">
            <h6>Price</h6>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="number"
              placeholder="Property Price"
              min={0}
              name="price"
              value={input.price || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* Column for the images  */}
      <div className=" propertyform__main mb-2 ">
        <div className="container propertyform row mb-2">
          <div className="col-md-6">
            <h6>Image</h6>
          </div>
          <div className="col-md-6">
            <input
              className="form-control mb-1"
              type="file"
              name="images"
              multiple
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* Column for the submit button  */}
      <div className=" propertyform__main mb-2 ">
        <div className="container propertyform row mb-2">
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <button onClick={handleSubmit} className="btn globalbuttonstyles">
              Publish Property
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyForm;
