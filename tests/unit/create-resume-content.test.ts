import {
  aiCredit,
  education,
  experience,
  hero,
  profileSummary,
  projects,
  skills,
} from "../../src/content/resume";

describe("resume content", () => {
  describe("hero", () => {
    it("has expected fields", () => {
      expect(hero.eyebrow).toBe("Senior Software Developer");
      expect(hero.title).toBe("Paul-Valentin Mini");
      expect(hero.tagline).toBe(
        "Building frontend platforms from concept to full-rate production. Even yours.",
      );
      expect(hero.cta).toBe("Get in touch");
      expect(hero.location).toBe("San Francisco, CA");
      expect(hero.email).toBe("paul@emini.com");
      expect(hero.phone).toBe("(415) 694-3616");
      expect(hero.linkedin).toBe("https://www.linkedin.com/in/pvmini");
      expect(hero.github).toBe("https://github.com/Laptopmini");
    });
  });

  describe("profileSummary", () => {
    it("is a non-empty string", () => {
      expect(typeof profileSummary).toBe("string");
      expect(profileSummary.length).toBeGreaterThan(50);
    });

    it("mentions key career details", () => {
      expect(profileSummary).toContain("Senior Software Developer");
      expect(profileSummary).toContain("React");
      expect(profileSummary).toContain("Next.js");
    });
  });

  describe("skills", () => {
    it("is an array with four categories", () => {
      expect(Array.isArray(skills)).toBe(true);
      expect(skills.length).toBe(4);
    });

    it("each skill entry has category and items", () => {
      skills.forEach((skill) => {
        expect(skill).toHaveProperty("category");
        expect(skill).toHaveProperty("items");
        expect(Array.isArray(skill.items)).toBe(true);
        expect(skill.items.length).toBeGreaterThan(0);
      });
    });

    it("covers Frontend, AI, Infrastructure, and Backend categories", () => {
      const categories = skills.map((s) => s.category);
      expect(categories).toContain("Frontend & Web");
      expect(categories).toContain("AI & Machine Learning");
      expect(categories).toContain("Infrastructure & DevOps");
      expect(categories).toContain("Backend & Mobile");
    });
  });

  describe("experience", () => {
    it("has five entries", () => {
      expect(Array.isArray(experience)).toBe(true);
      expect(experience.length).toBe(5);
    });

    it("each entry has company, location, role, period, bullets, and stack", () => {
      experience.forEach((exp) => {
        expect(exp).toHaveProperty("company");
        expect(exp).toHaveProperty("location");
        expect(exp).toHaveProperty("role");
        expect(exp).toHaveProperty("period");
        expect(exp).toHaveProperty("bullets");
        expect(exp).toHaveProperty("stack");
        expect(Array.isArray(exp.bullets)).toBe(true);
        expect(Array.isArray(exp.stack)).toBe(true);
        expect(exp.bullets.length).toBeGreaterThan(0);
        expect(exp.stack.length).toBeGreaterThan(0);
      });
    });

    it("includes SmartThings as first entry", () => {
      expect(experience[0].company).toBe("SmartThings, Inc.");
      expect(experience[0].role).toBe("Senior Software Developer");
    });

    it("includes Samsung Research America", () => {
      const sra = experience.find((e) => e.company === "Samsung Research America");
      expect(sra).toBeDefined();
      expect(sra!.role).toBe("Software Developer");
    });

    it("includes Samsung Strategy & Innovation Center", () => {
      const ssic = experience.find((e) => e.company === "Samsung Strategy & Innovation Center");
      expect(ssic).toBeDefined();
      expect(ssic!.role).toBe("iOS Developer");
    });

    it("includes Prism", () => {
      const prism = experience.find((e) => e.company === "Prism, Inc.");
      expect(prism).toBeDefined();
      expect(prism!.role).toBe("iOS & Backend Developer");
    });

    it("includes Imprivata", () => {
      const imp = experience.find((e) => e.company === "Imprivata");
      expect(imp).toBeDefined();
      expect(imp!.role).toBe("Android Developer (Capstone Partnership)");
    });
  });

  describe("projects", () => {
    it("is an array", () => {
      expect(Array.isArray(projects)).toBe(true);
    });

    it("includes ralph-node project", () => {
      const ralph = projects.find((p) => p.name === "Ralph-node");
      expect(ralph).toBeDefined();
      expect(ralph!.kind).toBe("Personal Project");
      expect(ralph!.githubUrl).toBe("https://github.com/Laptopmini/ralph-node");
      expect(ralph!.summary).toBeDefined();
      expect(Array.isArray(ralph!.bullets)).toBe(true);
      expect(Array.isArray(ralph!.stack)).toBe(true);
    });
  });

  describe("education", () => {
    it("is an array with entries", () => {
      expect(Array.isArray(education)).toBe(true);
      expect(education.length).toBeGreaterThanOrEqual(1);
    });

    it("contains UC Santa Cruz entry", () => {
      const ucsc = education.find((e) => e.title.includes("Computer Science"));
      expect(ucsc).toBeDefined();
      expect(ucsc!.detail).toContain("University of California, Santa Cruz");
    });

    it("contains Practical Prompt Engineering entry", () => {
      const ppe = education.find((e) => e.title.includes("Practical Prompt Engineering"));
      expect(ppe).toBeDefined();
      expect(ppe!.status).toBe("Completed Dec 2025");
    });

    it("contains AI Agents Fundamentals entry", () => {
      const aia = education.find((e) => e.title.includes("AI Agents Fundamentals"));
      expect(aia).toBeDefined();
      expect(aia!.status).toBe("In Progress");
    });
  });

  describe("aiCredit", () => {
    it("has expected fields", () => {
      expect(aiCredit.eyebrow).toBe("How this site was built");
      expect(aiCredit.title).toBe("Generated by ralph-node, an orchestrated AI pipeline.");
      expect(aiCredit.body).toBeDefined();
      expect(typeof aiCredit.body).toBe("string");
      expect(aiCredit.repoUrl).toBe("https://github.com/Laptopmini/ralph-node");
      expect(aiCredit.cta).toBe("View ralph-node on GitHub");
    });

    it("has four workflow steps", () => {
      expect(Array.isArray(aiCredit.steps)).toBe(true);
      expect(aiCredit.steps.length).toBe(4);
      expect(aiCredit.steps).toContain("Blueprint");
      expect(aiCredit.steps).toContain("PRD generation");
      expect(aiCredit.steps).toContain("Test backpressure");
      expect(aiCredit.steps).toContain("Ralph implementation loop");
    });
  });
});
