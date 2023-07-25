import { render, screen, fireEvent } from "@testing-library/react";
import Loading from "../components/lottie-animations/Loading";

// check if the loading animation is displayed

describe("Loading", () => {
  it("should display the loading animation", () => {
    render(<Loading />);
    const loadingAnimation = screen.getByTestId("mock-lottie");
    expect(loadingAnimation).toBeInTheDocument();
  });
});
