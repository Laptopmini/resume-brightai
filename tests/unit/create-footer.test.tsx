import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe("Footer", () => {
  it("renders a footer with data-testid site-footer", () => {
    render(<Footer />);
    const footer = screen.getByTestId("site-footer");
    expect(footer).toBeInTheDocument();
    expect(footer.tagName).toBe("FOOTER");
  });

  it("renders copyright with name and location", () => {
    render(<Footer />);
    expect(screen.getByText(/Paul-Valentin Mini/)).toBeInTheDocument();
    expect(screen.getByText(/San Francisco, CA/)).toBeInTheDocument();
  });

  it("renders the email mailto link", () => {
    render(<Footer />);
    const emailLink = screen.getByText("Email");
    expect(emailLink).toHaveAttribute("href", "mailto:paul@emini.com");
    expect(emailLink.tagName).toBe("A");
  });

  it("renders the LinkedIn link with external attributes", () => {
    render(<Footer />);
    const linkedinLink = screen.getByText("LinkedIn");
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/pvmini");
    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("renders the GitHub link with external attributes", () => {
    render(<Footer />);
    const githubLink = screen.getByText("GitHub");
    expect(githubLink).toHaveAttribute("href", "https://github.com/Laptopmini");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("does not set external attributes on the mailto link", () => {
    render(<Footer />);
    const emailLink = screen.getByText("Email");
    expect(emailLink).not.toHaveAttribute("target");
    expect(emailLink).not.toHaveAttribute("rel");
  });
});
