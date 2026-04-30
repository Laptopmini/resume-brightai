import { BASE_PATH, withBasePath } from "../../src/lib/basePath";

describe("basePath", () => {
  describe("BASE_PATH", () => {
    it("is a string ending with /resume-brightai/", () => {
      expect(BASE_PATH).toBe("/resume-brightai/");
    });
  });

  describe("withBasePath", () => {
    it("strips leading slash and prepends BASE_PATH", () => {
      expect(withBasePath("/profile.png")).toBe("/resume-brightai/profile.png");
    });

    it("handles path without leading slash", () => {
      expect(withBasePath("profile.png")).toBe("/resume-brightai/profile.png");
    });

    it("returns BASE_PATH for empty string", () => {
      expect(withBasePath("")).toBe("/resume-brightai/");
    });
  });
});
