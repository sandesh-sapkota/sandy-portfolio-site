/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  githubLink,
  image,
  tags,
  setPreview,
  isInternal,
  category,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const hasLiveDemo = Boolean(href) && !isInternal;
  const hasGithub = Boolean(githubLink);

  return (
    <>
      <motion.div
        className="flex-wrap items-center justify-between py-8 px-6 space-y-6 sm:flex sm:space-y-0 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-sm hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300 group"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        whileHover={{ y: -2 }}
      >
        <div className="flex-1 min-w-0">
          {category && (
            <span className="inline-flex mb-2 text-[11px] md:text-xs font-semibold tracking-wide uppercase text-cyan-300/90 border border-cyan-400/25 bg-cyan-500/10 px-2.5 py-1 rounded-md">
              {category}
            </span>
          )}
          <p className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
            {title}
          </p>
          <div className="flex gap-3 mt-3 flex-wrap">
            {tags.map((tag) => (
              <span
                key={tag.id}
                className="text-xs md:text-sm px-3 py-1 rounded-lg bg-white/5 text-cyan-300 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-colors"
              >
                {tag.name}
              </span>
            ))}
          </div>

          {/* Direct repo / demo links */}
          {(hasGithub || hasLiveDemo || isInternal) && (
            <div className="flex items-center gap-3 mt-4">
              {hasGithub && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 bg-white/5 text-neutral-300 hover:text-white hover:border-white/25 hover:bg-white/10 hover:shadow-[0_0_16px_rgba(34,211,238,0.15)] transition-all"
                  aria-label={`${title} GitHub repository`}
                  title="GitHub"
                >
                  <img
                    src="assets/logos/github.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                </a>
              )}
              {hasLiveDemo && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold text-cyan-300/90 hover:text-cyan-200 border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 rounded-lg hover:border-cyan-400/40 hover:bg-cyan-500/20 hover:shadow-[0_0_16px_rgba(34,211,238,0.2)] transition-all"
                >
                  Live Demo
                  <img src="assets/arrow-up.svg" className="w-3 h-3" alt="" />
                </a>
              )}
              {isInternal && (
                <span className="text-xs text-neutral-500 border border-white/10 px-2.5 py-1 rounded-lg">
                  Internal / Private
                </span>
              )}
            </div>
          )}
        </div>
        <motion.button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-2 px-6 py-2 rounded-xl cursor-pointer bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/40 text-cyan-300 font-semibold hover:border-cyan-300 transition-all"
          whileHover={{
            scale: 1.04,
            boxShadow: "0 0 20px rgba(34, 211, 238, 0.25)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          Explore
          <img src="assets/arrow-right.svg" className="w-4 h-4" alt="" />
        </motion.button>
      </motion.div>
      <AnimatePresence>
        {isHidden && (
          <ProjectDetails
            title={title}
            description={description}
            subDescription={subDescription}
            image={image}
            tags={tags}
            href={href}
            githubLink={githubLink}
            isInternal={isInternal}
            category={category}
            closeModal={() => setIsHidden(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
