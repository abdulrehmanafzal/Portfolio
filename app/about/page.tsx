import AboutSection from "@/components/AboutSection";

export const metadata = {
  title: "About | Frontend Developer Portfolio",
  description: "Learn about my skills, experience, and tools I use as a frontend developer",
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <AboutSection />
    </div>
  );
}
