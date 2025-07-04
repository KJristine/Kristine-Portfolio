"use client";

import React, { useState } from "react";
import { FaCss3, FaFigma, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiCanva,
  SiExpo,
  SiFirebase,
  SiGit,
  SiGithub,
  SiIos,
  SiMongodb,
  SiMongoose,
  SiNextdotjs,
  SiVite,
} from "react-icons/si";
import Particles from "@/components/particles";
import { Spotlight } from "@/components/spotlight";
import { motion } from "framer-motion";

const aboutData = [
  {
    title: "Skills",
    info: [
      {
        title: "Web Development",
        icons: [FaHtml5, FaCss3, FaJs, FaReact, SiNextdotjs, SiVite],
      },
      {
        title: "Mobile Development",
        icons: [SiExpo, FaReact, SiAndroidstudio, SiIos],
      },
      {
        title: "UI/UX Design",
        icons: [FaFigma, SiCanva],
      },
      {
        title: "Database",
        icons: [SiFirebase, SiMongoose, SiMongodb],
      },
      {
        title: "Tools",
        icons: [SiGit, SiGithub],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Cavite State University - Main",
        stage: "2022 - Present",
      },
      {
        title: "Emilio Aguinaldo College - Cavite",
        stage: "2020 - 2022",
      },
      {
        title: "Immaculate Conception Academy",
        stage: "2016 - 2020",
      },
      {
        title: "Sunny Brooke Elementary School",
        stage: "2013 - 2016",
      },
      {
        title: "Potter&apos;s Hand Academy",
        stage: "2010 - 2013",
      },
    ],
  },
];

const About = () => {
  const [tab, setTab] = useState(0);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black to-zinc-900" />
      {/* Spotlight effect */}
      <Spotlight />
      {/* Particles */}
      <Particles
        className="absolute inset-0 z-0 animate-fade-in"
        quantity={350}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto">
        {/* Center everything in a single column on mobile, side by side on large screens */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 xl:gap-20">
          {/* Left: Heading and Description */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1
              className="mt-16 sm:mt-0 text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold text-white leading-tight mb-6 font-ruigslay"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
            >
              Hey! I&apos;m Kristine{" "}
              <span className="text-yellow-300">
                — still figuring things out
              </span>
              <span className="inline-block align-middle text-yellow-300 ml-2">
                😅
              </span>
            </motion.h1>
            <motion.p
              className="font-sora text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              I&apos;m kinda new to all this (well… technically I&apos;ve only
              been seriously messing with code this year) — websites, apps,
              techy stuff — and somehow, I&apos;ve already fallen headfirst into
              it. Most days, you&apos;ll find me googling weird errors, breaking
              things, fixing them (eventually), and doing my best to look like I
              know what I&apos;m doing.
              <br />
              <br />I build both websites and mobile apps — even if I still get
              stuck staring at my screen wondering why is this not working?! But
              hey, that&apos;s half the adventure, right? And nothing beats that
              little victory dance when something finally works… even if it cost
              me my sanity and five cups of coffee.
            </motion.p>
          </div>

          {/* Right: Tabs and Info */}
          <motion.div
            className="w-full lg:w-1/2 max-w-2xl"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.4, duration: 0.7, ease: "easeOut" }}
          >
            {/* Tabs */}
            <motion.div
              className="flex justify-center lg:justify-start gap-4 sm:gap-6 md:gap-8 mb-8 border-b border-white/10 pb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              {aboutData.map((item, i) => (
                <button
                  key={i}
                  className={`pb-2 px-1 text-sm sm:text-base font-semibold uppercase tracking-wide transition border-b-2 whitespace-nowrap ${
                    tab === i
                      ? "text-yellow-500 border-yellow-500"
                      : "text-white/70 border-transparent hover:text-yellow-400"
                  } font-ruigslay`}
                  onClick={() => setTab(i)}
                >
                  {item.title}
                </button>
              ))}
            </motion.div>

            {/* Tab Content - Prevent jumping by setting min-height */}
            <motion.div
              className="w-full transition-all duration-300 ease-in-out min-h-[400px] sm:min-h-[450px] md:min-h-[500px]"
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
            >
              {/* Show only big image on Achievements tab */}
              {aboutData[tab].title === "Achievements" ? (
                <div className="w-full h-[400px] sm:h-[450px] md:h-[500px]">
                  <img
                    src="/yses.jpg"
                    alt="Achievements"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              ) : (
                <div className="flex flex-col gap-6 w-full">
                  {aboutData[tab].info.map((item, i) => (
                    <motion.div
                      key={i}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-white/90">
                        <span className="font-medium text-base sm:text-lg font-ruigslay text-white">
                          {item.title}
                        </span>

                        {/* Stage (for education, etc.) */}
                        {"stage" in item && item.stage && (
                          <div className="flex items-center gap-2 text-sm sm:text-base">
                            <span className="hidden sm:inline text-white/50">
                              —
                            </span>
                            <span className="text-yellow-300 font-medium">
                              {item.stage.replace(/'/g, "&apos;")}
                            </span>
                          </div>
                        )}

                        {/* Icons (for skills) */}
                        {"icons" in item && item.icons && (
                          <div className="flex items-center gap-3 flex-wrap mt-2 sm:mt-0">
                            <span className="hidden sm:inline text-white/50">
                              —
                            </span>
                            <div className="flex gap-3 flex-wrap">
                              {item.icons.map((Icon, idx) => (
                                <Icon
                                  key={idx}
                                  className="text-xl sm:text-2xl text-white/80 transition-all duration-200 hover:scale-125 hover:text-yellow-400 cursor-pointer"
                                />
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
