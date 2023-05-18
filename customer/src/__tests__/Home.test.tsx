import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Home from "./../pages/Home/Home";
import SearchBar from "../components/search_bar/SearchBar";

describe("Home component", () => {
  test("should render the Home component", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Home />
        </Provider>
      </MemoryRouter>
    );

    const title = screen.getByText(/Find your Perfect home/i);
    // expect the elements to be in the document
    expect(title).toBeInTheDocument();
  });

  // test for search bar
  test("should render search bar", () => {
    render(<SearchBar />);
    const search = screen.getByPlaceholderText(/Search by location/i);
    const allProperties = screen.getByText(/Properties/i);
    const minPrice = screen.getByText(/Price/i);
    const forRentButton = screen.getByText(/For Rent/i);

    // expect the elements to be in the document
    expect(search).toBeInTheDocument();
    expect(allProperties).toBeInTheDocument();
    expect(minPrice).toBeInTheDocument();
    expect(forRentButton).toBeInTheDocument();
  });

  // test for become rental agent
  test("should render become rental agent banner", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <EstateAgent />
        </Provider>
      </MemoryRouter>
    );

    const title = screen.getByText(/Become a Rental Agent/i);
    const btn = screen.getByText(/Register Now/i);

    // expect the elements to be in the document
    expect(title).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  });
});
