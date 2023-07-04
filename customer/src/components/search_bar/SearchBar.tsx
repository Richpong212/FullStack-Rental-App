import React, { useEffect, useState } from "react";
import "./SearchBar.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Property {
  location: string;
}

const SearchBar: React.FC = () => {
  const [location, setLocation] = useState("");
  const [filteredProperties, setFilteredProperties]: any = useState<Property[]>(
    []
  );

  // get all properties from the redux store
  const properties = useSelector((state: any) => state.properties.properties);

  // navigate to the search results page
  const navigateSearch = useNavigate();

  useEffect(() => {
    if (location === "") {
      setFilteredProperties([]);
    } else {
      const filtered = properties.filter((property: Property) =>
        property.location.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredProperties(filtered);
    }
  }, [location, properties]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Navigate to the search results page with the filtered properties
    navigateSearch("/search", { state: filteredProperties });
  };

  return (
    <div className="">
      <div d-flex col-md-6>
        <button className="globalbuttonstyles">For Rent</button>
      </div>
      <div className="search__container container col-lg-6">
        <div className="row gap-3 ">
          <div className="col-md-8">
            <div className="input-group flex-nowrap">
              <span
                className="input-group-text input__icon"
                id="addon-wrapping"
              >
                <LocationOnIcon />
              </span>
              <input
                type="text"
                className="form-control search__input"
                placeholder="Search by location"
                aria-describedby="addon-wrapping"
                name="location"
                value={location}
                onChange={handleChange}
              />
            </div>
            <span>
              {filteredProperties.length > 0 && (
                <div className="search__results">
                  {filteredProperties.slice(0, 2).map((property: Property) => (
                    <div className="search__item mb-2" key={property.location}>
                      {property.location}
                    </div>
                  ))}
                </div>
              )}
            </span>
          </div>

          <div className="col-md-3">
            <span>
              <button
                onClick={handleSubmit}
                className="btn search__now globalbuttonstyles"
              >
                Search Now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
