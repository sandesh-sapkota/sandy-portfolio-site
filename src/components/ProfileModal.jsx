/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";

const interests = [
  {
    label: "Markets & Trading",
    detail: "Financial markets, charts, and systematic decision-making",
  },
  {
    label: "FinTech Systems",
    detail: "Payments, order flows, and real-time product experiences",
  },
  {
    label: "Music",
    detail: "Singing and playing instruments",
  },
  {
    label: "Travel & Learning",
    detail: "Exploring places, ideas, and new technical domains",
  },
];

const skills = [
  "TypeScript",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "React",
  "Zustand",
];

const ProfileModal = ({ isOpen, onClose, profileImage }) => {
  const dialogRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      setIsAnimating(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsAnimating(false);
      const timeout = setTimeout(() => {
        if (dialog.open) dialog.close();
      }, 280);
      document.body.style.overflow = "unset";
      return () => clearTimeout(timeout);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-[10000] m-0 h-[100dvh] max-h-[100dvh] w-full max-w-full overflow-hidden border-0 bg-transparent p-0 backdrop:bg-slate-950/75 backdrop:backdrop-blur-md"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
    >
      <div
        className="flex h-full w-full items-center justify-center overflow-y-auto overscroll-contain px-4 py-6 sm:py-8"
        onClick={onClose}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div
          className={`relative my-auto flex w-full max-w-lg max-h-[min(88dvh,720px)] flex-col overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-slate-950 shadow-2xl shadow-black/20 dark:shadow-black/50 transition-all duration-300 ${
            isAnimating ? "scale-100 opacity-100" : "scale-[0.96] opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32"
            style={{
              background:
                "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(34, 211, 238, 0.12) 0%, transparent 70%)",
            }}
          />

          <button
            className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-950/80 text-neutral-300 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
            onClick={onClose}
            type="button"
            aria-label="Close profile"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Scrollable body */}
          <div
            className="relative z-10 overflow-y-auto overscroll-contain p-5 sm:p-6 md:p-7"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="mb-5 flex flex-col items-center text-center">
              <div className="mb-3 rounded-full bg-gradient-to-br from-cyan-400/80 via-sky-500/70 to-blue-600/80 p-[2px] shadow-lg shadow-cyan-500/20">
                <div className="h-20 w-20 overflow-hidden rounded-full border border-white/10 bg-slate-950 sm:h-24 sm:w-24">
                  <img
                    src={profileImage}
                    alt="Sandesh Sapkota"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
                Sandesh Sapkota
              </h2>
              <p className="mt-1 text-sm font-medium text-cyan-700 dark:text-cyan-300/90">
                Full-Stack Software Engineer
              </p>
              <p className="mt-1.5 text-xs text-slate-500 dark:text-neutral-500">
                Kathmandu, Nepal · Open to remote
              </p>
            </div>

            <section className="mb-4 rounded-xl border border-black/10 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-3.5 text-left sm:p-4">
              <h3 className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-400/90">
                About
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 dark:text-neutral-300">
                Full-Stack Engineer with a Computer Science foundation. I design
                and ship end-to-end systems with TypeScript, Next.js, Node.js,
                and relational databases — with strong interest in SaaS,
                payments, and financial technology.
              </p>
            </section>

            <section className="mb-4 text-left">
              <h3 className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-neutral-400">
                Interests & Focus
              </h3>
              <ul className="space-y-2">
                {interests.map((item) => (
                  <li
                    key={item.label}
                    className="flex gap-3 rounded-xl border border-black/5 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] px-3 py-2.5"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">
                        {item.label}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-500 dark:text-neutral-400">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="pb-1 text-left">
              <h3 className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-neutral-400">
                Core Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-black/10 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ProfileModal;
