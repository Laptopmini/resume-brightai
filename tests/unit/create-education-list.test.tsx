import { render, screen } from "@testing-library/react";
import EducationList from "@/components/EducationList";

describe("EducationList", () => {
  it("renders the education list section", () => {
    render(<EducationList />);
    const list = screen.getByTestId("education-list");
    expect(list).toBeInTheDocument();
  });

  it("renders the section heading", () => {
    render(<EducationList />);
    expect(screen.getByRole("heading", { name: "Education & Certifications" })).toBeInTheDocument();
  });

  it("renders all education entries", () => {
    render(<EducationList />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBe(3);
  });

  it("renders the degree entry", () => {
    render(<EducationList />);
    expect(screen.getByText("B.A. Computer Science")).toBeInTheDocument();
    expect(screen.getByText("University of California, Santa Cruz (UCSC)")).toBeInTheDocument();
  });

  it("renders the completed certification with status", () => {
    render(<EducationList />);
    expect(screen.getByText("Practical Prompt Engineering")).toBeInTheDocument();
    expect(screen.getByText(/Completed Dec 2025/)).toBeInTheDocument();
  });

  it("renders the in-progress certification with status", () => {
    render(<EducationList />);
    expect(screen.getByText("AI Agents Fundamentals, v2")).toBeInTheDocument();
    expect(screen.getByText(/In Progress/)).toBeInTheDocument();
  });

  it("does not render status text for entries without status", () => {
    render(<EducationList />);
    const firstItem = screen.getAllByRole("listitem")[0];
    expect(firstItem.textContent).not.toContain("Completed");
    expect(firstItem.textContent).not.toContain("In Progress");
  });
});
