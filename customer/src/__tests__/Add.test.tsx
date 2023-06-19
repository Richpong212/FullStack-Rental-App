import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import AddProperty from "./../pages/Add-Property/AddProperty";

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

    //check if Publish is present in the rendered component
    const publish = screen.getByText(/Publish/i);
    expect(publish).toBeInTheDocument();
  });

  test("should update input values when user types", () => {
    // Render the AddProperty component with the required dependencies
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddProperty />
        </Provider>
      </MemoryRouter>
    );

    // Get the input element for the "House Name" field
    const input = screen.getByPlaceholderText(/title/i) as HTMLInputElement;

    // Simulate a change event by typing into the input field
    fireEvent.change(input, { target: { value: "title" } });

    // Check if the input value has been updated correctly
    expect(input.value).toBe("title");
  });

  test("should display validation error if required fields are empty", () => {
    // Render the AddProperty component with the required dependencies
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddProperty />
        </Provider>
      </MemoryRouter>
    );
  });

  // Add more tests for other functionality and UI elements...
});
