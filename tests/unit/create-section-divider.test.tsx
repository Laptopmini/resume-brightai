import { render, screen } from "@testing-library/react";
import SectionDivider from "@/components/SectionDivider";

describe("SectionDivider", () => {
  it("renders a div with data-testid section-divider", () => {
    render(<SectionDivider />);
    const el = screen.getByTestId("section-divider");
    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe("DIV");
  });

  it("has the required layout classes", () => {
    render(<SectionDivider />);
    const el = screen.getByTestId("section-divider");
    expect(el).toHaveClass("h-px");
    expect(el).toHaveClass("w-full");
    expect(el).toHaveClass("bg-gradient-accent");
    expect(el).toHaveClass("opacity-60");
  });

  it("has no children (self-closing element)", () => {
    render(<SectionDivider />);
    expect(screen.getByTestId("section-divider")).toBeEmptyDOMElement();
  });
});
