"use client";

import { BsArrowRight } from "react-icons/bs";
import Particles from "@/components/particles";
import { Spotlight } from "@/components/spotlight";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="relative w-full min-h-screen h-screen overflow-hidden bg-black pt-5 sm:pt-0">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black to-zinc-900" />
      <Spotlight />
      <Particles
        className="absolute inset-0 z-0 animate-fade-in"
        quantity={350}
      />

      <div className="relative z-20 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-[700px]">
          {/* Heading */}
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8 sm:mb-12 text-white"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7 }}
          >
            Let's <span className="text-yellow-400">connect.</span>
          </motion.h2>
          {/* Form */}
          <motion.form
            action={process.env.NEXT_PUBLIC_FORMSPREE_URL}
            method="POST"
            className="flex flex-col gap-4 w-full"
            autoComplete="off"
            autoCapitalize="off"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
          >
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-x-6 w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-transparent border border-yellow-300/40 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-yellow-200/40 focus:outline-none focus:border-yellow-400 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="w-full bg-transparent border border-yellow-300/40 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-yellow-200/40 focus:outline-none focus:border-yellow-400 transition"
                required
              />
            </motion.div>
            <motion.input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full bg-transparent border border-yellow-300/40 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-yellow-200/40 focus:outline-none focus:border-yellow-400 transition"
              required
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            />
            <motion.textarea
              name="message"
              placeholder="Message..."
              className="w-full bg-transparent border border-yellow-300/40 rounded-lg px-4 sm:px-6 py-3 sm:py-4 text-white placeholder:text-yellow-200/40 focus:outline-none focus:border-yellow-400 transition min-h-[120px] sm:min-h-[150px]"
              required
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            />
            <motion.button
              type="submit"
              className="mt-2 sm:mt-4 self-start flex items-center gap-2 bg-transparent border border-yellow-300/60 text-yellow-200 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium transition hover:border-yellow-400 hover:text-yellow-400 focus:outline-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              Let's talk
              <BsArrowRight className="ml-2 text-lg sm:text-xl" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
