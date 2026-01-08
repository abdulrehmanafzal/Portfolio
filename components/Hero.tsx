"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-blue-50 dark:via-white dark:to-purple-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm border border-white/10 dark:border-gray-800/10"
        >
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-300 dark:text-gray-600">Available for opportunities</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-extrabold mb-6 leading-tight"
          >
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Frontend
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
              Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-200 dark:text-gray-800 mb-6 font-light"
          >
            Hi, I'm <span className="font-bold text-white dark:text-gray-900">Abdulrehman Afzal</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 dark:text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            I build fast, responsive, and modern web apps.
<br className="hidden md:block" />
Creating user experiences that people love.

          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <Link
            href="/projects"
            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
          <Link
            href="/contact"
            className="group px-10 py-5 bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm text-blue-400 dark:text-blue-600 border-2 border-blue-500/50 dark:border-blue-400/50 rounded-xl font-semibold hover:bg-white/10 dark:hover:bg-gray-900/10 transition-all duration-300 hover:scale-105 hover:border-blue-400 dark:hover:border-blue-500"
          >
            <span className="flex items-center justify-center gap-2">
              Get In Touch
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
          </Link>
        </motion.div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-12 text-gray-500 dark:text-gray-400"
        >
          <span className="text-sm font-medium">Tech Stack:</span>
          <div className="flex items-center gap-4">
            {["React", "Next.js", "TypeScript", "Tailwind"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
                className="px-4 py-2 bg-white/5 dark:bg-gray-900/5 backdrop-blur-sm border border-white/10 dark:border-gray-800/10 rounded-lg text-sm font-medium hover:bg-white/10 dark:hover:bg-gray-900/10 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-6 h-6 text-gray-400 dark:text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
