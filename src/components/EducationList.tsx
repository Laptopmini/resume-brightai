import { education } from "@/content/resume";

export default function EducationList() {
  return (
    <section data-testid="education-list" className="max-w-content mx-auto px-6 py-24 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-paper">Education & Certifications</h2>
      <ul className="mt-10 space-y-4">
        {education.map((entry) => (
          <li
            key={entry.title}
            className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 bg-midnight-card border border-white/5 rounded-2xl p-6"
          >
            <span className="text-paper font-medium">{entry.title}</span>
            <span className="text-paper-muted text-sm">
              {entry.detail}
              {entry.status ? ` · ${entry.status}` : ""}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
