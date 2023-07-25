import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar/Navbar";
import { Provider } from "react-redux";
import store from "../../../redux/store";
import { MemoryRouter } from "react-router-dom";

describe("Navbar", () => {
  it("renders the navbar", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>
    );

    // check for home link
    const homeElement = screen.getByText(/home/i);

    // check for properties link
    const propertiesElement = screen.getByText(/properties/i);
    // check for contact link
    const contactElement = screen.getByText(/contact/i);

    // expect element to have attribute
    expect(homeElement).toHaveAttribute("href", "/");
    expect(propertiesElement).toHaveAttribute("href", "/properties");
    expect(contactElement).toHaveAttribute("href", "/contact");
  });
});
