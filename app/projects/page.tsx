import ProjectsSection from "@/components/ProjectsSection";

export const metadata = {
  title: "Projects | Frontend Developer Portfolio",
  description: "Explore my portfolio of frontend development projects",
};

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <ProjectsSection />
    </div>
  );
}
