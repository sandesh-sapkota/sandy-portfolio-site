import { OrbitingCircles } from "./OrbitingCircles";

/* eslint-disable react/prop-types */
export function Frameworks() {
  const skills = [
    "nodejs",
    "expressjs",
    "nextjs",
    "typescript",
    "react",
    "tailwindcss",
    "zustand",
    "git",
    "github",
    "javascript",
    "mongodb",
    "axios",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={`outer-${skill}-${index}`} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {[...skills].reverse().map((skill, index) => (
          <Icon key={`inner-${skill}-${index}`} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
