import React from "react";
import CreatePropertyHeader from "../../components/headers/CreatePropertyHeader/CreatePropertyHeader";
import "./addProperty.scss";
import PropertyForm from "../../components/forms/PropertyForm";

const AddProperty = () => {
  return (
    <div className="">
      <CreatePropertyHeader />
      <div className="container add__property mt-5">
        <h3>Add New Property</h3>
      </div>
      <div className="container mt-5">
        <div className="row number__container">
          <div className="col-md-4">
            <div className="number  mb-3">
              <span>1</span>
            </div>
            <h5>Choose Listing</h5>
          </div>
          <div className="col-md-4">
            <div className="number mb-3">
              <span>2</span>
            </div>
            <h5>Add Information</h5>
          </div>
          <div className="col-md-4 ">
            <div className="number  mb-3">
              <span>3</span>
            </div>
            <h5>Publish</h5>
          </div>
          <hr className="mt-4  line" />
        </div>
      </div>
      <PropertyForm />
    </div>
  );
};

export default AddProperty;
