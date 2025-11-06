import { motion } from "motion/react";
import { education } from "../constants";

const Education = () => {
  return (
    <section className="c-space section-spacing" id="education">
      <h2 className="text-heading">Education</h2>
      
      <div className="mt-12 space-y-8">
        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="group relative"
          >
            {/* Timeline connector */}
            <div className="absolute -left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-400 to-purple-500 hidden md:block" />
            
            {/* Timeline dot */}
            <div className="absolute -left-12 top-2 w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 border-4 border-neutral-900 hidden md:flex items-center justify-center shadow-lg shadow-cyan-400/50">
              <div className="w-2 h-2 bg-neutral-900 rounded-full" />
            </div>

            {/* Card */}
            <motion.div
              className="ml-0 md:ml-8 p-6 md:p-8 rounded-xl border border-white/10 bg-gradient-to-br from-neutral-900/80 via-neutral-850/80 to-black/80 hover:border-cyan-400/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/20"
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      {edu.degree}
                    </h3>
                    {edu.isCurrent && (
                      <motion.span
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-400/20 text-cyan-300 border border-cyan-400/50"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Current
                      </motion.span>
                    )}
                  </div>
                  
                  <p className="text-sm md:text-base text-neutral-300 mb-1">
                    {edu.institution}
                  </p>
                  
                  <p className="text-xs md:text-sm text-neutral-400 mb-3">
                    📍 {edu.location} • <span className="text-cyan-400">{edu.year}</span>
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2 mt-4 pt-4 border-t border-white/5">
                {edu.highlights.map((highlight, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
