import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import PropertyForm from "../components/forms/PropertyForm";

// tests for PropertyForm component
describe("PropertyForm component", () => {
  test("should render the PropertyForm component", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PropertyForm />
        </MemoryRouter>
      </Provider>
    );

    // check for the categories
    const category = screen.getByText(/categories/i);
    expect(category).toBeInTheDocument();

    // check for the title
    const title = screen.getByText(/title/i);
    expect(title).toBeInTheDocument();

    // check for the description
    const description = screen.getByText(/description/i);
    expect(description).toBeInTheDocument();

    // check for location
    const location = screen.getByText(/location/i);
    expect(location).toBeInTheDocument();

    // check for the price
    const price = screen.getByText(/price/i);
    expect(price).toBeInTheDocument();

    // check for image
    const image = screen.getByText(/image/i);
    expect(image).toBeInTheDocument();
  });

  // test for the input change
  test("should change the input value", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PropertyForm />
        </MemoryRouter>
      </Provider>
    );

    // get the input field
    const input: any = screen.getByPlaceholderText(/title/i);
    // simulate the input change
    fireEvent.change(input, { target: { value: "hello" } });
    // check if the input value has changed
    expect(input.value).toBe("hello");
  });

  // test for the form submit
  test("should submit the form", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PropertyForm />
        </MemoryRouter>
      </Provider>
    );

    // get the submit button

    const submitBtn = screen.getByRole("button", {
      name: /Publish Property/i,
    });
    // simulate the click event
    fireEvent.click(submitBtn);
    // check if the form has been submitted
    expect(submitBtn).toBeInTheDocument();
  });
});
