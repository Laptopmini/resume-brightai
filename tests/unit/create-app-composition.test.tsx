import { render, screen } from "@testing-library/react";

import App from "../../src/App";

describe("src/App.tsx", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("renders NavBar at the top", () => {
    expect(screen.getByTestId("nav-bar")).toBeInTheDocument();
  });

  it("renders ProfileHeader", () => {
    expect(screen.getByTestId("hero-eyebrow")).toBeInTheDocument();
    expect(screen.getByTestId("hero-title")).toBeInTheDocument();
  });

  it("renders the About section with summary text", () => {
    const about = screen.getByTestId("about-summary");
    expect(about).toBeInTheDocument();
    expect(about.textContent).toBeTruthy();
    expect(about.textContent?.length).toBeGreaterThan(50);
  });

  it("renders exactly 5 section dividers between content sections", () => {
    const dividers = screen.getAllByTestId("section-divider");
    expect(dividers).toHaveLength(5);
  });

  it("renders SkillsGrid", () => {
    expect(screen.getByTestId("skills-grid")).toBeInTheDocument();
  });

  it("renders experience section with ExperienceCards from resume data", () => {
    const cards = screen.getAllByTestId("experience-card");
    expect(cards.length).toBe(5);
  });

  it("renders projects section with ProjectCards from resume data", () => {
    const cards = screen.getAllByTestId("project-card");
    expect(cards.length).toBe(1);
  });

  it("renders EducationList", () => {
    expect(screen.getByTestId("education-list")).toBeInTheDocument();
  });

  it("renders AICreditSection", () => {
    expect(screen.getByTestId("ai-credit")).toBeInTheDocument();
  });

  it("renders Footer at the bottom", () => {
    expect(screen.getByTestId("site-footer")).toBeInTheDocument();
  });

  it("renders components in the correct structural order", () => {
    const navBar = screen.getByTestId("nav-bar");
    const hero = screen.getByTestId("hero-eyebrow");
    const about = screen.getByTestId("about-summary");
    const dividers = screen.getAllByTestId("section-divider");
    const skills = screen.getByTestId("skills-grid");
    const expCards = screen.getAllByTestId("experience-card");
    const projCards = screen.getAllByTestId("project-card");
    const education = screen.getByTestId("education-list");
    const aiCredit = screen.getByTestId("ai-credit");
    const footer = screen.getByTestId("site-footer");

    // NavBar precedes ProfileHeader
    expect(navBar.compareDocumentPosition(hero) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();

    // About section precedes the first SectionDivider
    expect(
      about.compareDocumentPosition(dividers[0]) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    // SkillsGrid is between dividers 0 and 1
    expect(
      dividers[0].compareDocumentPosition(skills) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      skills.compareDocumentPosition(dividers[1]) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    // ExperienceCards are between dividers 1 and 2
    expect(
      dividers[1].compareDocumentPosition(expCards[0]) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      expCards[expCards.length - 1].compareDocumentPosition(dividers[2]) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    // ProjectCards are between dividers 2 and 3
    expect(
      dividers[2].compareDocumentPosition(projCards[0]) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      projCards[projCards.length - 1].compareDocumentPosition(dividers[3]) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    // EducationList is between dividers 3 and 4
    expect(
      dividers[3].compareDocumentPosition(education) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      education.compareDocumentPosition(dividers[4]) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();

    // AICreditSection is after divider 4 and before Footer
    expect(
      dividers[4].compareDocumentPosition(aiCredit) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      aiCredit.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });
});
