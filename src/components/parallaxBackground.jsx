import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

/**
 * Premium 3D hero atmosphere.
 * Uses CSS `.dark` for theme so light-mode grids/glows stay reliably visible.
 */
const ParallaxBackground = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { damping: 42, stiffness: 85 });

  const floorY = useTransform(progress, [0, 0.45], ["0%", "10%"]);
  const midY = useTransform(progress, [0, 0.45], ["0%", "6%"]);
  const farY = useTransform(progress, [0, 0.45], ["0%", "3%"]);
  const orbX = useTransform(progress, [0, 0.45], ["0%", "-4%"]);

  const dust = useMemo(
    () =>
      Array.from({ length: isMobile ? 10 : 22 }, (_, i) => ({
        id: i,
        left: `${5 + ((i * 19) % 90)}%`,
        top: `${8 + ((i * 27) % 72)}%`,
        size: 2 + (i % 3),
        delay: (i % 7) * 0.4,
        duration: 5 + (i % 5) * 1.1,
      })),
    [isMobile]
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 h-full w-full overflow-hidden"
      aria-hidden="true"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#e8f0f8] transition-colors duration-300 dark:bg-[#020617]" />

      {/* Color wash */}
      <motion.div
        className="absolute inset-0"
        style={{ y: farY }}
      >
        <div
          className="absolute inset-0 opacity-100 dark:opacity-100"
          style={{
            background: `
              radial-gradient(ellipse 90% 70% at 70% 35%, rgba(6, 182, 212, 0.35) 0%, transparent 55%),
              radial-gradient(ellipse 70% 60% at 20% 55%, rgba(37, 99, 235, 0.22) 0%, transparent 50%),
              radial-gradient(ellipse 100% 50% at 50% -10%, rgba(14, 165, 233, 0.25) 0%, transparent 45%)
            `,
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background: `
              radial-gradient(ellipse 100% 80% at 50% -10%, rgba(56, 189, 248, 0.16) 0%, transparent 50%),
              radial-gradient(ellipse 70% 55% at 78% 35%, rgba(14, 165, 233, 0.18) 0%, transparent 55%),
              radial-gradient(ellipse 55% 45% at 12% 55%, rgba(30, 64, 175, 0.22) 0%, transparent 50%)
            `,
          }}
        />
      </motion.div>

      {/* Wall grid — strong in light, soft in dark */}
      <motion.div
        className="absolute inset-0 dark:hidden"
        style={{
          y: midY,
          opacity: 0.35,
          backgroundImage: `
            linear-gradient(to right, rgba(14, 116, 144, 0.9) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(14, 116, 144, 0.9) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 85% 70% at 55% 38%, black 15%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 70% at 55% 38%, black 15%, transparent 78%)",
          transform: "perspective(1100px) rotateX(8deg) scale(1.15)",
          transformOrigin: "center 30%",
        }}
      />
      <motion.div
        className="absolute inset-0 hidden dark:block"
        style={{
          y: midY,
          opacity: 0.06,
          backgroundImage: `
            linear-gradient(to right, rgba(186,230,253,0.85) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(186,230,253,0.85) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 50% 40%, black 20%, transparent 75%)",
          transform: "perspective(1100px) rotateX(6deg) scale(1.12)",
          transformOrigin: "center 35%",
        }}
      />

      {/* Perspective floor grid */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[72%] origin-bottom"
        style={{
          y: floorY,
          perspective: "850px",
          perspectiveOrigin: "50% 0%",
        }}
      >
        {/* Light mode floor — intentionally bold */}
        <div
          className="absolute inset-0 origin-bottom dark:hidden"
          style={{
            transform: "rotateX(58deg) translateY(4%) scale(1.45)",
            backgroundImage: `
              linear-gradient(to right, rgba(8, 145, 178, 0.75) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(8, 145, 178, 0.6) 2px, transparent 2px)
            `,
            backgroundSize: "44px 44px",
            maskImage:
              "linear-gradient(to top, black 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 60%, transparent 90%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 60%, transparent 90%)",
          }}
        />
        {/* Dark mode floor */}
        <div
          className="absolute inset-0 origin-bottom hidden dark:block"
          style={{
            transform: "rotateX(58deg) translateY(6%) scale(1.4)",
            backgroundImage: `
              linear-gradient(to right, rgba(34, 211, 238, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 211, 238, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 45%, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 45%, transparent 85%)",
          }}
        />
        <div className="absolute inset-x-[8%] bottom-[14%] h-[30%] rounded-[100%] bg-cyan-500/40 blur-3xl dark:bg-cyan-400/20" />
      </motion.div>

      {/* Orbs */}
      <motion.div
        className="absolute right-[8%] top-[12%] h-[50vmin] w-[50vmin] rounded-full bg-cyan-400/40 blur-3xl dark:bg-cyan-400/20"
        style={{ y: farY }}
      />
      <motion.div
        className="absolute left-[4%] top-[38%] h-[34vmin] w-[34vmin] rounded-full bg-blue-500/25 blur-3xl dark:bg-blue-500/15"
        style={{ x: orbX, y: midY }}
      />
      <motion.div
        className="absolute right-[34%] top-[8%] h-[16vmin] w-[16vmin] rounded-full bg-sky-400/50 blur-2xl dark:bg-cyan-200/30"
        style={{ y: midY }}
        animate={{ opacity: [0.55, 0.95, 0.55], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Light shafts */}
      <div
        className="absolute -top-[15%] left-[38%] h-[115%] w-[42%] skew-x-[-12deg] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-2xl dark:via-cyan-300/10"
      />

      {/* Dust motes */}
      {dust.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-teal-700 shadow-[0_0_8px_rgba(13,148,136,0.5)] dark:bg-cyan-100 dark:shadow-[0_0_6px_rgba(165,243,252,0.6)]"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
          }}
          animate={{
            y: [0, -16, 0],
            opacity: [0.25, 0.7, 0.25],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Horizon */}
      <div className="absolute inset-x-0 bottom-[34%] h-[2px] bg-gradient-to-r from-transparent via-cyan-600/70 to-transparent shadow-[0_0_20px_rgba(8,145,178,0.55)] dark:via-cyan-300/50 dark:shadow-[0_0_24px_rgba(34,211,238,0.35)]" />

      {/* Mild bottom fade only */}
      <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-[#e8f0f8] to-transparent dark:from-[#020617]" />

      {/* Light vignette only at corners */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background:
            "radial-gradient(ellipse 95% 85% at 50% 40%, transparent 55%, rgba(203, 213, 225, 0.35) 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden dark:block"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 42%, transparent 30%, rgba(2, 6, 23, 0.5) 100%)",
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
