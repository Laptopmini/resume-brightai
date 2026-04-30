import { motion } from "framer-motion";
import GradientButton from "@/components/GradientButton";
import { hero } from "@/content/resume";
import { withBasePath } from "@/lib/basePath";
import { heroReveal } from "@/lib/motion";

export default function ProfileHeader() {
  return (
    <motion.section
      id="top"
      initial={heroReveal.initial}
      animate={heroReveal.animate}
      transition={heroReveal.transition}
      className="max-w-content mx-auto px-6 pt-32 pb-24 grid md:grid-cols-[1fr_280px] gap-12 items-center"
    >
      <div>
        <p
          data-testid="hero-eyebrow"
          className="text-cyan-blue text-sm font-medium uppercase tracking-[0.2em]"
        >
          {hero.eyebrow}
        </p>
        <h1
          data-testid="hero-title"
          className="mt-4 text-5xl md:text-7xl font-extrabold tracking-tight text-paper"
        >
          {hero.title}
        </h1>
        <span className="block mt-2 h-1 w-32 bg-gradient-accent rounded-full" />
        <p data-testid="hero-tagline" className="mt-6 text-lg md:text-xl text-paper-muted max-w-xl">
          {hero.tagline}
        </p>
        <p className="mt-4 text-paper-muted text-sm">
          {hero.location} · {hero.email} · {hero.phone}
        </p>
        <div className="mt-8 flex gap-4">
          <GradientButton href={`mailto:${hero.email}`} variant="midnight">
            {hero.cta}
          </GradientButton>
          <GradientButton href={hero.linkedin} variant="accent" external>
            LinkedIn
          </GradientButton>
        </div>
      </div>
      <div>
        <img
          data-testid="hero-portrait"
          src={withBasePath("profile.png")}
          alt="Paul-Valentin Mini"
          className="w-[280px] h-[280px] object-cover rounded-full border border-white/10 shadow-2xl"
        />
      </div>
    </motion.section>
  );
}
