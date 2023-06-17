import React from "react";
import Checkbox from "@mui/material/Checkbox";

const Amenities = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div className="d-flex gap-2 mt-2">
      <div
        style={{
          height: "25px",
          width: "25px",
          backgroundColor: "#FFF7EE",
          color: "#FF8A00",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #FF8A00",
        }}
      >
        <span>√</span>
      </div>
      <span>Bathroom</span>
    </div>
  );
};

export default Amenities;
