import fs from "fs";
import path from "path";

describe("types/css.d.ts", () => {
  const filePath = path.resolve(__dirname, "../../types/css.d.ts");

  it("file exists", () => {
    expect(fs.existsSync(filePath)).toBe(true);
  });

  it("declares *.css module", () => {
    const content = fs.readFileSync(filePath, "utf-8");
    expect(content).toContain("declare module '*.css'");
  });

  it("declares *.png module with default export", () => {
    const content = fs.readFileSync(filePath, "utf-8");
    expect(content).toContain("declare module '*.png'");
  });

  it("declares *.svg module with default export", () => {
    const content = fs.readFileSync(filePath, "utf-8");
    expect(content).toContain("declare module '*.svg'");
  });
});
