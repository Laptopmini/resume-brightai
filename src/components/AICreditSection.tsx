import { motion } from "framer-motion";
import GradientButton from "@/components/GradientButton";
import { aiCredit } from "@/content/resume";
import { gradientShimmer } from "@/lib/motion";

export default function AICreditSection() {
  return (
    <section
      id="ai-credit"
      data-testid="ai-credit"
      className="relative max-w-content mx-auto px-6 py-24 md:py-32"
    >
      <motion.div
        className="h-1 w-full bg-gradient-spectrum bg-[length:200%_100%] rounded-full"
        animate={gradientShimmer.animate}
        transition={gradientShimmer.transition}
      />
      <p className="mt-10 text-cyan-blue text-sm font-medium uppercase tracking-[0.2em]">
        {aiCredit.eyebrow}
      </p>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-paper max-w-3xl">{aiCredit.title}</h2>
      <p className="mt-6 text-paper-muted leading-relaxed max-w-3xl">{aiCredit.body}</p>
      <ol className="mt-8 grid md:grid-cols-4 gap-4">
        {aiCredit.steps.map((s, i) => (
          <li key={s} className="bg-midnight-card border border-white/5 rounded-2xl p-6">
            <span className="text-cyan-blue font-medium">{String(i + 1).padStart(2, "0")}</span>
            <p className="mt-2 text-paper">{s}</p>
          </li>
        ))}
      </ol>
      <div className="mt-10">
        <GradientButton href={aiCredit.repoUrl} variant="midnight" external>
          {aiCredit.cta}
        </GradientButton>
      </div>
    </section>
  );
}
