import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ProjectCard";

const mockProject = {
  name: "Ralph-node",
  kind: "Personal Project",
  period: "April 2026",
  summary: "Built a fully custom, orchestrated AI development pipeline for Node.js.",
  bullets: ["Multi-Model Orchestration", "Test-Gated Pipeline"],
  stack: ["Claude", "OpenCode", "LM Studio"],
  githubUrl: "https://github.com/Laptopmini/ralph-node",
};

describe("ProjectCard", () => {
  it("renders the project card container", () => {
    render(<ProjectCard project={mockProject} />);
    const card = screen.getByTestId("project-card");
    expect(card).toBeInTheDocument();
  });

  it("renders the project name", () => {
    render(<ProjectCard project={mockProject} />);
    const card = screen.getByTestId("project-card");
    const heading = card.querySelector("h3");
    expect(heading).not.toBeNull();
    expect(heading?.textContent).toBe("Ralph-node");
  });

  it("renders the kind and period", () => {
    render(<ProjectCard project={mockProject} />);
    const card = screen.getByTestId("project-card");
    expect(card.textContent).toContain("Personal Project");
    expect(card.textContent).toContain("April 2026");
  });

  it("renders the summary", () => {
    render(<ProjectCard project={mockProject} />);
    const card = screen.getByTestId("project-card");
    expect(card.textContent).toContain("AI development pipeline for Node.js");
  });

  it("renders all bullets", () => {
    render(<ProjectCard project={mockProject} />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems).toHaveLength(2);
    expect(listItems[0]).toHaveTextContent("Multi-Model Orchestration");
    expect(listItems[1]).toHaveTextContent("Test-Gated Pipeline");
  });

  it("renders stack pills", () => {
    render(<ProjectCard project={mockProject} />);
    const pills = screen.getAllByTestId("stack-pill");
    expect(pills).toHaveLength(3);
    expect(pills[0]).toHaveTextContent("Claude");
    expect(pills[1]).toHaveTextContent("OpenCode");
    expect(pills[2]).toHaveTextContent("LM Studio");
  });

  it("renders the GitHub link with correct attributes", () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "https://github.com/Laptopmini/ralph-node");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer noopener");
  });

  it("renders empty bullets and empty stack without errors", () => {
    const emptyProject = {
      ...mockProject,
      bullets: [],
      stack: [],
    };
    render(<ProjectCard project={emptyProject} />);
    expect(screen.getByTestId("project-card")).toBeInTheDocument();
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);
    expect(screen.queryAllByTestId("stack-pill")).toHaveLength(0);
  });
});
