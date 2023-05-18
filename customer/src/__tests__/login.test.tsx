import { render, screen, fireEvent } from "@testing-library/react";
import LoginField from "../components/registration/LoginField";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("LoginField component", () => {
  // render the LoginField component
  test("should render the LoginField component", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <LoginField />
        </Provider>
      </MemoryRouter>
    );
    // get elements from the DOM
    const email = screen.getByPlaceholderText(/email/i);
    const password = screen.getByPlaceholderText(/password/i);

    // expect the elements to be in the document
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});
