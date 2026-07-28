import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { focusAreas } from "../constants";

export default function FocusAreas() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section className="c-space section-spacing" id="focus">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <h2 className="text-heading">Core Principles</h2>
        <p className="subtext mt-3 max-w-2xl">
          The standards that guide how I design, build, and ship software —
          until real client testimonials land here.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.08 + index * 0.06,
                ease: "easeOut",
              }}
              className="group rounded-2xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/5"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-xs font-bold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                  {area.title}
                </h3>
              </div>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
