import { skills } from "@/content/resume";

export default function SkillsGrid() {
  return (
    <section data-testid="skills-grid" className="max-w-content mx-auto px-6 py-24 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-paper">Top Skills</h2>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        {skills.map((cat) => (
          <div
            key={cat.category}
            className="bg-midnight-card border border-white/5 rounded-2xl p-6"
          >
            <h3 className="text-cyan-blue text-sm font-medium uppercase tracking-[0.2em]">
              {cat.category}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs bg-white/5 text-paper-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
