import { render, screen } from "@testing-library/react";
import ExperienceCard from "@/components/ExperienceCard";

const mockEntry = {
  company: "SmartThings, Inc.",
  location: "San Francisco, CA",
  role: "Senior Software Developer",
  period: "January 2020 – Present",
  bullets: ["Frontend Architecture & Global Leadership", "AI Integration & Tooling"],
  stack: ["JavaScript", "TypeScript", "React"],
};

describe("ExperienceCard", () => {
  it("renders the experience card container", () => {
    render(<ExperienceCard entry={mockEntry} />);
    const card = screen.getByTestId("experience-card");
    expect(card).toBeInTheDocument();
  });

  it("renders the company name", () => {
    render(<ExperienceCard entry={mockEntry} />);
    const card = screen.getByTestId("experience-card");
    const heading = card.querySelector("h3");
    expect(heading).not.toBeNull();
    expect(heading?.textContent).toBe("SmartThings, Inc.");
  });

  it("renders the location", () => {
    render(<ExperienceCard entry={mockEntry} />);
    const card = screen.getByTestId("experience-card");
    expect(card.textContent).toContain("San Francisco, CA");
  });

  it("renders the role and period", () => {
    render(<ExperienceCard entry={mockEntry} />);
    const card = screen.getByTestId("experience-card");
    expect(card.textContent).toContain("Senior Software Developer");
    expect(card.textContent).toContain("January 2020 – Present");
  });

  it("renders all bullets", () => {
    render(<ExperienceCard entry={mockEntry} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveTextContent("Frontend Architecture & Global Leadership");
    expect(listItems[1]).toHaveTextContent("AI Integration & Tooling");
  });

  it("renders stack pills", () => {
    render(<ExperienceCard entry={mockEntry} />);
    const pills = screen.getAllByTestId("stack-pill");
    expect(pills).toHaveLength(3);
    expect(pills[0]).toHaveTextContent("JavaScript");
    expect(pills[1]).toHaveTextContent("TypeScript");
    expect(pills[2]).toHaveTextContent("React");
  });

  it("renders empty bullets and empty stack without errors", () => {
    const emptyEntry = {
      ...mockEntry,
      bullets: [],
      stack: [],
    };
    render(<ExperienceCard entry={emptyEntry} />);
    expect(screen.getByTestId("experience-card")).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
    expect(screen.queryAllByTestId("stack-pill")).toHaveLength(0);
  });
});
