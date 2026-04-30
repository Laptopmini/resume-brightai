import AICreditSection from "@/components/AICreditSection";
import EducationList from "@/components/EducationList";
import ExperienceCard from "@/components/ExperienceCard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ProfileHeader from "@/components/ProfileHeader";
import ProjectCard from "@/components/ProjectCard";
import SectionDivider from "@/components/SectionDivider";
import SkillsGrid from "@/components/SkillsGrid";
import { experience, profileSummary, projects } from "@/content/resume";

export default function App() {
  return (
    <div className="min-h-screen bg-midnight text-paper font-sans">
      <NavBar />
      <main>
        <ProfileHeader />
        <section id="about" className="max-w-content mx-auto px-6 py-24 md:py-32">
          <h2 className="text-3xl md:text-4xl font-bold text-paper">About</h2>
          <p
            data-testid="about-summary"
            className="mt-6 text-paper-muted leading-relaxed max-w-3xl"
          >
            {profileSummary}
          </p>
        </section>
        <SectionDivider />
        <SkillsGrid />
        <SectionDivider />
        <section id="experience" className="max-w-content mx-auto px-6 py-24 md:py-32">
          <h2 className="text-3xl md:text-4xl font-bold text-paper">Experience</h2>
          <div className="mt-10 grid gap-8">
            {experience.map((e) => (
              <ExperienceCard key={e.company} entry={e} />
            ))}
          </div>
        </section>
        <SectionDivider />
        <section id="projects" className="max-w-content mx-auto px-6 py-24 md:py-32">
          <h2 className="text-3xl md:text-4xl font-bold text-paper">Projects</h2>
          <div className="mt-10 grid gap-8">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>
        <SectionDivider />
        <EducationList />
        <SectionDivider />
        <AICreditSection />
      </main>
      <Footer />
    </div>
  );
}
