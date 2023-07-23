import React from "react";
import PropertiesHeader from "../../components/headers/PropertiesHeader/PropertiesHeader";
import AllProperties from "../../components/All-Properties/AllProperties";

const Properties = () => {
  return (
    <div>
      <PropertiesHeader />
      <AllProperties itemsPerPage={12} />
    </div>
  );
};

export default Properties;
