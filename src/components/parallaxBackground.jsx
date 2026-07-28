import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

/**
 * Premium 3D hero atmosphere — perspective floor, volumetric light,
 * layered fog, and floating luminous orbs. CSS-only for performance;
 * the laptop remains the primary 3D subject.
 */
const ParallaxBackground = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { damping: 42, stiffness: 85 });

  const floorY = useTransform(progress, [0, 0.45], ["0%", "12%"]);
  const midY = useTransform(progress, [0, 0.45], ["0%", "8%"]);
  const farY = useTransform(progress, [0, 0.45], ["0%", "4%"]);
  const orbX = useTransform(progress, [0, 0.45], ["0%", "-5%"]);

  const dust = useMemo(
    () =>
      Array.from({ length: isMobile ? 6 : 18 }, (_, i) => ({
        id: i,
        left: `${6 + ((i * 17) % 88)}%`,
        top: `${10 + ((i * 23) % 70)}%`,
        size: 1 + (i % 3),
        delay: (i % 7) * 0.55,
        duration: 5.5 + (i % 5) * 1.2,
        opacity: 0.15 + (i % 4) * 0.08,
      })),
    [isMobile]
  );

  return (
    <div
      className="absolute inset-0 -z-10 h-full w-full overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Deep void base */}
      <div className="absolute inset-0 bg-[#020617]" />

      {/* Atmospheric depth wash */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: farY,
          background: `
            radial-gradient(ellipse 100% 80% at 50% -10%, rgba(56, 189, 248, 0.16) 0%, transparent 50%),
            radial-gradient(ellipse 70% 55% at 78% 35%, rgba(14, 165, 233, 0.18) 0%, transparent 55%),
            radial-gradient(ellipse 55% 45% at 12% 55%, rgba(30, 64, 175, 0.22) 0%, transparent 50%),
            radial-gradient(ellipse 90% 60% at 50% 100%, rgba(2, 6, 23, 1) 0%, transparent 55%)
          `,
        }}
      />

      {/* Distant wall grid (subtle, behind subject) */}
      <motion.div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          y: midY,
          backgroundImage: `
            linear-gradient(to right, rgba(186, 230, 253, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(186, 230, 253, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse 70% 55% at 55% 35%, black 10%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 55% at 55% 35%, black 10%, transparent 70%)",
          transform: "perspective(1200px) rotateX(8deg) scale(1.15)",
          transformOrigin: "center 40%",
        }}
      />

      {/* 3D perspective floor grid */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[58%] origin-bottom"
        style={{
          y: floorY,
          perspective: "900px",
          perspectiveOrigin: "50% 0%",
        }}
      >
        <div
          className="absolute inset-0 origin-bottom"
          style={{
            transform: "rotateX(62deg) translateY(8%) scale(1.35)",
            backgroundImage: `
              linear-gradient(to right, rgba(34, 211, 238, 0.22) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 211, 238, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 45%, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 45%, transparent 85%)",
          }}
        />
        {/* Floor reflection glow */}
        <div
          className="absolute inset-x-[15%] bottom-[18%] h-[28%] rounded-[100%] blur-3xl"
          style={{
            background:
              "radial-gradient(ellipse, rgba(34, 211, 238, 0.18) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* Volumetric light shafts */}
      <div
        className="absolute -top-[20%] left-[42%] h-[120%] w-[38%] opacity-40 mix-blend-screen"
        style={{
          background:
            "linear-gradient(105deg, transparent 0%, rgba(56, 189, 248, 0.07) 35%, rgba(125, 211, 252, 0.12) 48%, rgba(56, 189, 248, 0.06) 62%, transparent 100%)",
          filter: "blur(18px)",
          transform: "skewX(-12deg)",
        }}
      />
      <div
        className="absolute -top-[10%] right-[8%] h-[90%] w-[22%] opacity-30 mix-blend-screen"
        style={{
          background:
            "linear-gradient(118deg, transparent 0%, rgba(14, 165, 233, 0.1) 40%, transparent 75%)",
          filter: "blur(24px)",
          transform: "skewX(-8deg)",
        }}
      />

      {/* Premium luminous orbs (glass-like depth) */}
      <motion.div
        className="absolute right-[12%] top-[18%] h-[42vmin] w-[42vmin]"
        style={{ y: farY }}
      >
        <div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 35% 35%, rgba(165, 243, 252, 0.35) 0%, rgba(34, 211, 238, 0.15) 28%, rgba(14, 165, 233, 0.06) 50%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-[18%] rounded-full border border-cyan-200/10"
          style={{
            background:
              "radial-gradient(circle at 30% 28%, rgba(255,255,255,0.12) 0%, rgba(34,211,238,0.05) 40%, transparent 70%)",
            boxShadow:
              "inset 0 0 40px rgba(34, 211, 238, 0.12), 0 0 80px rgba(14, 165, 233, 0.15)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute left-[6%] top-[42%] h-[28vmin] w-[28vmin]"
        style={{ x: orbX, y: midY }}
      >
        <div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background:
              "radial-gradient(circle at 40% 35%, rgba(147, 197, 253, 0.28) 0%, rgba(59, 130, 246, 0.1) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-[22%] rounded-full border border-sky-200/10"
          style={{
            background:
              "radial-gradient(circle at 32% 30%, rgba(255,255,255,0.1) 0%, transparent 65%)",
            boxShadow: "inset 0 0 30px rgba(59, 130, 246, 0.1)",
          }}
        />
      </motion.div>

      {/* Smaller accent orb */}
      <motion.div
        className="absolute right-[38%] top-[12%] h-[12vmin] w-[12vmin] rounded-full blur-xl"
        style={{
          y: midY,
          background:
            "radial-gradient(circle, rgba(186, 230, 253, 0.35) 0%, rgba(34, 211, 238, 0.08) 50%, transparent 75%)",
        }}
        animate={{ opacity: [0.45, 0.75, 0.45], scale: [1, 1.06, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating dust motes */}
      {dust.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-cyan-100"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            boxShadow: "0 0 6px rgba(165, 243, 252, 0.6)",
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [d.opacity * 0.4, d.opacity, d.opacity * 0.4],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Horizon glow line */}
      <div
        className="absolute inset-x-0 bottom-[38%] h-px"
        style={{
          background:
            "linear-gradient(to right, transparent 5%, rgba(34, 211, 238, 0.35) 40%, rgba(125, 211, 252, 0.5) 50%, rgba(34, 211, 238, 0.35) 60%, transparent 95%)",
          boxShadow: "0 0 24px rgba(34, 211, 238, 0.35)",
        }}
      />

      {/* Ground fog */}
      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-[#020617] via-[#020617]/85 to-transparent" />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 85% 75% at 50% 42%, transparent 25%, rgba(2, 6, 23, 0.45) 75%, rgba(2, 6, 23, 0.78) 100%)",
        }}
      />

      {/* Soft film grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />
    </div>
  );
};

export default ParallaxBackground;
