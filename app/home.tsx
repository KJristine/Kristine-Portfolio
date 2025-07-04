import React from "react";
import Particles from "@/components/particles";
import { Spotlight } from "@/components/spotlight";
import SplineViewer from "@/components/spline";
import Typewriter from "@/components/typewriter";
import Button from "@/components/button";
import { Download } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-black px-2 sm:px-4 md:px-8 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black to-zinc-900" />
      {/* Spotlight effect */}
      <Spotlight />
      {/* Particles */}
      <Particles
        className="absolute inset-0 z-0 animate-fade-in"
        quantity={350}
      />

      <div className="relative z-10 w-full max-w-[99vw] sm:max-w-[95vw] md:max-w-[90vw] xl:max-w-7xl mx-auto flex flex-col 2xl:flex-row items-center 2xl:items-start gap-0 md:gap-8">
        {/* Left: Details */}
        <motion.div
          className="flex flex-col justify-center items-center 2xl:items-start w-full max-w-full 2xl:max-w-2xl pt-8 2xl:pt-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Heading */}
          <motion.h1
            className="font-ruigslay text-[clamp(1.5rem,7vw,6rem)] font-bold text-white uppercase leading-tight text-center 2xl:text-left whitespace-nowrap"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            HI, I&apos;M KJ COBRADO
          </motion.h1>
          {/* Subtitle */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-0 sm:gap-2 mb-4 mt-2 w-full justify-center 2xl:justify-start"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <span className="font-ruigslay text-[clamp(1rem,4vw,3rem)] font-bold text-white uppercase text-center 2xl:text-left whitespace-nowrap">
              AN ASPIRING
            </span>
            <span className="font-ruigslay text-[clamp(1rem,4vw,3rem)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 uppercase text-center 2xl:text-left whitespace-nowrap">
              <Typewriter
                words={[
                  "MOBILE APP DEVELOPER",
                  "WEB DEVELOPER",
                  "FRONTEND DEVELOPER",
                  "FULL STACK DEVELOPER",
                ]}
              />
            </span>
          </motion.div>
          {/* Description */}
          <motion.p
            className="font-sora text-xs xs:text-sm sm:text-base md:text-lg 2xl:text-xl text-white/80 max-w-2xl leading-relaxed mb-8 text-center 2xl:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
          >
            A passionate girly who specializes in transforming creative ideas
            into powerful, user-friendly web and mobile applications for
            seamless digital experiences that connect people and solve
            real-world problems.
          </motion.p>
          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mb-4 justify-center 2xl:justify-start"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <Link href="/projects">
              <Button className="bg-white text-black border-2 border-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white transition-all duration-300 px-6 py-2 text-base font-semibold uppercase tracking-wider">
                View My Works
              </Button>
            </Link>
            <a
              href="/projects"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="bg-white text-black border-2 border-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:text-white transition-all duration-300 px-6 py-2 text-base font-semibold uppercase tracking-wider"
                icon={<Download size={20} />}
              >
                Download CV
              </Button>
            </a>
          </motion.div>
        </motion.div>
        {/* Right: Spline Robot */}
        <div className="hidden 2xl:flex flex-1 justify-end items-center h-full pt-8">
          <div className="w-[220px] xs:w-[300px] sm:w-[350px] md:w-[400px] xl:w-[500px] 2xl:w-[600px] h-[220px] xs:h-[300px] sm:h-[350px] md:h-[400px] xl:h-[500px] 2xl:h-[600px]">
            <SplineViewer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
