import { render, screen } from "@testing-library/react";
import SkillsGrid from "@/components/SkillsGrid";

describe("SkillsGrid", () => {
  it("renders the skills grid section", () => {
    render(<SkillsGrid />);
    const grid = screen.getByTestId("skills-grid");
    expect(grid).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<SkillsGrid />);
    expect(screen.getByRole("heading", { name: "Top Skills" })).toBeInTheDocument();
  });

  it("renders all skill categories from resume content", () => {
    render(<SkillsGrid />);
    const headings = screen.getAllByRole("heading", { level: 3 });
    expect(headings.length).toBeGreaterThanOrEqual(1);
    const categoryTexts = headings.map((h) => h.textContent);
    expect(categoryTexts).toContain("Frontend & Web");
    expect(categoryTexts).toContain("AI & Machine Learning");
    expect(categoryTexts).toContain("Infrastructure & DevOps");
    expect(categoryTexts).toContain("Backend & Mobile");
  });

  it("renders skill items within each category", () => {
    render(<SkillsGrid />);
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("renders the correct number of category cards (4)", () => {
    render(<SkillsGrid />);
    const grid = screen.getByTestId("skills-grid");
    const cards = grid.querySelector("div");
    expect(cards).not.toBeNull();
    expect(cards?.children.length).toBe(4);
  });
});
