"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/skills";
import { experiences } from "@/lib/experience";

const skillCategories = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & Others",
  other: "Other",
};

export default function AboutSection() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="max-w-5xl mx-auto space-y-16">
      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="text-lg md:text-xl text-gray-300 dark:text-gray-700 max-w-3xl mx-auto leading-relaxed">
        I&apos;m a passionate frontend developer with a strong focus on creating beautiful, 
          user-friendly web experiences. With expertise in modern JavaScript frameworks 
          and a keen eye for design, I transform complex requirements into elegant solutions.
        </p>
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white dark:text-gray-900">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
            <div
              key={category}
              className="bg-gray-800 dark:bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-700 dark:border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400 dark:text-blue-600">
                {skillCategories[category as keyof typeof skillCategories]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 bg-blue-900/30 dark:bg-blue-50 text-blue-300 dark:text-blue-700 rounded-full text-sm font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white dark:text-gray-900">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 dark:bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-blue-400 dark:border-blue-600 border border-gray-700 dark:border-gray-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white dark:text-gray-900">
                    {exp.role}
                  </h3>
                  <p className="text-blue-400 dark:text-blue-600 font-medium">
                    {exp.company}
                  </p>
                </div>
                
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 dark:text-gray-700">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
