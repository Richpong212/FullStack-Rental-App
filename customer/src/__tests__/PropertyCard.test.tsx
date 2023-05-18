import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import PropertyCard from "../components/property-card/PropertyCard";

// property card test
describe("PropertyCard component", () => {
  test("should render the PropertyCard component", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PropertyCard />
        </Provider>
      </MemoryRouter>
    );
  });
});
