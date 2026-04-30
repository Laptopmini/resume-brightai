import { motion } from "framer-motion";
import { cardHover } from "@/lib/motion";

interface ExperienceEntry {
  company: string;
  location: string;
  role: string;
  period: string;
  bullets: string[];
  stack: string[];
}

export default function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <motion.article
      {...cardHover}
      className="bg-midnight-card border border-white/5 rounded-2xl p-8"
      data-testid="experience-card"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-paper">{entry.company}</h3>
        <p className="text-paper-muted text-sm">{entry.location}</p>
      </div>
      <p className="mt-2 text-cyan-blue text-sm font-medium">
        {entry.role} · {entry.period}
      </p>
      <ul className="mt-6 space-y-3 list-disc list-outside pl-6 text-paper-muted">
        {entry.bullets.map((b) => (
          <li key={b} className="font-light leading-relaxed">
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {entry.stack.map((tech) => (
          <span
            key={tech}
            data-testid="stack-pill"
            className="px-3 py-1 rounded-full text-xs bg-gradient-accent text-ink font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
