import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  // Default mobile-safe before hydration
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 — bio */}
        <div className="flex items-start md:items-end grid-default-color grid-1 border border-white/10">
          <img
            src="assets/coding-povv.webp"
            alt=""
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] opacity-30 md:opacity-100 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5] pointer-events-none select-none"
          />
          <div className="relative z-10 w-full max-w-none md:max-w-[90%] pr-2">
            <p className="headtext">Hi, I&apos;m Sandesh</p>
            <p className="subtext text-left text-pretty">
              A Full-Stack Engineer with a strong Computer Science foundation. I
              specialize in building scalable, end-to-end web applications using
              TypeScript, Next.js, Node.js, and relational databases.
            </p>
            <p className="subtext mt-2 text-left text-pretty">
              Whether it&apos;s architecting clean REST APIs, handling secure
              data validation with Zod, or crafting responsive, performant user
              interfaces, I focus on building reliable software systems that
              solve real-world problems. I&apos;m especially passionate about
              SaaS platforms, financial technology, and real-time data systems.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>

        {/* Grid 2 — craft cards (drag only on desktop) */}
        <div className="grid-default-color grid-2 border border-white/10">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="NETWORKING"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              image="assets/logos/nodejs.svg"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "50deg", top: "30%", left: "75%" }}
              image="assets/logos/typescript.svg"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/css3.svg"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "25deg", top: "65%", left: "40%" }}
              image="assets/logos/zustand.svg"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "-25deg", top: "70%", left: "25%" }}
              image="assets/logos/github.svg"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "15deg", top: "50%", left: "10%" }}
              text="Cloud"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "12deg", top: "15%", left: "65%" }}
              image="assets/logos/axios.svg"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "-20deg", top: "45%", left: "75%" }}
              image="assets/logos/expressjs.svg"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "35deg", top: "75%", left: "50%" }}
              image="assets/logos/nextjs.svg"
              containerRef={grid2Container}
              drag={isDesktop}
            />
            <Card
              style={{ rotate: "-15deg", top: "55%", left: "60%" }}
              image="assets/logos/ai.svg"
              containerRef={grid2Container}
              drag={isDesktop}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-black-color grid-3 border border-white/10">
          <div className="z-10 w-[55%] md:w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in Kathmandu, Nepal (UTC+5:45). Open to remote opportunities
              worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4 border border-white/10">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-default-color grid-5 border border-white/10">
          <div className="z-10 w-[55%] md:w-[50%]">
            <p className="headtext">Tech Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
