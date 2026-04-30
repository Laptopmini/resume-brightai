import { cardHover, gradientShimmer, heroReveal, navStick } from "../../src/lib/motion";

describe("motion presets", () => {
  it("heroReveal has correct shape", () => {
    expect(heroReveal).toEqual({
      initial: { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    });
  });

  it("cardHover has correct shape", () => {
    expect(cardHover).toEqual({
      whileHover: {
        y: -4,
        transition: { type: "spring", stiffness: 280, damping: 22 },
      },
    });
  });

  it("navStick has correct shape", () => {
    expect(navStick).toEqual({
      initial: { y: -64 },
      animate: { y: 0 },
      transition: { type: "spring", stiffness: 220, damping: 26 },
    });
  });

  it("gradientShimmer has correct shape", () => {
    expect(gradientShimmer).toEqual({
      animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
      transition: { duration: 8, repeat: Infinity, ease: "linear" },
    });
  });
});
