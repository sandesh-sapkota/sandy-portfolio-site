import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const variants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  },

  item: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },

  cardHover: {
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  },

  iconHover: {
    scale: 1.2,
    rotate: 12,
    transition: { duration: 0.4, ease: "easeOut" },
  },

  accentLine: (expanded) => ({
    width: expanded ? 48 : 0,
    transition: { duration: 0.4, ease: "easeOut" },
  }),
};

const features = [
  {
    text: "Secure",
    icon: "🔒",
    description: "Enterprise-grade security",
    color: "from-blue-400 to-cyan-400",
  },
  {
    text: "Modern",
    icon: "✨",
    description: "Latest technologies",
    color: "from-purple-400 to-pink-400",
  },
  {
    text: "Scalable",
    icon: "📈",
    description: "Built to grow",
    color: "from-pink-400 to-red-400",
  },
  {
    text: "AI-Driven",
    icon: "🧠",
    description: "Intelligent automation",
    color: "from-green-400 to-emerald-400",
  },
  {
    text: "Performance-Focused",
    icon: "⚡",
    description: "Optimized for speed, efficiency, and smooth interactions",
    color: "from-yellow-400 to-orange-400",
  },
  {
    text: "Maintainable Code",
    icon: "🛠️",
    description: "Clean architecture and best practices for long-term growth",
    color: "from-indigo-400 to-blue-400",
  },
];

export default function Features() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden c-space section-spacing"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        ref={ref}
        variants={variants.container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{ opacity, y: yOffset }}
      >
        {/* Section Header */}
        <motion.div
          variants={variants.item}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Cutting-Edge Development with AI
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
            Six core principles that guide every project
          </p>
          <p className="text-base md:text-lg text-neutral-400 max-w-3xl mx-auto mt-6 leading-relaxed">
            Crafting intelligent, secure, and scalable web solutions. Expert in React, Node.js, cloud architecture, and AI integration.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={variants.item}
              className="relative group"
              whileHover="hover"
            >
              {/* Gradient Border Background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`}
                initial={{ scale: 0.95 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              ></motion.div>

              {/* Card Container */}
              <motion.div
                className={`relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl border border-neutral-700 group-hover:border-neutral-500 p-8 transition-all duration-300 backdrop-blur-sm h-full flex flex-col`}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Icon */}
                <motion.div
                  className="text-5xl mb-4 origin-center"
                  whileHover={{ scale: 1.2, rotate: 12 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  {feature.icon}
                </motion.div>

                {/* Text */}
                <motion.h3
                  className={`text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${feature.color} mb-2`}
                  whileHover={{ letterSpacing: "0.05em" }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.text}
                </motion.h3>

                {/* Description */}
                <motion.p
                  className="text-sm md:text-base text-neutral-400 group-hover:text-neutral-300 transition-colors flex-grow"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {feature.description}
                </motion.p>

                {/* Bottom accent line */}
                <motion.div
                  className={`mt-6 h-1 bg-gradient-to-r ${feature.color} rounded-full origin-left`}
                  initial={{ width: 0 }}
                  whileHover={{ width: 48 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                ></motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
