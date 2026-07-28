import Hero from "./sections/Hero";
import Features from "./sections/Features";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Education from "./sections/Education";
import FocusAreas from "./sections/FocusAreas";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      {/* Full-bleed hero — background must span the entire viewport */}
      <Hero />
      <div className="mx-auto max-w-7xl overflow-x-hidden">
        <Features />
        <About />
        <TechStack />
        <Projects />
        <Experiences />
        <Education />
        <FocusAreas />
        <Contact />
      </div>
    </>
  );
};

export default App;
