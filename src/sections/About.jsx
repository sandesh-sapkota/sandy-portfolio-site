import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&apos;m Sandesh</p>
            <p className="subtext">
              A passionate frontend developer based in Kathmandu, Nepal. I specialize in building modern, responsive, and AI-powered web applications using React.js, Next.js, and TypeScript.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
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
            />
            <Card
              style={{ rotate: "-30deg", top: "60%", left: "45%" }}
              image="assets/logos/nodejs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "50deg", top: "30%", left: "75%" }}
              image="assets/logos/typescript.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              image="assets/logos/react.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/css3.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", top: "65%", left: "40%" }}
              image="assets/logos/zustand.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "70%", left: "25%" }}
              image="assets/logos/github.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/tailwindcss.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "15deg", top: "50%", left: "10%" }}
              text="Cloud"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "12deg", top: "15%", left: "65%" }}
              image="assets/logos/axios.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "45%", left: "75%" }}
              image="assets/logos/expressjs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "35deg", top: "75%", left: "50%" }}
              image="assets/logos/nextjs.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "55%", left: "60%" }}
              image="assets/logos/ai.svg"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Based in Kathmandu, Nepal (UTC+5:45). Open to remote opportunities worldwide.
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools taht
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
