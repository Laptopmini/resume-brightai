import AICreditSection from "@/components/AICreditSection";
import EducationList from "@/components/EducationList";
import ExperienceCard from "@/components/ExperienceCard";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import ProfileHeader from "@/components/ProfileHeader";
import ProjectCard from "@/components/ProjectCard";
import SectionDivider from "@/components/SectionDivider";
import SkillsGrid from "@/components/SkillsGrid";
import { experience, projects } from "@/content/resume";

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <ProfileHeader />
        <SectionDivider />
        <SkillsGrid />
        <SectionDivider />
        <section
          id="experience"
          data-testid="experience-section"
          className="max-w-content mx-auto px-6 py-24 md:py-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-paper">Experience</h2>
          <div className="mt-10 space-y-6">
            {experience.map((entry) => (
              <ExperienceCard key={entry.company} entry={entry} />
            ))}
          </div>
        </section>
        <SectionDivider />
        <section
          id="projects"
          data-testid="projects-section"
          className="max-w-content mx-auto px-6 py-24 md:py-32"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-paper">Projects</h2>
          <div className="mt-10 space-y-6">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
        <SectionDivider />
        <EducationList />
        <SectionDivider />
        <AICreditSection />
      </main>
      <Footer />
    </>
  );
}
