"use client";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          style={{ position: "relative", minHeight: "100vh" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      {/* Sliding overlays for transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname + "-transition-1"}
          role="status"
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-yellow-500"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          aria-hidden
        />
        <motion.div
          key={pathname + "-transition-2"}
          role="status"
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-yellow-300"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          aria-hidden
        />
        <motion.div
          key={pathname + "-transition-3"}
          role="status"
          className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-yellow-500"
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          aria-hidden
        />
      </AnimatePresence>
    </>
  );
}
