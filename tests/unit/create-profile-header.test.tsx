import { render, screen } from "@testing-library/react";
import ProfileHeader from "@/components/ProfileHeader";

describe("ProfileHeader", () => {
  it("renders the hero section with correct id", () => {
    const { container } = render(<ProfileHeader />);
    const section = container.querySelector("section");
    expect(section).not.toBeNull();
    expect(section?.id).toBe("top");
  });

  it("renders the eyebrow text", () => {
    render(<ProfileHeader />);
    const eyebrow = screen.getByTestId("hero-eyebrow");
    expect(eyebrow).toBeInTheDocument();
    expect(eyebrow).toHaveTextContent("Senior Software Developer");
  });

  it("renders the hero title", () => {
    render(<ProfileHeader />);
    const title = screen.getByTestId("hero-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Paul-Valentin Mini");
  });

  it("renders the hero tagline", () => {
    render(<ProfileHeader />);
    const tagline = screen.getByTestId("hero-tagline");
    expect(tagline).toBeInTheDocument();
    expect(tagline).toHaveTextContent("Building frontend platforms");
  });

  it("renders the contact info (location, email, phone)", () => {
    const { container } = render(<ProfileHeader />);
    const section = container.querySelector("section");
    expect(section?.textContent).toContain("San Francisco, CA");
    expect(section?.textContent).toContain("paul@emini.com");
    expect(section?.textContent).toContain("(415) 694-3616");
  });

  it("renders the portrait image with correct attributes", () => {
    render(<ProfileHeader />);
    const img = screen.getByTestId("hero-portrait");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "Paul-Valentin Mini");
    expect(img.getAttribute("src")).toContain("profile.png");
  });
});
