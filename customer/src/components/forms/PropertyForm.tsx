import React, { ChangeEvent, FC, useEffect, useState } from "react";
import "./propertyform.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from "react-toastify";
import { createProperty } from "../../service/property.service";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import axios from "axios";
import app from "../../service/firebase";

interface PropertyFormInput {
  category?: string;
  title?: string;
  description?: string;
  location?: string;
  price?: string;
  images?: any[];
  owner?: string;
  area?: string;
  region?: string;
  phone?: string;
}

const PropertyForm: FC = () => {
  // get the user token  from the redux store
  const [cat, setCat] = useState([]);
  const token: string = useSelector(
    (state: RootState) => state.customer.data.token
  );

  // api url
  const url = process.env.REACT_APP_API + "/categories";

  // api call to get all the categories
  const getCategories: any = async () => {
    try {
      const response = await axios.get(url);
      setCat(response.data);
    } catch (error) {
      console.log(error);
      return []; // Return an empty array in case of an error
    }
  };

  // call the get categories function in the use effect
  useEffect(() => {
    getCategories();
  }, []);

  // decode the token to get the user id
  const decodedToken: any = jwt_decode(token);

  // get the user id from the decoded token
  const userId = decodedToken.user;

  const [input, setInput] = useState<PropertyFormInput>({ owner: userId });
  const [images, setImages] = useState<any>([]);

  // get the user info from the redux store
  const user: any = useSelector(
    (state: RootState) => state.customer.data.userData
  );

  // handle the input change
  const handleChange = async (
    e: ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | HTMLInputElement
    >
  ) => {
    const { name, value }: any = e.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  // handle the image change
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files }: any = e.target;
    if (files) {
      const selectedImages: File[] = Array.from(files);
      setImages(selectedImages);
    }
  };

  // handle the form submit
  // handle the form submit
  const handleSubmit = async () => {
    try {
      const downloadURLs: string[] = [];
      const storage = getStorage(app);

      // Upload each image and get the download URL
      for (const image of images) {
        const fileName = new Date().getTime() + image.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // handle state changes if needed
          },
          (error) => {
            // handle upload errors if needed
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              downloadURLs.push(downloadURL);

              // Check if all images have been uploaded
              if (downloadURLs.length === images.length) {
                const inputData: PropertyFormInput = {
                  ...input,
                  images: downloadURLs,
                };

                // Call the createProperty function with the updated input data
                createProperty(inputData, token)
                  .then((res: any) => {
                    toast.success(`${res.message}`, {
                      position: "bottom-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: false,
                      draggable: false,
                      progress: undefined,
                    });
                    // Reset the form
                    setInput({
                      owner: userId,
                    });
                    setImages([]);
                  })
                  .catch((error: any) => {
                    toast.error(`${error.response.data.errors}`, {
                      position: "bottom-center",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: false,
                      draggable: false,
                      progress: undefined,
                    });
                  });
              }
            });
          }
        );
      }
    } catch (error: any) {
      toast.error(`${error.response.data.errors}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  };

  return (
    <>
      {/* Column for the categories  */}
      <ToastContainer />
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
              {cat.map((category: any) => (
                <option value={category._id}>{category.name}</option>
              ))}
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
              value={input.description}
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
      {/* Column for the Owner  */}
      <div className=" propertyform__main mb-2 ">
        <div className="container propertyform row mb-2">
          <div className="col-md-6">
            <h6>Owner</h6>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder={user.fullName}
              name="owner"
              disabled
            />
          </div>
        </div>
      </div>
      {/* Column for the phonr  */}
      <div className=" propertyform__main mb-2 ">
        <div className="container propertyform row mb-2">
          <div className="col-md-6">
            <h6>Phone</h6>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="phone number"
              name="phone"
              value={input.phone || ""}
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
      {/* Column for the Area  */}
      <div className=" propertyform__main mb-2 ">
        <div className="container propertyform row mb-2">
          <div className="col-md-6">
            <h6>Area</h6>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Property Area"
              name="area"
              value={input.area || ""}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      {/* Column for the Region  */}
      <div className=" propertyform__main mb-2 ">
        <div className="container propertyform row mb-2">
          <div className="col-md-6">
            <h6>Region</h6>
          </div>
          <div className="col-md-6">
            <input
              className="form-control"
              type="text"
              placeholder="Property Region"
              name="region"
              value={input.region || ""}
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
              onChange={handleImageChange}
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
