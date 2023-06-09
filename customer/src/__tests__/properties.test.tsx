import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import Properties from "../pages/Properties/Properties";
import PropertiesHeader from "../components/headers/PropertiesHeader/PropertiesHeader";

// property page test
describe("PropertyPage component", () => {
  test("should render the PropertyPage component", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Properties />
        </Provider>
      </MemoryRouter>
    );
  });
  test("should render property header", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <PropertiesHeader />
        </Provider>
      </MemoryRouter>
    );

    const title = screen.getByText(/Properties/i);
    // expect the elements to be in the document
    expect(title).toBeInTheDocument();
  });
});
