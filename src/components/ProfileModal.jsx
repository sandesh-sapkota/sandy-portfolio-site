/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";

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
      setTimeout(() => {
        if (dialog.open) {
          dialog.close();
        }
      }, 300);
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleBackdropClick = (e) => {
    const dialog = dialogRef.current;
    const rect = dialog.getBoundingClientRect();
    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      className="p-0 m-0 bg-transparent backdrop:bg-black/60 backdrop:backdrop-blur-sm border-0 max-w-full max-h-full w-full h-full overflow-hidden"
      style={{
        zIndex: 10000,
        position: 'fixed',
        inset: 0,
      }}
    >
      <div className="flex items-center justify-center w-full min-h-full px-4 py-8 md:py-16">
        <div 
          className={`w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl border border-neutral-700 shadow-2xl overflow-hidden max-h-[90vh] relative transition-all duration-300 ${
            isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{
            transform: isAnimating ? 'scale(1)' : 'scale(0.9)',
            opacity: isAnimating ? 1 : 0,
          }}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 z-20 w-8 h-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center transition-colors"
            onClick={onClose}
            type="button"
          >
            <svg
              className="w-5 h-5 text-white"
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

          {/* Content */}
          <div className="p-6 md:p-8 text-center">
            {/* Profile Picture */}
            <div className="mb-6 flex justify-center">
              <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 p-1 shadow-lg shadow-purple-500/30">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-900 to-slate-950 overflow-hidden border border-neutral-600">
                  <img
                    src={profileImage}
                    alt="Sandesh Sapkota"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Name */}
            <h2 className="text-xl md:text-2xl font-black bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent mb-1">
              Sandesh Sapkota
            </h2>
            <p className="text-xs md:text-sm text-neutral-400 mb-4">
              Full-Stack Software Engineer
            </p>

            {/* About Me Section */}
            <div className="mb-4 text-left">
              <h3 className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2 uppercase tracking-wider">
                About Me
              </h3>
              <p className="text-xs md:text-sm text-neutral-300 leading-relaxed">
                Hi, I&apos;m Sandesh Sapkota (Sandy) from Kathmandu, Nepal. A
                Full-Stack Engineer with a Computer Science foundation — I build
                scalable end-to-end apps with TypeScript, Next.js, Node.js, and
                relational databases.
              </p>
            </div>

            {/* Interests Section */}
            <div className="mb-4 text-left">
              <h3 className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400 mb-2 uppercase tracking-wider">
                Interests
              </h3>
              <ul className="text-xs md:text-sm text-neutral-300 leading-relaxed space-y-0.5 list-none">
                <li>🎵 Music — singing and playing instruments</li>
                <li>✈️ Travelling — exploring new places</li>
                <li>
                  📚 Learning & Research — discovering new ideas and
                  knowledge
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {["TypeScript", "Next.js", "Node.js", "PostgreSQL", "React"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg text-cyan-300"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ProfileModal;
