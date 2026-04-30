import { motion } from "framer-motion";
import { cardHover } from "@/lib/motion";

interface Project {
  name: string;
  kind: string;
  period: string;
  summary: string;
  bullets: string[];
  stack: string[];
  githubUrl: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      {...cardHover}
      className="bg-midnight-card border border-white/5 rounded-2xl p-8"
      data-testid="project-card"
    >
      <h3 className="text-2xl font-bold text-paper">{project.name}</h3>
      <p className="text-paper-muted text-sm mt-1">
        {project.kind} · {project.period}
      </p>
      <p className="mt-4 text-paper-muted leading-relaxed">{project.summary}</p>
      <ul className="mt-6 space-y-3 list-disc list-outside pl-6 text-paper-muted">
        {project.bullets.map((b) => (
          <li key={b} className="font-light leading-relaxed">
            {b}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            data-testid="stack-pill"
            className="px-3 py-1 rounded-full text-xs bg-gradient-accent text-ink font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-6 inline-block text-cyan-blue hover:text-paper text-sm font-medium"
      >
        View on GitHub →
      </a>
    </motion.article>
  );
}
