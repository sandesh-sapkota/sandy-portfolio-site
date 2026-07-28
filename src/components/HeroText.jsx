import { motion } from "motion/react";

const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  },

  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },

  button: {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  },
};

export default function HeroText() {
  return (
    <div className="relative z-10 mt-4 md:mt-24 text-center md:text-left max-w-4xl mx-auto md:mx-0">
      <motion.div
        className="flex flex-col space-y-5"
        variants={variants.container}
        initial="hidden"
        animate="visible"
      >
        {/* Top Badge */}
        <motion.div
          variants={variants.fadeUp}
          className="inline-flex items-center gap-2 w-fit mx-auto md:mx-0 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm"
        >
          <motion.div
            className="relative w-2 h-2"
            animate={{
              scale: [1, 1.25, 1],
              opacity: [1, 0.55, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full" />
          </motion.div>
          <span className="text-xs md:text-sm font-semibold text-neutral-300 tracking-widest uppercase">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Title */}
        <motion.div variants={variants.fadeUp}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Sandesh
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mt-3 md:mt-4 tracking-tight">
            Full-Stack Software Engineer
          </p>

          <p className="text-sm md:text-base lg:text-lg font-medium text-neutral-400 mt-2 md:mt-3 leading-relaxed max-w-2xl mx-auto md:mx-0">
            Designing and building scalable full-stack applications, robust
            APIs, and modern web systems from database to UI.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 justify-center md:justify-start"
          variants={variants.container}
        >
          <motion.a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="px-7 py-2.5 md:py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm md:text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow"
            variants={variants.button}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            View Work
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="px-7 py-2.5 md:py-3 rounded-xl border border-white/15 bg-white/5 text-white font-semibold text-sm md:text-base backdrop-blur-sm hover:bg-white/10 hover:border-white/25 transition-colors"
            variants={variants.button}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.a>

          <motion.a
            href="/assets/Mongo_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-2.5 md:py-3 rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 font-semibold text-sm md:text-base hover:bg-cyan-500/20 hover:border-cyan-400/50 hover:text-cyan-200 transition-colors inline-flex items-center justify-center gap-2"
            variants={variants.button}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Resume / CV
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
