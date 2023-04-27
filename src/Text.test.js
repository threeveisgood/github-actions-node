import Text from "./Text";
import { render, screen } from "@testing-library/react";

describe("<Bento />", () => {
  it("test Bento's modal feature", () => {
    render(<Text />);

    const bentoBoard = screen.getByText("Accordian");

    expect(bentoBoard).toBeInTheDocument();
  });
});
