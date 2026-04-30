import type { ReactNode } from "react";

interface GradientButtonProps {
  href: string;
  variant: "midnight" | "accent";
  children: ReactNode;
  external?: boolean;
}

export default function GradientButton({ href, variant, children, external }: GradientButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200";

  const variantClasses = {
    midnight: "bg-midnight text-white hover:bg-midnight/90 shadow-lg hover:shadow-xl",
    accent: "bg-gradient-accent text-white hover:opacity-90 shadow-lg hover:shadow-xl",
  };

  const classes = `${baseClasses} ${variantClasses[variant]}`;

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
