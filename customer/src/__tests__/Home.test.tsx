import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Home from "./../pages/Home/Home";
import SearchBar from "../components/search_bar/SearchBar";
import EstateAgent from "../components/banner/EstateAgent";

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
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </MemoryRouter>
    );
    const search = screen.getByPlaceholderText(/Search by location/i);

    // expect the elements to be in the document
    expect(search).toBeInTheDocument();
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

    const btn = screen.getByText(/Register Now/i);

    // expect the elements to be in the document
    expect(btn).toBeInTheDocument();
  });
});
