import { motion } from "framer-motion";
import { navStick } from "@/lib/motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#ai-credit", label: "How it's built" },
];

export default function NavBar() {
  return (
    <motion.nav
      {...navStick}
      data-testid="nav-bar"
      className="sticky top-0 z-40 w-full bg-midnight-deep/80 backdrop-blur border-b border-white/5"
    >
      <div className="max-w-content mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-tight text-paper">
          Paul-Valentin Mini
        </a>
        <ul className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="text-paper-muted hover:text-paper text-sm font-medium">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
