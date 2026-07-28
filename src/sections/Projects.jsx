import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 28, stiffness: 180, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 180, mass: 0.4 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 18);
    y.set(e.clientY + 18);
  };

  const [preview, setPreview] = useState(null);

  return (
    <section
      id="work"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
      <h2 className="text-heading pb-10">My Selected Projects</h2>
      <div className="space-y-3">
        {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview} />
        ))}
      </div>
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-52 w-72 rounded-xl border border-white/10 shadow-2xl shadow-black/50 pointer-events-none hidden md:block"
          src={preview}
          alt=""
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ x: springX, y: springY }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
      )}
    </section>
  );
};

export default Projects;
