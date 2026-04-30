import fs from "node:fs";
import path from "node:path";

describe("types/css.d.ts", () => {
  const cssTypesPath = path.resolve(__dirname, "../../types/css.d.ts");

  it("file exists", () => {
    expect(fs.existsSync(cssTypesPath)).toBe(true);
  });

  it("declares module *.css", () => {
    const content = fs.readFileSync(cssTypesPath, "utf-8");
    expect(content).toContain("declare module '*.css'");
  });

  it("declares module *.png", () => {
    const content = fs.readFileSync(cssTypesPath, "utf-8");
    expect(content).toContain("declare module '*.png'");
  });

  it("declares module *.svg", () => {
    const content = fs.readFileSync(cssTypesPath, "utf-8");
    expect(content).toContain("declare module '*.svg'");
  });
});
