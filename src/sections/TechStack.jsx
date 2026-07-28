import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const stacks = [
  {
    title: "Backend & Databases",
    accent: "from-emerald-400 to-cyan-400",
    glow: "group-hover:shadow-emerald-500/10",
    skills: [
      "Node.js",
      "Express",
      "Next.js (API Routes / Server Actions)",
      "PostgreSQL / Supabase",
      "REST APIs",
      "Zod (Schema Validation)",
    ],
  },
  {
    title: "Frontend & Client Architecture",
    accent: "from-cyan-400 to-blue-500",
    glow: "group-hover:shadow-cyan-500/10",
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS v4",
      "Zustand (State Management)",
      "GSAP",
    ],
  },
  {
    title: "Tools, DevOps & Cloud",
    accent: "from-blue-400 to-indigo-400",
    glow: "group-hover:shadow-blue-500/10",
    skills: [
      "Git & GitHub",
      "Vercel",
      "WebSockets",
      "Postman",
      "Linux / CLI",
    ],
  },
];

const TechStack = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.12,
  });

  return (
    <section id="tech-stack" className="c-space section-spacing">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-heading">Tech Stack</h2>
        <p className="subtext mt-3 max-w-2xl">
          Languages, frameworks, and tools that allow me to build robust and
          scalable applications from database to UI.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {stacks.map((stack, index) => (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.08,
                ease: "easeOut",
              }}
              className={`group relative rounded-2xl border border-black/10 bg-white/80 dark:border-white/10 dark:bg-slate-950/80 p-6 md:p-7 backdrop-blur-sm shadow-lg shadow-black/5 dark:shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-black/20 dark:hover:border-white/20 ${stack.glow} hover:shadow-xl`}
            >
              <div
                className={`mb-5 h-1 w-12 rounded-full bg-gradient-to-r ${stack.accent}`}
              />
              <h3
                className={`text-lg md:text-xl font-bold mb-5 bg-gradient-to-r ${stack.accent} bg-clip-text text-transparent`}
              >
                {stack.title}
              </h3>
              <ul className="space-y-2.5">
                {stack.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-start gap-2.5 text-sm md:text-base text-slate-700 dark:text-neutral-300"
                  >
                    <span
                      className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r ${stack.accent}`}
                    />
                    <span className="leading-relaxed">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;
