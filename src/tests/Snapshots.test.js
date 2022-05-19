import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Home";
import VariantOne from "../pages/VariantOne";
import VariantTwo from "../pages/VariantTwo";

describe("SNAPSHOT testing", () => {
  test("", () => {
    const { HomeComponent } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    expect(HomeComponent).toMatchSnapshot();
  });
  test("Variant 1...", () => {
    const { VariantOneComp } = render(<VariantOne />);
    expect(VariantOneComp).toMatchSnapshot();
  });

  test("Variant 2...", () => {
    const { VariantTwoComp } = render(
      <BrowserRouter>
        <VariantTwo />
      </BrowserRouter>
    );
    expect(VariantTwoComp).toMatchSnapshot();
  });
});
