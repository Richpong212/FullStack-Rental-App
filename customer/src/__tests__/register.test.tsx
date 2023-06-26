import { render, screen, fireEvent } from "@testing-library/react";
import RegisterField from "./../components/registration/RegisterField";
import { MemoryRouter } from "react-router-dom";

// tests for RegisterField component

describe("RegisterField component", () => {
  //should render the RegisterField component
  test("should render the RegisterField component", () => {
    // mock the click event

    render(
      <MemoryRouter>
        <RegisterField />
      </MemoryRouter>
    );
    // get elements from the DOM
    const fullName = screen.getByPlaceholderText("full name");
    const email = screen.getByPlaceholderText("codegenitor@gmail.com");
    const phone = screen.getByPlaceholderText("2332094882");
    const password = screen.getByPlaceholderText("One@1234");
    const button = screen.getByRole("button", { name: /Register/i });

    // simulate user events

    // check if elements are in the DOM
    expect(fullName).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(phone).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
