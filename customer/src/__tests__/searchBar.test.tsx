import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SearchBar from "../components/search_bar/SearchBar";
import { Provider } from "react-redux";
import store from "../redux/store";

// Tests for SearchBar component
describe("SearchBar component", () => {
  // Should render the SearchBar component
  test("should render the SearchBar component", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <SearchBar />
        </Provider>
      </MemoryRouter>
    );

    // Get elements from the DOM
    const search: any = screen.getByPlaceholderText("Search by location");
    const button = screen.getByRole("button", { name: /Search Now/i });

    // Simulate input change
    fireEvent.change(search, { target: { value: "New York" } });

    // Check if input value has changed
    expect(search.value).toBe("New York");

    // Simulate button click
    fireEvent.click(button);
  });
});
