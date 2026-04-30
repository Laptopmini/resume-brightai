export const heroReveal = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
} as const;

export const cardHover = {
  whileHover: { y: -4, transition: { type: "spring", stiffness: 280, damping: 22 } },
} as const;

export const navStick = {
  initial: { y: -64 },
  animate: { y: 0 },
  transition: { type: "spring", stiffness: 220, damping: 26 },
} as const;

export const gradientShimmer = {
  animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] as string[] },
  transition: { duration: 8, repeat: Infinity, ease: "linear" as const },
};
