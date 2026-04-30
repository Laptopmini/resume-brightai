import { BASE_PATH, withBasePath } from "../../src/lib/basePath";

describe("basePath", () => {
  describe("BASE_PATH", () => {
    it("is a string", () => {
      expect(typeof BASE_PATH).toBe("string");
    });

    it("defaults to /resume-brightai/", () => {
      expect(BASE_PATH).toBe("/resume-brightai/");
    });
  });

  describe("withBasePath", () => {
    const assumedBase = "/resume-brightai/";

    it("strips leading slash and joins with base", () => {
      expect(withBasePath("/profile.png")).toBe(`${assumedBase}profile.png`);
    });

    it("preserves path without leading slash", () => {
      expect(withBasePath("profile.png")).toBe(`${assumedBase}profile.png`);
    });

    it("returns base path when given empty string", () => {
      expect(withBasePath("")).toBe(assumedBase);
    });

    it("returns a string for any input", () => {
      expect(typeof withBasePath("anything")).toBe("string");
    });
  });
});
