import type React from "react";

interface GradientButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "midnight" | "accent";
  external?: boolean;
}

export default function GradientButton({ href, children, variant, external }: GradientButtonProps) {
  const gradientClass = variant === "accent" ? "bg-gradient-accent" : "bg-gradient-midnight";

  const externalProps = external ? { target: "_blank", rel: "noreferrer noopener" } : {};

  return (
    <a
      href={href}
      data-testid="gradient-button"
      className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-medium text-paper transition-transform hover:scale-[1.02] ${gradientClass}`}
      {...externalProps}
    >
      {children}
    </a>
  );
}
