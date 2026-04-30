import { render, screen } from "@testing-library/react";
import GradientButton from "@/components/GradientButton";

describe("GradientButton", () => {
  it("renders an anchor with data-testid gradient-button", () => {
    render(<GradientButton href="/test">Click me</GradientButton>);
    const el = screen.getByTestId("gradient-button");
    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe("A");
  });

  it("renders children as text content", () => {
    render(<GradientButton href="/test">Click me</GradientButton>);
    expect(screen.getByTestId("gradient-button")).toHaveTextContent("Click me");
  });

  it("applies base layout classes", () => {
    render(<GradientButton href="/test">Click</GradientButton>);
    const el = screen.getByTestId("gradient-button");
    expect(el).toHaveClass("inline-flex");
    expect(el).toHaveClass("rounded-full");
    expect(el).toHaveClass("text-paper");
  });

  it("uses bg-gradient-midnight by default", () => {
    render(<GradientButton href="/test">Click</GradientButton>);
    expect(screen.getByTestId("gradient-button")).toHaveClass("bg-gradient-midnight");
  });

  it("uses bg-gradient-accent when variant is accent", () => {
    render(
      <GradientButton href="/test" variant="accent">
        Click
      </GradientButton>,
    );
    const el = screen.getByTestId("gradient-button");
    expect(el).toHaveClass("bg-gradient-accent");
    expect(el).not.toHaveClass("bg-gradient-midnight");
  });

  it("uses bg-gradient-midnight when variant is midnight", () => {
    render(
      <GradientButton href="/test" variant="midnight">
        Click
      </GradientButton>,
    );
    expect(screen.getByTestId("gradient-button")).toHaveClass("bg-gradient-midnight");
  });

  it("sets target and rel when external", () => {
    render(
      <GradientButton href="/test" external>
        Click
      </GradientButton>,
    );
    const el = screen.getByTestId("gradient-button");
    expect(el).toHaveAttribute("target", "_blank");
    expect(el).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("does not set target or rel when not external", () => {
    render(<GradientButton href="/test">Click</GradientButton>);
    const el = screen.getByTestId("gradient-button");
    expect(el).not.toHaveAttribute("target");
    expect(el).not.toHaveAttribute("rel");
  });

  it("passes href to the anchor element", () => {
    render(<GradientButton href="https://example.com">Click</GradientButton>);
    expect(screen.getByTestId("gradient-button")).toHaveAttribute("href", "https://example.com");
  });
});
