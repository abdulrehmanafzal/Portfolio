"use client";

import { Project } from "@/types";
import { motion } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-gray-800 dark:bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700 dark:border-gray-200 flex flex-col w-full h-full"
    >
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold mb-3 text-white dark:text-gray-900">
          {project.title}
        </h3>
        <p className="text-gray-300 dark:text-gray-700 mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-white dark:text-gray-900 mb-2">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-700 dark:bg-gray-100 text-gray-300 dark:text-gray-700 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-auto">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/50"
          >
            Live Demo
          </a>
         
        </div>
      </div>
    </motion.div>
  );
}
