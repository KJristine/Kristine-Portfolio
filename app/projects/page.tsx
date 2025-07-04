"use client";

import React, { useState, useRef, useEffect } from "react";
import Particles from "@/components/particles";
import { Spotlight } from "@/components/spotlight";
import { motion } from "framer-motion";

const projects = [
  {
    id: 0,
    title: "CineEntrada",
    company: "Personal Project",
    period: "2025",
    description:
      "A digital platform for discovering, booking, and reviewing movies and cinema events. Features real-time seat selection, secure payments, and a vibrant film community.",
    highlights: [
      "Real-time seat selection and booking",
      "Secure online payments and e-ticketing",
      "User reviews, ratings, and social features",
      "Admin dashboard for cinema partners",
    ],
    techStack: [
      "React",
      "Vite",
      "Node.js",
      "MongoDB Atlas",
      "Clerk",
      "Stripe",
      "Tailwind CSS",
    ],
    links: {
      live: "https://cine-entrada.vercel.app/",
      github: "https://github.com/KJristine/CineEntrada",
    },
    image: "/CineEntrada.png",
  },
  {
    id: 1,
    title: "Keeply",
    company: "Personal Project",
    period: "2024",
    description:
      "A privacy-focused note-taking and productivity app. Organize tasks, notes, and reminders with robust encryption and a minimalist UI.",
    highlights: [
      "End-to-end encrypted notes and tasks",
      "Tagging, search, and smart organization",
      "Cross-device sync",
      "Minimalist UI/UX for distraction-free productivity",
    ],
    techStack: ["React Native", "Expo", "Firebase", "TypeScript"],
    links: {
      live: "https://tinyurl.com/keeply-demo",
      github: "https://example.com/",
    },
    image: "/Keeply.svg",
  },
  {
    id: 2,
    title: "SOSeco",
    company: "Future Ideator Quest 2025",
    period: "2025",
    description:
      "A Figma prototype empowering Indigenous communities to report socio-ecological issues. 2nd Runner-Up at Future Ideator Quest 2025.",
    highlights: [
      "Proposed a geo-tagged incident reporting and offline-first for remote areas",
      "Supports SDG goals: Life on Land & Climate Action",
      "2nd Runner-Up at Future Ideator Quest 2025 held at University of Philippines Los Baños",
      "Figma prototype only",
    ],
    techStack: ["Figma", "UX/UI Design", "Prototyping"],
    links: {
      live: "https://www.figma.com/proto/pG2kjQszKDhamZnOVxSZPq/SOSeco.?node-id=0-1&t=0LZFzJ37ItCflMVq-1",
      github: "#",
    },
    image: "/SOSeco.svg",
  },
];

const Projects = () => {
  const [selected, setSelected] = useState(0);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(
    undefined
  );

  // Ensure both containers always have the same height (the tallest)
  useEffect(() => {
    function syncHeight() {
      if (window.innerWidth >= 1024) {
        // Only sync height on large screens
        const left = leftRef.current?.offsetHeight || 0;
        const right = rightRef.current?.offsetHeight || 0;
        setContainerHeight(Math.max(left, right));
      } else {
        setContainerHeight(undefined); // Let containers have natural height on smaller screens
      }
    }

    syncHeight();
    window.addEventListener("resize", syncHeight);
    return () => window.removeEventListener("resize", syncHeight);
  }, [selected]);

  const current = projects[selected];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black to-zinc-900" />
      {/* Spotlight effect */}
      <Spotlight />
      {/* Particles */}
      <Particles
        className="absolute inset-0 z-0 animate-fade-in"
        quantity={350}
      />

      {/* Header with added top margin/padding */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-12 mt-20 sm:mt-10 lg:mt-0"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight font-ruigslay px-2">
          Welcome to my little corner of the internet where I try to make code
          behave 😅✨
        </h1>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12 xl:gap-16">
          {/* Left: Project Image + Tabs */}
          <motion.div
            className="w-full lg:w-1/3 flex flex-col"
            ref={leftRef}
            style={containerHeight ? { height: containerHeight } : {}}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 shadow-2xl flex flex-col items-center h-full">
              {/* Project Image */}
              <motion.div
                className="w-full aspect-video rounded-xl overflow-hidden mb-4 sm:mb-6 bg-gray-800 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.3, duration: 0.7 }}
              >
                <img
                  src={current.image}
                  alt={current.title}
                  className="object-cover w-full h-full"
                  style={{ minHeight: 180 }}
                />
              </motion.div>
              {/* Project Tabs */}
              <motion.div
                className="flex flex-row sm:flex-row lg:flex-col gap-2 sm:gap-3 lg:gap-4 w-full overflow-x-auto lg:overflow-x-visible"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                {projects.map((project, i) => (
                  <button
                    key={project.id}
                    className={`flex-shrink-0 sm:flex-1 lg:w-full text-left px-3 py-2 rounded-lg font-semibold transition border-2 min-w-fit ${
                      selected === i
                        ? "text-yellow-400 border-yellow-400 bg-white/10"
                        : "text-white/70 border-transparent hover:text-yellow-300 hover:bg-white/5"
                    }`}
                    onClick={() => setSelected(i)}
                  >
                    <span className="block text-sm sm:text-base font-ruigslay">
                      {project.title}
                    </span>
                    <span className="block text-xs text-white/50 font-sora">
                      {project.company}
                    </span>
                  </button>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Project Details */}
          <motion.div
            className="w-full lg:w-2/3 lg:max-w-2xl flex flex-col"
            ref={rightRef}
            style={containerHeight ? { height: containerHeight } : {}}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 shadow-2xl flex flex-col h-full">
              <motion.div
                className="mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.7 }}
              >
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 text-white font-ruigslay">
                  {current.title}
                </h2>
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-sora">
                  <span>{current.company}</span>
                  <span>•</span>
                  <span>{current.period}</span>
                </div>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-4 font-sora">
                  {current.description}
                </p>
              </motion.div>

              {/* Key Highlights */}
              <motion.div
                className="mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.7 }}
              >
                <h3 className="text-sm font-semibold mb-3 text-yellow-400 font-sora">
                  Key Achievements
                </h3>
                <ul className="flex flex-col gap-2">
                  {current.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 2 + idx * 0.1, duration: 0.5 }}
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-white/80 text-xs sm:text-sm leading-relaxed font-sora">
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                className="mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.7 }}
              >
                <h3 className="text-sm font-semibold mb-3 text-yellow-400 font-sora">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {current.techStack.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600/50 font-sora"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2.3 + idx * 0.05, duration: 0.4 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Action Links */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3 mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5, duration: 0.7 }}
              >
                {current.title === "SOSeco" ? (
                  <a
                    href={current.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-yellow-400 text-gray-900 px-4 py-2 rounded text-center text-sm font-medium hover:bg-yellow-500 transition-colors font-sora"
                  >
                    View Prototype
                  </a>
                ) : (
                  <>
                    <a
                      href={current.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-yellow-400 text-gray-900 px-4 py-2 rounded text-center text-sm font-medium hover:bg-yellow-500 transition-colors font-sora"
                    >
                      Live Demo
                    </a>
                    <a
                      href={current.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 text-gray-300 px-4 py-2 rounded text-center text-sm font-medium hover:bg-gray-600 transition-colors border border-gray-600 font-sora"
                    >
                      View Code
                    </a>
                  </>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
