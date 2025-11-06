import { motion } from "motion/react";

const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  },

  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
  },

  keyword: {
    hidden: { opacity: 0, scale: 0.85, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: "backOut" },
    },
  },

  button: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  },

  pulse: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.6, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function HeroText() {
  return (
    <div className="z-10 mt-16 md:mt-32 text-center md:text-left px-6 md:px-0 max-w-4xl">
      <motion.div 
        className="flex flex-col space-y-5 c-space"
        variants={variants.container}
        initial="hidden"
        animate="visible"
      >

        {/* Top Badge */}
        <motion.div
          variants={variants.fadeUp}
          className="inline-flex items-center gap-2 w-fit mx-auto md:mx-0"
        >
          <motion.div
            className="relative w-2.5 h-2.5"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-md opacity-75"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
          </motion.div>
          <span className="text-xs mt-2 md:text-sm font-semibold text-neutral-300 tracking-widest uppercase">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Title */}
        <motion.div variants={variants.fadeUp}>
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight drop-shadow-lg"
            animate={{ opacity: [0.95, 1, 0.95] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Hi, I&apos;m <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">Sandesh</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl lg:text-3xl font-semibold text-neutral-200 drop-shadow-lg mt-3 leading-relaxed"
            animate={{ opacity: [0.9, 1, 0.9] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            AI-Powered Frontend Engineer | Crafting Intelligent, Scalable Web Experiences
          </motion.p>
        </motion.div>

        {/* Keywords Grid */}
        {/* Moved to separate Features section below hero */}

        {/* CTA */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-3 pt-2"
          variants={variants.container}
        >
          <motion.a
            href="#work"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-sm md:text-base shadow-lg hover:shadow-2xl transition-all hover:scale-105 active:scale-95"
            variants={variants.button}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>

          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-full border-2 border-white text-white font-bold text-sm md:text-base hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
            variants={variants.button}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

      </motion.div>
    </div>
  );
}
