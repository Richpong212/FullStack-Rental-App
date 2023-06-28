import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import AddProperty from "../pages/Add-Property/AddProperty";

describe("AddProperty component", () => {
  test("should render the AddProperty component", () => {
    // Render the AddProperty component with the required dependencies
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddProperty />
        </Provider>
      </MemoryRouter>
    );

    // Check if the text "Add Property btn" is present in the rendered component
    const addProperty = screen.getByText(/Add Property/i);
    expect(addProperty).toBeInTheDocument();

    //check if Choose Listing is present in the rendered component
    const chooseListing = screen.getByText(/Choose Listing/i);
    expect(chooseListing).toBeInTheDocument();

    //check if Add Information is present in the rendered component
    const addInformation = screen.getByText(/Add Information/i);
    expect(addInformation).toBeInTheDocument();
  });
});
