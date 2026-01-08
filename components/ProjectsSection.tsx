"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-lg md:text-xl text-gray-300 dark:text-gray-700 max-w-3xl mx-auto">
          A collection of projects showcasing my skills and experience in frontend development
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
