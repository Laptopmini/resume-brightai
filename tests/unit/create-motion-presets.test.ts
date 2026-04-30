import { cardHover, gradientShimmer, heroReveal, navStick } from "../../src/lib/motion";

describe("motion presets", () => {
  it("exports heroReveal with opacity and y animation", () => {
    expect(heroReveal).toBeDefined();
    expect(heroReveal.initial).toEqual({ opacity: 0, y: 24 });
    expect(heroReveal.animate).toEqual({ opacity: 1, y: 0 });
    expect(heroReveal.transition).toBeDefined();
    expect(heroReveal.transition.duration).toBe(0.7);
    expect(heroReveal.transition.ease).toEqual([0.16, 1, 0.3, 1]);
  });

  it("exports cardHover with spring transition", () => {
    expect(cardHover).toBeDefined();
    expect(cardHover.whileHover).toBeDefined();
    expect(cardHover.whileHover.y).toBe(-4);
    expect(cardHover.whileHover.transition.type).toBe("spring");
    expect(cardHover.whileHover.transition.stiffness).toBe(280);
    expect(cardHover.whileHover.transition.damping).toBe(22);
  });

  it("exports navStick with spring transition", () => {
    expect(navStick).toBeDefined();
    expect(navStick.initial).toEqual({ y: -64 });
    expect(navStick.animate).toEqual({ y: 0 });
    expect(navStick.transition.type).toBe("spring");
    expect(navStick.transition.stiffness).toBe(220);
    expect(navStick.transition.damping).toBe(26);
  });

  it("exports gradientShimmer with backgroundPosition animation", () => {
    expect(gradientShimmer).toBeDefined();
    expect(gradientShimmer.animate).toBeDefined();
    expect(gradientShimmer.animate.backgroundPosition).toEqual(["0% 50%", "100% 50%", "0% 50%"]);
    expect(gradientShimmer.transition.duration).toBe(8);
    expect(gradientShimmer.transition.repeat).toBe(Infinity);
    expect(gradientShimmer.transition.ease).toBe("linear");
  });

  it("all presets are frozen (as const)", () => {
    // Attempting to mutate a frozen object throws in strict mode
    expect(() => {
      (heroReveal as Record<string, unknown>).initial = {};
    }).toThrow();
  });
});
