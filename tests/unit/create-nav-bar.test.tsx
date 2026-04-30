import { render, screen } from "@testing-library/react";
import NavBar from "@/components/NavBar";

jest.mock("framer-motion", () => {
  const React = require("react");
  return {
    motion: {
      nav: React.forwardRef((props: Record<string, unknown>, ref: unknown) => {
        const { children, initial, animate, transition, ...rest } = props;
        return React.createElement("nav", { ref, ...rest }, children);
      }),
    },
  };
});

describe("NavBar", () => {
  it("renders a nav with data-testid nav-bar", () => {
    render(<NavBar />);
    const nav = screen.getByTestId("nav-bar");
    expect(nav).toBeInTheDocument();
    expect(nav.tagName).toBe("NAV");
  });

  it("applies sticky layout classes to the nav", () => {
    render(<NavBar />);
    const nav = screen.getByTestId("nav-bar");
    expect(nav).toHaveClass("sticky");
    expect(nav).toHaveClass("top-0");
    expect(nav).toHaveClass("z-40");
  });

  it("renders the site title link pointing to #top", () => {
    render(<NavBar />);
    const titleLink = screen.getByText("Paul-Valentin Mini");
    expect(titleLink).toHaveAttribute("href", "#top");
    expect(titleLink.tagName).toBe("A");
  });

  it("renders all five section navigation links with correct labels and hrefs", () => {
    render(<NavBar />);
    const links = [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Education", href: "#education" },
      { label: "How it's built", href: "#ai-credit" },
    ];
    for (const { label, href } of links) {
      const link = screen.getByText(label);
      expect(link).toHaveAttribute("href", href);
      expect(link.tagName).toBe("A");
    }
  });
});
