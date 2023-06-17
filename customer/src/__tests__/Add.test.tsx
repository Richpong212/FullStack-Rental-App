import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import AddProperty from "./../pages/Add-Property/AddProperty";

describe("AddProperty component", () => {
  test("should render the AddProperty component", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AddProperty />
        </Provider>
      </MemoryRouter>
    );
    const addProperty = screen.getByText(/Add Property/i);
    expect(addProperty).toBeInTheDocument();
  });
});
